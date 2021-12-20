import { Divider, IconButton, Toolbar } from "@mui/material";
import Drawer from "../../component/drawer/Drawer.component";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { connect } from "react-redux";
import { createStructuredSelector} from "reselect";
import { selectSidebar } from "../../redux/layout/layout.selectors";
import { toggleSidebar } from "../../redux/layout/layout.slice.js"
import SidebarContent from "./sidebar.content";

const Sidebar = ({open, dispatch}) => {
    return (
    <Drawer open={open} variant="permanent">
        <Toolbar sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        }}>
            <IconButton onClick={() => dispatch(toggleSidebar())}>
                <ChevronLeftIcon />
            </IconButton>
        </Toolbar>
        <Divider />
        <SidebarContent />
    </Drawer>
)}

const mapStateToProps = createStructuredSelector({
    open: selectSidebar
});

export default connect(mapStateToProps)(Sidebar);