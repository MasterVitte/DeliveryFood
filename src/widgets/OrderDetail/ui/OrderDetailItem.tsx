import React from 'react'
import {Box, Grid, styled, Typography} from "@mui/material"
import {CartItem} from "../../../entities/Cart/model";

const OrderItemWrapper = styled(Grid)(({theme}) => ({
    marginTop: theme.spacing(2)
}))

const OrderItemInfo = styled(Box)(({theme}) => ({
    marginLeft: theme.spacing(2)
}))

type Props = CartItem

export const OrderDetailItem = ({ count, price, image, name }: Props) => {
    return (
        <OrderItemWrapper container item wrap="nowrap" alignItems="center" justifyContent="space-between">
            <Box component="div" display="flex">
                <img src={image} width={48} height={48} alt="" />
                <OrderItemInfo component="div">
                    <Typography>{name}</Typography>
                    <Typography>{count} шт</Typography>
                </OrderItemInfo>
            </Box>
            <Typography>{price}₽</Typography>
        </OrderItemWrapper>
    )
}