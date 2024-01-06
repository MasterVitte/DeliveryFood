import React from 'react'
import {Grid} from "@mui/material";
import {RestaurantPreview} from "./RestaurantPreview";
import {RestaurantMenuList} from "./RestaurantMenuList";

export const RestaurantMenu = () => {
    return (
        <Grid lg={9} container justifyContent="center">
            <Grid item container direction="column" alignItems="center">
                <RestaurantPreview/>
                <RestaurantMenuList/>
            </Grid>
        </Grid>
    )
}