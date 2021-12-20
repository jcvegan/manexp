import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector} from "reselect";
import { Container, IconButton, Toolbar, Typography } from "@mui/material";

import AppBar from "../../component/appbar/AppBar.component";

import MenuIcon from '@mui/icons-material/Menu';

import { selectSidebar } from "../../redux/layout/layout.selectors";
import { toggleSidebar } from "../../redux/layout/layout.slice";

const Header = ({ appName, open, dispatch}) => (
    <AppBar position="absolute" open={open}>
        <Toolbar sx={{ pr: '24px'}}>
            <IconButton edge="start"
                        color="inherit" 
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                        onClick={() => dispatch(toggleSidebar())}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6">{appName}</Typography>
        </Toolbar>
    </AppBar>
)

const mapStateToProps = createStructuredSelector({
    open: selectSidebar
});

export default connect(mapStateToProps)(Header);