import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import Dashboard from "@mui/icons-material/Dashboard";

const SidebarContent = () => (
    <React.Fragment>
        <List>
            <ListItem button>
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </List>
    </React.Fragment>
)

export default SidebarContent;