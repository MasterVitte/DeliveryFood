import React from 'react'
import {Grid, styled, Typography} from "@mui/material"
import {Order, ORDER_STATUS_DICTIONARY} from "../../../entities/Order/model";
import {useStore} from "../../../store/StoreProvider";

const OrderWrapper = styled(Grid)(({theme}) => ({
    borderRadius: 36,
    boxShadow: '0 8px 20px rgba(117, 115, 111, 0.2)',
    padding: theme.spacing(4, 3)
}))

const ItemsWrapper = styled(Grid)(({theme}) => ({
    marginTop: theme.spacing(2)
}))

const ItemImg = styled('img')(() => ({
    borderRadius: 12,
    width: 32,
    height: 32
}))

type Props = Order

export const OrdersItem = ({ id, name, total, status, date, items }: Props) => {
    const { setActiveOrderOnView } = useStore()

    const onViewDetail = () => {
        setActiveOrderOnView(id)
    }

    return (
        <Grid container item lg={12} md={12} sm={12} xs={12} direction="column" style={{cursor: 'pointer'}} onClick={onViewDetail}>
            <OrderWrapper>
                <Grid container justifyContent="space-between">
                    <Typography variant="h6" fontWeight={600}>{name}</Typography>
                    <Typography variant="h6" fontWeight={600}>{total}₽</Typography>
                </Grid>
                <Grid container justifyContent="space-between">
                    <Typography variant="body2">{date}</Typography>
                    <Typography variant="body2">{ORDER_STATUS_DICTIONARY[status]}</Typography>
                </Grid>
                <ItemsWrapper container gap={1}>
                    {items.map(item => <ItemImg src={item.image} />)}
                </ItemsWrapper>
            </OrderWrapper>
        </Grid>
    )
}