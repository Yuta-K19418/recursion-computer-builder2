import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";

const AppBar = () => (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
        <MuiAppBar
            position="static"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                backgroundColor: "#000060",
            }}
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Computer Builder
                </Typography>
            </Toolbar>
        </MuiAppBar>
    </Box>
);

export default AppBar;