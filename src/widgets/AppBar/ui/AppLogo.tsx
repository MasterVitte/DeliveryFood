import React from 'react'
import logo from "../lib/assets/logo.svg";
import {styled, Typography} from "@mui/material";

const AppLogoImage = styled('img')(({theme}) => ({
    marginRight: theme.spacing(1)
}))

const AppTitle = styled(Typography)(({theme}) => ({
    color: theme.palette.text.primary,
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
}))

export const AppLogo = () => {
    return (
        <>
            <AppLogoImage src={logo} width={40} />
            <AppTitle variant="h5">
                Delivery Food
            </AppTitle>
        </>
    )
}