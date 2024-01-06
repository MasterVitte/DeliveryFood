import React from 'react'
import {RestaurantMenu} from "../widgets/RestaurantMenu/ui/RestaurantMenu";
import {Grid} from "@mui/material";
import {Cart} from "../widgets/Cart/ui/Cart";

export const RestaurantPage = () => {
    return (
        <Grid container wrap="nowrap" gap={3}>
            <Grid lg={1} md={1} sm={1} xs={1}></Grid>
            <RestaurantMenu/>
            <Grid lg={3} md={3} sm={3} xs={3}>
                <Cart />
            </Grid>
        </Grid>
    )
}