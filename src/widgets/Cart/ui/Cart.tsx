import React from 'react'
import {Box, Grid, Button as MaterialButton, styled, Typography} from "@mui/material";
import {CartItem} from "./CartItem";
import {useStore} from "../../../store/StoreProvider";
import {Order} from "../../../entities/Order/model";
import { v4 } from 'uuid'
import {useParams} from "react-router";
import {Button} from "../../../shared/Button/ui/Button";

const CartWrapper = styled(Grid)(({theme}) => ({
    backgroundColor: '#eee',
    borderRadius: 24,
    padding: theme.spacing(2, 2, 0),
    position: 'sticky',
    top: 120,
    height: 'calc(100vh - 160px)',
}))

const CartButtonClear = styled(MaterialButton)(({theme}) => ({
    color: theme.palette.text.disabled,
    textTransform: 'none',
    borderRadius: 24
}))

const CartItemsWrapper = styled(Grid)(() => ({
    marginTop: '8px',
    overflow: 'auto',

    '&::-webkit-scrollbar': {
        width: '0.2em'
    },
    '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
    }
}))

const CartButtonWrapper = styled(Grid)(({theme}) => ({
    borderTop: '1px solid #E0E0E0',
    padding: theme.spacing(2)
}))

export const Cart = () => {
    const { cart, clearCart, getRestaurantById, confirmOrder } = useStore()

    const { id } = useParams<any>()

    const onSubmitOrder = () => {
        const order: Order = {
            id: v4().toString(),
            name: getRestaurantById(id)?.name || '',
            date: new Date().toLocaleString(),
            status: 'checking',
            total: cart.total,
            items: cart.items,
            address: 'ул. Пушкина дом Колотушкина 5'
        }

        confirmOrder(order)
        clearCart()
    }

    const noData = !cart.items.length

    return (
        <CartWrapper container flexDirection="column">
            <Grid item container justifyContent="space-between">
                <Box component="div">
                    <Typography variant="h5" fontWeight={600}>Корзина</Typography>
                </Box>
                {!noData &&
                    <Box component="div">
                        <CartButtonClear onClick={clearCart}>Очистить</CartButtonClear>
                    </Box>
                }
            </Grid>
            {noData &&
                <Grid container flex={1} alignItems="center">
                    <Typography variant="h6" fontWeight={600} align="center" style={{padding: '0 8px', width: '100%'}}>В вашей корзине
                        пока пусто</Typography>
                </Grid>
            }
            {!noData && (
                <>
                    <CartItemsWrapper item flex={1} container>
                        {cart.items.map(cartItem => <CartItem key={cartItem.id} restaurantId={cart.restaurantId} {...cartItem} />)}
                    </CartItemsWrapper>
                    <CartButtonWrapper container>
                        <Button fullWidth onClick={onSubmitOrder}>
                            <Grid container justifyContent="space-between">
                                <Typography>Оформить заказ</Typography>
                                <Typography>{cart.total}₽</Typography>
                            </Grid>
                        </Button>
                    </CartButtonWrapper>
                </>
            )}
        </CartWrapper>
    )
}