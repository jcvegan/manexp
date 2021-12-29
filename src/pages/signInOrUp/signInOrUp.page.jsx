import React from "react";
import Container from "../../component/container/container.component";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const SignInOrUpPage = () => {
    
    return (
        <Container>
            <Tabs>
                <Tab label="Sign In" />
                <Tab label="Sign Up" />
            </Tabs>
        </Container>
    )
}

export default SignInOrUpPage;