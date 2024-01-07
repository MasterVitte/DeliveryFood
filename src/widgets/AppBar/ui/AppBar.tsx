import React from 'react'
import {AppBarWrapper} from "./AppBarWrapper";
import {AppBarProps, Grid, styled} from "@mui/material";
import {AppProfile} from "./AppProfile";
import {AppLogo} from "./AppLogo";
import {CartButton} from "./CartButton";

const AppToolbar = styled(Grid)(() => ({
    padding: 0,
    height: '100%',
    borderBottom: '1px solid #E0E0E0',
}))

const AppLogoSection = styled(Grid)(() => ({
    height: '100%',
    width: 'auto'
}))

const AppProfileSection = styled(Grid)(() => ({
    height: '100%',
    width: 'auto'
}))

export const AppBar = (appBarProps: Omit<AppBarProps, 'children'>) => {
    return (
        <AppBarWrapper {...appBarProps}>
            <AppToolbar container justifyContent="space-between">
                <AppLogoSection item container alignItems="center">
                    <AppLogo />
                </AppLogoSection>
                <AppProfileSection item container alignItems="center">
                    <CartButton />
                    <AppProfile />
                </AppProfileSection>
            </AppToolbar>
        </AppBarWrapper>
    )
}