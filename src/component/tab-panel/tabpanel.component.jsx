import { Box } from "@mui/system";
import React, { useMemo } from "react";

const TabPanel = ({ children, value, index, ...other}) => {

    const isHidden = useMemo(() => value !== index, [value, index]);

    return (
        <div    role="tabpanel"
                hidden={isHidden}
                id={`tabpanel-${index}`}
                {...other} >
            <Box sx={{p:3}}>
                {children}
            </Box>
        </div>
    )
}

export default TabPanel;