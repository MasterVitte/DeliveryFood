import React from 'react'
import {Grid, styled} from "@mui/material";
import {OrdersItem} from "./OrdersItem";
import {useStore} from "../../../store/StoreProvider";

const OrdersListWrapper = styled(Grid)(({theme}) => ({
    marginTop: theme.spacing(2)
}))

export const OrdersList = () => {
    const { orders } = useStore()

    return (
        <OrdersListWrapper container spacing={3}>
            {orders.map(order => <OrdersItem key={order.id} {...order} />)}
        </OrdersListWrapper>
    )
}