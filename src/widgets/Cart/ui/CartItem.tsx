import React from 'react'
import {Grid, styled, Typography} from "@mui/material"
import {CartItemControls} from "../../../shared/CartItemControls/CartItemControls"
import {CartItem as CartItemType} from "../../../entities/Cart/model"

const CartItemWrapper = styled(Grid)(({theme}) => ({
    padding: theme.spacing(1, 0, 1, 0),
    height: 85
}))

const CartImgBox = styled(Grid)(() => ({
    borderRadius: 18,
    overflow: 'hidden',
    width: 60,
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

type Props = CartItemType & { restaurantId: string | null }

export const CartItem = ({ restaurantId, id, weight, count, price, image, name }: Props) => {

    return (
        <CartItemWrapper item lg={12} md={12} sm={12} xs={12} container wrap="nowrap" justifyContent="space-between">
            <Grid item container lg={8} md={8} sm={8} xs={8} wrap="nowrap" alignItems="center">
                <CartImgBox item container>
                    <CartImg src={image}/>
                </CartImgBox>
                <CartInfoBox item container lg={7} md={7} sm={7} xs={7}>
                    <Typography title={name} variant="body2" style={{textOverflow: 'ellipsis', maxHeight: '40px', overflow: 'hidden'}}>{name}</Typography>
                    <Grid container>
                        <Typography variant="body2">{price}₽ ·</Typography>
                        <Typography variant="body2">{weight}г</Typography>
                    </Grid>
                </CartInfoBox>
            </Grid>
            <Grid container item lg={4} md={4} sm={4} xs={4} alignItems="center">
                <CartItemControls restaurantId={restaurantId} id={id} count={count} />
            </Grid>
        </CartItemWrapper>
    )
}