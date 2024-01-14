import React from 'react'
import {Box, Grid, styled, Typography} from "@mui/material"
import {Star} from "@mui/icons-material"
import {useParams} from "react-router"
import {useRestaurantFetch} from "../lib/useRestaurantFetch"

const PreviewGrid = styled(Grid)(() => ({
    borderRadius: 24,
    overflow: 'hidden',
    height: 360,
}))

const PreviewImg = styled('img')(() => ({
    objectFit: 'cover',
    objectPosition: '50%',
    width: '100%',
    height: '100%',
    filter: 'brightness(90%)'
}))

const PreviewInfoBox = styled(Box)(({theme}) => ({
    position: 'absolute',
    bottom: 0,
    padding: theme.spacing(3),
    color: theme.palette.background.paper
}))

const PreviewRatingCounter = styled(Typography)(({theme}) => ({
    marginLeft: theme.spacing(1)
}))

export const RestaurantPreview = () => {
    const { id } = useParams<any>()

    const restaurant = useRestaurantFetch(id)

    if (!restaurant) {
        return null
    }

    return (
        <PreviewGrid container position="relative">
            <PreviewImg src={restaurant.imageDetail} />
            <PreviewInfoBox>
                <Typography variant="h3" fontWeight={600}>{restaurant.name}</Typography>
                <Grid container alignItems="center">
                    <Star />
                    <PreviewRatingCounter variant="h6">{restaurant.rating} ({restaurant.feedBackCount})</PreviewRatingCounter>
                </Grid>
            </PreviewInfoBox>
        </PreviewGrid>
    )
}