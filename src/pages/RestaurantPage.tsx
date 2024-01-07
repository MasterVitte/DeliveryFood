import React from 'react'
import {RestaurantDetail} from "../widgets/RestaurantMenu/ui/RestaurantDetail";
import {Grid} from "@mui/material";
import {Cart} from "../widgets/Cart/ui/Cart";

export const RestaurantPage = () => {
    return (
        <Grid container wrap="nowrap" gap={3}>
            <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
            <RestaurantDetail/>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <Cart />
            </Grid>
        </Grid>
    )
}