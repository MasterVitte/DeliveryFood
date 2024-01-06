import React from 'react';
import './App.css';
import {Box, createTheme, CssBaseline, styled, ThemeProvider} from "@mui/material";
import {Dashboard} from "./widgets/Dashboard/ui/Dashboard";

const defaultTheme = createTheme();

const AppBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.action.hover,
}))

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={defaultTheme}>
                <AppBox sx={{display: 'flex'}}>
                    <CssBaseline/>
                    <Dashboard/>
                </AppBox>
            </ThemeProvider>
        </div>
    );
}

export default App;
