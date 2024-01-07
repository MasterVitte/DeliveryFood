import React from 'react'
import {Button} from "../../../shared/Button/ui/Button";
import {ShoppingCart} from "@mui/icons-material";
import {useStore} from "../../../store/StoreProvider";
import {Typography} from "@mui/material";
import {RouterLink} from "../../../shared/RouterLink/ui/RouterLink";
import {getRestaurantLinkByName} from "../../../Routes";

export const CartButton = () => {
    const {cart} = useStore()

    if (!cart.restaurantId) {
        return null
    }

    return (
        <RouterLink to={getRestaurantLinkByName(cart.restaurantId || '')}>
            <Button startIcon={<ShoppingCart/>} style={{marginRight: '24px', height: '40px'}}>
                <Typography fontWeight={600}>{cart.total}₽</Typography>
            </Button>
        </RouterLink>
    )
}