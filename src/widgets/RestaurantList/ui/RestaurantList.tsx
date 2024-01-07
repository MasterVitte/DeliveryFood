import React from 'react'
import {Box, Grid, Typography} from "@mui/material";
import {RestaurantItem} from "./RestaurantItem";
import {useStore} from "../../../store/Store";

export const RestaurantList = () => {
    const { restaurants } = useStore()

    return (
        <Box component="div">
            <Typography variant="h4" fontWeight={600}>Рестораны</Typography>
            <Grid container spacing={3}>
                {restaurants.map(restaurant => <RestaurantItem key={restaurant.id} id={restaurant.id} />)}
            </Grid>
        </Box>
    )
}