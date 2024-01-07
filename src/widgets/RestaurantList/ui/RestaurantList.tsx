import React from 'react'
import {Grid, styled} from "@mui/material"
import {RestaurantItem} from "./RestaurantItem"
import {useStore} from "../../../store/StoreProvider"

const RestaurantListWrapper = styled(Grid)(({theme}) => ({
    marginTop: theme.spacing(2)
}))

export const RestaurantList = () => {
    const {restaurants} = useStore()

    return (
        <RestaurantListWrapper container spacing={3}>
            {restaurants.map(restaurant => <RestaurantItem key={restaurant.id} {...restaurant} />)}
        </RestaurantListWrapper>
    )
}