import React from 'react'
import CardItemImg from '../../../shared/images/restaurant1_item1.png'
import {Grid, styled, Typography} from "@mui/material"
import {Add, Remove} from "@mui/icons-material";

const CartItemWrapper = styled(Grid)(({theme}) => ({
    padding: theme.spacing(1, 2, 1, 0),
    height: 85
}))

const CartImgBox = styled(Grid)(() => ({
    borderRadius: 24,
    overflow: 'hidden',
    height: 60
}))

const CartInfoBox = styled(Grid)(({theme}) => ({
    margin: theme.spacing(0, 1),
}))

const CartImg = styled('img')(() => ({
    objectFit: 'cover',
    width: '100%',
    height: '100%'
}))

const CartCountersWrapper = styled(Grid)(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 1),
    borderRadius: 24
}))

export const CartItem = () => {
    return (
        <CartItemWrapper lg={12} md={12} sm={12} xs={12} container wrap="nowrap" justifyContent="space-between">
            <Grid item container lg={8} md={8} sm={8} xs={8} wrap="nowrap" alignItems="center">
                <CartImgBox container lg={5} md={5} sm={5} xs={5}>
                    <CartImg src={CardItemImg}/>
                </CartImgBox>
                <CartInfoBox container lg={7} md={7} sm={7} xs={7}>
                    <Typography title="" variant="body2" style={{textOverflow: 'ellipsis', maxHeight: '40px', overflow: 'hidden'}}>Dream Team</Typography>
                    <Grid container>
                        <Typography variant="body2">1830₽ ·</Typography>
                        <Typography variant="body2">715 г</Typography>
                    </Grid>
                </CartInfoBox>
            </Grid>
            <Grid container item lg={4} md={4} sm={4} xs={4} alignItems="center">
                <CartCountersWrapper container alignItems="center" justifyContent="space-between">
                    <Remove fontSize="small"/>
                    <Typography variant="caption" lineHeight={1} fontWeight={600}>1</Typography>
                    <Add fontSize="small"/>
                </CartCountersWrapper>
            </Grid>
        </CartItemWrapper>
    )
}