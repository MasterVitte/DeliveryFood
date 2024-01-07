import React from 'react'
import {Add, Remove} from "@mui/icons-material";
import {Grid, styled, Typography} from "@mui/material";
import {useStore} from "../../store/StoreProvider";

const CartCountersWrapper = styled(Grid)(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 1),
    borderRadius: 24
}))

interface Props {
    restaurantId: string | null
    id: string
    count: number
}

export const CartItemControls = ({ restaurantId, id, count }: Props) => {
    const { removeFromCart, addToCard } = useStore()

    return (
        <CartCountersWrapper container alignItems="center" justifyContent="space-between">
            <Remove fontSize="small" onClick={() => removeFromCart({ menuItemId: id })} style={{cursor: 'pointer'}} />
            <Typography variant="caption" lineHeight={1} fontWeight={600}>{count}</Typography>
            <Add fontSize="small" onClick={() => addToCard({ restaurantId, menuItemId: id })} style={{cursor: 'pointer'}} />
        </CartCountersWrapper>
    )
}