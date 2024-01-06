import React from 'react'
import {Grid, styled, Typography} from "@mui/material"
import Img from '../../../shared/images/restaurant1_background.png'
import {Star} from "@mui/icons-material";
import {RouterLink} from "../../../shared/RouterLink/ui/RouterLink";
import {getRestaurantLinkByName} from "../../../Routes";

const ListItemGrid = styled(Grid)(({theme}) => ({
    margin: theme.spacing(2, 0)
}))

const ListItemTitle = styled(Typography)(({theme}) => ({
    marginTop: theme.spacing(0.5)
}))

const ListItemBoxImg = styled(Grid)(() => ({
    overflow: 'hidden',
    borderRadius: 12,
    height: 200
}))

const ListItemImg = styled('img')(() => ({
    objectFit: 'cover',
    objectPosition: '50%',
    width: '100%',
    height: '100%'
}))

const ListItemStar = styled(Star)(({theme}) => ({
    width: 18,
    height: 18,
    color: theme.palette.action.disabled,
    marginRight: theme.spacing(0.5)
}))

const ListItemRatingCount = styled(Typography)(({theme}) => ({
    color: theme.palette.action.disabled,
}))

interface Props {
    id: string
}

export const RestaurantItem = ({id}: Props) => {
    return (
        <ListItemGrid key={id} item lg={3} md={3} sm={3} xs={3} container direction="column">
            <RouterLink to={getRestaurantLinkByName('shoko')}>
                <ListItemBoxImg item>
                    <ListItemImg src={Img}/>
                </ListItemBoxImg>
                <Grid item>
                    <ListItemTitle fontWeight={600}>Шоколадница</ListItemTitle>
                </Grid>
                <Grid item container alignItems="center">
                    <ListItemStar/>
                    <ListItemRatingCount fontWeight={600} variant="body2">3.8 (100)</ListItemRatingCount>
                </Grid>
            </RouterLink>
        </ListItemGrid>
    )
}