import React from 'react';
import {Box, createTheme, CssBaseline, styled, ThemeProvider} from "@mui/material";
import {BrowserRouter as Router} from "react-router-dom";
import {AppBar} from "./widgets/AppBar/ui/AppBar";
import {Routes} from "./Routes";

const defaultTheme = createTheme();

const AppBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.action.hover,
    height: '100vh'
}))

function App() {
    return (
        <div className="App">
            <Router>
                <Routes/>
                <ThemeProvider theme={defaultTheme}>
                    <AppBox sx={{display: 'flex'}}>
                        <CssBaseline/>
                        <AppBar/>
                    </AppBox>
                </ThemeProvider>
            </Router>
        </div>
    );
}

export default App;
