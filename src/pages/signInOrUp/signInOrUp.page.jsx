import React, { useState } from "react";
import Container from "../../component/container/container.component";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from "../../component/tab-panel/tabpanel.component";
import { Box } from "@mui/system";
import SignUp from "../../component/sign-up/sign-up.component";

const SignInOrUpPage = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Container>
            <Box sx={{ width: '25%' }}>
                <Box>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Sign In" id="tabpanel-0" />
                        <Tab label="Sign Up" id="tabpanel-1" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div>Hello</div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SignUp />
                </TabPanel>
            </Box>
            
        </Container>
    )
}

export default SignInOrUpPage;