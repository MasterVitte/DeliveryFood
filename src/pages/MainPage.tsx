import React from 'react'
import {RestaurantList} from "../widgets/RestaurantList/ui/RestaurantList";
import {Box, styled} from "@mui/material";

const MainBoxWrapper = styled(Box)(({theme}) => ({
    padding: theme.spacing(0, 5)
}))


export const MainPage = () => {
    return (
        <MainBoxWrapper>
            <RestaurantList />
        </MainBoxWrapper>
    )
}