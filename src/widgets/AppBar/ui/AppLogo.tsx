import React from 'react'
import logo from "../../../shared/images/logo.svg"
import {Grid, styled, Typography} from "@mui/material"
import {RouterLink} from "../../../shared/RouterLink/ui/RouterLink"
import {ROUTES} from "../../../Routes"

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
        <RouterLink to={ROUTES.main}>
            <Grid container alignItems="center">
                <AppLogoImage src={logo} width={40}/>
                <AppTitle variant="h5">
                    Delivery Food
                </AppTitle>
            </Grid>
        </RouterLink>
    )
}