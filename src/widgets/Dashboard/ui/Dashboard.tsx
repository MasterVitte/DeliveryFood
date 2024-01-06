import React from 'react'
import {AppBar} from "../../AppBar/ui/AppBar";
import {Box} from "@mui/material";

export const Dashboard = () => {
    return (
        <>
            <AppBar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
            </Box>
        </>
    )
}