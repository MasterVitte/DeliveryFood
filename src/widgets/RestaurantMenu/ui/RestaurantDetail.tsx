import React from 'react'
import {Grid} from "@mui/material"
import {RestaurantPreview} from "./RestaurantPreview"
import {RestaurantMenuList} from "./RestaurantMenuList"

export const RestaurantDetail = () => {
    return (
        <Grid item lg={8} md={8} sm={8} xs={8} container justifyContent="center">
            <Grid item container direction="column" alignItems="center">
                <RestaurantPreview/>
                <RestaurantMenuList/>
            </Grid>
        </Grid>
    )
}