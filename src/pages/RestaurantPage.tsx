import React from 'react'
import {RestaurantMenu} from "../widgets/RestaurantMenu/ui/RestaurantMenu";
import {Grid} from "@mui/material";

export const RestaurantPage = () => {
    return (
        <Grid container wrap="nowrap" gap={3}>
            <Grid lg={1}></Grid>
            <RestaurantMenu/>
            <Grid lg={2}></Grid>
        </Grid>
    )
}