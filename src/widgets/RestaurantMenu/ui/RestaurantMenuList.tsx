import React from 'react'
import {Grid, styled, Typography} from "@mui/material";
import {RestaurantMenuItem} from "./RestaurantMenuItem";

const MenuListTitle = styled(Typography)(({theme}) => ({
    margin: theme.spacing(2, 0)
}))

export const RestaurantMenuList = () => {
    return (
        <>
            <Grid container style={{marginTop: '40px'}}>
                <MenuListTitle variant="h5" fontWeight={700}>Сеты</MenuListTitle>
            </Grid>
            <Grid container spacing={3}>
                <RestaurantMenuItem/>
            </Grid>
        </>
    )
}