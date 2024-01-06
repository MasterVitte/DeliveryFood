import React, {useState} from 'react'
import {Box, Button, Grid, styled, Typography} from "@mui/material";
import {CartItem} from "./CartItem";
import {green} from "@mui/material/colors";

const CartWrapper = styled(Grid)(({theme}) => ({
    backgroundColor: '#eee',
    borderRadius: 24,
    padding: theme.spacing(2, 2, 0),
    position: 'sticky',
    top: 120,
    height: 'calc(100vh - 160px)',
}))

const CartButtonClear = styled(Button)(({theme}) => ({
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

const CartButton = styled(Button)(({theme}) => ({
    backgroundColor: green[500],
    padding: theme.spacing(0, 2),
    color: theme.palette.background.paper,
    height: 50,
    borderRadius: 12,
    textTransform: 'none',

    '&:hover': {
        backgroundColor: theme.palette.text.primary,
    }
}))

export const Cart = () => {
    const [items] = useState([])

    const noData = !items.length

    return (
        <CartWrapper container flexDirection="column">
            <Grid item container justifyContent="space-between">
                <Box>
                    <Typography variant="h5" fontWeight={600}>Корзина</Typography>
                </Box>
                {!noData &&
                    <Box>
                        <CartButtonClear>Очистить</CartButtonClear>
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
                        <CartItem/>
                    </CartItemsWrapper>
                    <CartButtonWrapper container>
                        <CartButton fullWidth>
                            <Grid container justifyContent="space-between">
                                <Typography>Верно, к оплате</Typography>
                                <Typography>1000₽</Typography>
                            </Grid>
                        </CartButton>
                    </CartButtonWrapper>
                </>
            )}
        </CartWrapper>
    )
}