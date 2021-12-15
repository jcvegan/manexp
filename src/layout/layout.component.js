import { Container } from '@mui/material';
import { useState } from 'react';
import Header from '../fragmens/header.fragment';

const Layout = ({ children }) => {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <Container maxWidth="xl">
            <Header appName="Exp" />
            {children}
        </Container>
    )
}

export default Layout;