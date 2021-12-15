import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Header = ({ appName }) => (
    <AppBar>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography variant="h6">{appName}</Typography>
            </Toolbar>
        </Container>
    </AppBar>
)

export default Header;