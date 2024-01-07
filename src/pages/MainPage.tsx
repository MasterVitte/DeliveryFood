import React from 'react'
import {RestaurantList} from "../widgets/RestaurantList/ui/RestaurantList"
import {Box, Typography} from "@mui/material"

export const MainPage = () => {
    return (
        <Box component="div">
            <Typography variant="h4" fontWeight={600}>Рестораны</Typography>
            <RestaurantList />
        </Box>
    )
}