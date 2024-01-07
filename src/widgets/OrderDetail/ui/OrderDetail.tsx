import React from 'react'
import {Divider, Grid, styled, Typography} from "@mui/material";
import {OrderDetailCartItem} from "./OrderDetailCartItem";
import {useOrderItemFetch} from "../lib/useOrderItemFetch";
import {useStore} from "../../../store/StoreProvider";
import {OrderStatus} from "./OrderStatus";

const OrdersDetailWrapper = styled(Grid)(({theme}) => ({
    marginTop: theme.spacing(2)
}))

const OrdersDetailContent = styled(Grid)(({theme}) => ({
    borderRadius: 36,
    boxShadow: '0 8px 20px rgba(117, 115, 111, 0.2)',
    padding: theme.spacing(4, 3)
}))

const OrdersSystemInfoWrapper = styled(Grid)(({theme}) => ({
    color: theme.palette.text.disabled
}))

const OrdersStatusInfoWrapper = styled(Grid)(({theme}) => ({
    marginTop: theme.spacing(4)
}))

const OrdersAddressInfoWrapper = styled(Grid)(({theme}) => ({
    marginTop: theme.spacing(4)
}))

const OrdersAddressTitle = styled(Typography)(({theme}) => ({
    color: theme.palette.text.disabled
}))

const OrdersAddress = styled(Typography)(({theme}) => ({
    marginTop: theme.spacing(2)
}))

const OrderListWrapper = styled(Grid)(({theme}) => ({
    marginTop: theme.spacing(4)
}))

const OrderListTitle = styled(Typography)(({theme}) => ({
    color: theme.palette.text.disabled
}))

const OrderDivider = styled(Divider)(({theme}) => ({
    margin: theme.spacing(4, 0)
}))

const OrderTotalWrapper = styled(Grid)(({theme}) => ({
    marginTop: theme.spacing(4)
}))

export const OrderDetail = () => {
    const {activeOrderOnView} = useStore()

    const order = useOrderItemFetch(activeOrderOnView)

    if (!order) {
        return null
    }

    return (
        <OrdersDetailWrapper item container spacing={3}>
            <Grid container item lg={12} md={12} sm={12} xs={12} direction="column">
                <OrdersDetailContent>
                    <OrdersSystemInfoWrapper container justifyContent="space-between">
                        <Typography variant="caption">№{order.id}</Typography>
                        <Typography variant="caption">Создан {order.date}</Typography>
                    </OrdersSystemInfoWrapper>
                    <OrdersStatusInfoWrapper container alignItems="center" justifyContent="center">
                        <OrderStatus status={order.status} />
                    </OrdersStatusInfoWrapper>
                    <OrdersAddressInfoWrapper>
                        <OrdersAddressTitle>Адрес</OrdersAddressTitle>
                        <OrdersAddress>{order.address}</OrdersAddress>
                    </OrdersAddressInfoWrapper>
                    <OrderDivider/>
                    <OrderListWrapper>
                        <OrderListTitle>Состав заказа</OrderListTitle>
                        <Grid container>
                            {order.items.map(item => <OrderDetailCartItem key={item.id} {...item} />)}
                        </Grid>
                    </OrderListWrapper>
                    <OrderDivider/>
                    <OrderListWrapper>
                        <OrderListTitle>Оплата</OrderListTitle>
                        <OrderTotalWrapper container justifyContent="space-between">
                            <Typography variant="h6" fontWeight={600}>Итого</Typography>
                            <Typography variant="h6" fontWeight={600}>{order.total}₽</Typography>
                        </OrderTotalWrapper>
                    </OrderListWrapper>
                </OrdersDetailContent>
            </Grid>
        </OrdersDetailWrapper>
    )
}