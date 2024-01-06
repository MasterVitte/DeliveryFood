import React from 'react'
import {Box, Grid, styled, Typography} from "@mui/material";
import {RestaurantItem} from "./RestaurantItem";

const ListTitle = styled(Typography)(() => ({
    marginBottom: 40
}))

export const RestaurantList = () => {
    return (
        <Box>
            <ListTitle variant="h4" fontWeight={600}>Рестораны</ListTitle>
            <Grid container spacing={3}>
                <RestaurantItem id="1" />
                <RestaurantItem id="1" />
                <RestaurantItem id="1" />
                <RestaurantItem id="1" />
                <RestaurantItem id="1" />
                <RestaurantItem id="1" />
            </Grid>
        </Box>
    )
}