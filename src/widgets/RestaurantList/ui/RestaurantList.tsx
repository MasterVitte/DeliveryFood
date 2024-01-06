import React from 'react'
import {Box, Grid, Typography} from "@mui/material";
import {RestaurantItem} from "./RestaurantItem";

export const RestaurantList = () => {
    return (
        <Box>
            <Typography variant="h4" fontWeight={600}>Рестораны</Typography>
            <Grid container spacing={3}>
                <RestaurantItem id="1" />
            </Grid>
        </Box>
    )
}