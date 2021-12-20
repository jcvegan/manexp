import { Box, Container, CssBaseline, Toolbar } from '@mui/material';
import Header from '../fragments/header/header.fragment';
import Sidebar from "../fragments/sidebar/sidebar.fragment";
import LayoutContent from './layout.content';

    const Layout = ({children}) => {
    return (
        <Box sx={{display:'flex'}}>
            <CssBaseline />
            <Header appName="ManExp" />
            <Sidebar />
            <Box component="main" sx={{
                backgroundColor: (theme) =>  theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}>
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <LayoutContent />
                </Container>
            </Box>
            
        </Box>
    )
}

export default Layout;