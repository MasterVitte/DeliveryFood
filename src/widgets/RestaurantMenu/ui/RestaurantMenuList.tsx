import React from 'react'
import {Grid, styled, Typography} from "@mui/material"
import {RestaurantMenuItem} from "./RestaurantMenuItem"
import {useParams} from "react-router"
import {useRestaurantFetch} from "../lib/useRestaurantFetch"

const MenuListTitle = styled(Typography)(({theme}) => ({
    margin: theme.spacing(2, 0)
}))

export const RestaurantMenuList = () => {
    const { id } = useParams<any>()

    const restaurant = useRestaurantFetch(id)

    if (!restaurant) {
        return null
    }

    return (
        <>
            {restaurant.menu.map(group => {
                return (
                    <React.Fragment key={group.id}>
                        <Grid container style={{marginTop: '40px'}}>
                            <MenuListTitle variant="h5" fontWeight={700}>{group.name}</MenuListTitle>
                        </Grid>
                        <Grid container spacing={3}>
                            {group.items.map(menuItem => <RestaurantMenuItem key={menuItem.id} restaurantId={restaurant.id} {...menuItem} />)}
                        </Grid>
                    </React.Fragment>
                )
            })}
        </>
    )
}