import React from 'react'
import {Box, Grid, styled, Typography} from "@mui/material";
import {RestaurantItem} from "./RestaurantItem";

const ListBoxWrapper = styled(Box)(() => ({
    margin: '80px auto 0',
    maxWidth: 1450
}))

const ListTitle = styled(Typography)(() => ({
    marginBottom: 40
}))

export const RestaurantList = () => {
    return (
        <ListBoxWrapper>
            <ListTitle variant="h4" fontWeight={600}>Рестораны</ListTitle>
            <Grid container spacing={3}>
                <RestaurantItem id="1" />
            </Grid>
        </ListBoxWrapper>
    )
}