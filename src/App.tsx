import React from 'react';
import {Box, createTheme, CssBaseline, styled, ThemeProvider} from "@mui/material";
import {BrowserRouter as Router} from "react-router-dom";
import {AppBar} from "./widgets/AppBar/ui/AppBar";
import {Routes} from "./Routes";
import {Footer} from "./widgets/Footer/ui/Footer";

const defaultTheme = createTheme();

const AppBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    height: '100vh'
}))

const LayoutRoute = styled(Box)(({theme}) => ({
    margin: theme.spacing(10, 0),
    width: '100%',
    height: '100vh'
}))

function App() {
    return (
        <div className="App">
            <Router>
                <ThemeProvider theme={defaultTheme}>
                    <AppBox sx={{display: 'flex', flexDirection: 'column'}}>
                        <CssBaseline/>
                        <AppBar/>
                        <LayoutRoute>
                            <Routes />
                        </LayoutRoute>
                        <Footer />
                    </AppBox>
                </ThemeProvider>
            </Router>
        </div>
    );
}

export default App;
