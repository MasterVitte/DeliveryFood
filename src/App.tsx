import React from 'react'
import {Box, createTheme, CssBaseline, Grid, styled, ThemeProvider} from "@mui/material"
import {BrowserRouter as Router} from "react-router-dom"
import {AppBar} from "./widgets/AppBar/ui/AppBar"
import {Routes} from "./Routes"
import {Footer} from "./widgets/Footer/ui/Footer"
import {StoreProvider} from "./store/StoreProvider"
import {LocalStorageApi} from "./api/LocalStorageApi"

const defaultTheme = createTheme();

const AppBox = styled(Grid)(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}))

const LayoutRoute = styled(Box)(({theme}) => ({
    margin: '120px auto 80px',
    padding: theme.spacing(0, 8),
    width: 1600,
    minHeight: '100vh'
}))

LocalStorageApi.init()

function App() {
    return (
        <div className="App">
            <StoreProvider>
                <Router>
                    <ThemeProvider theme={defaultTheme}>
                        <AppBox container flexDirection="column">
                            <CssBaseline/>
                            <AppBar/>
                            <LayoutRoute>
                                <Routes/>
                            </LayoutRoute>
                            <Footer/>
                        </AppBox>
                    </ThemeProvider>
                </Router>
            </StoreProvider>
        </div>
    );
}

export default App;
