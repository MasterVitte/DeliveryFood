import React from 'react'
import {Box, Grid, styled, Typography} from "@mui/material";
import RestaurantImg from '../../../shared/images/restaurant1_preview.png'
import {Star} from "@mui/icons-material";

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
    return (
        <PreviewGrid container position="relative">
            <PreviewImg src={RestaurantImg} />
            <PreviewInfoBox>
                <Typography variant="h3" fontWeight={600}>Secret Kitchen</Typography>
                <Grid container alignItems="center">
                    <Star />
                    <PreviewRatingCounter variant="h6">4.7 (200+)</PreviewRatingCounter>
                </Grid>
            </PreviewInfoBox>
        </PreviewGrid>
    )
}