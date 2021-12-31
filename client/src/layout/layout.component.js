import { Box, Container, CssBaseline, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/user/user.selectors';
import Header from '../fragments/header/header.fragment';
import Sidebar from "../fragments/sidebar/sidebar.fragment";
import LayoutContent from './layout.content';
import SignInOrUpPage from '../pages/signInOrUp/signInOrUp.page';

    const Layout = ({children}) => {
    
    const currentUser = useSelector(selectCurrentUser);

    return (
        <Box sx={{display:'flex'}}>
            <CssBaseline />
            { currentUser === null ? (<SignInOrUpPage />) : (<><Header appName="ManExp" />
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
            </Box></>)}
        </Box>
    )
}

export default Layout;