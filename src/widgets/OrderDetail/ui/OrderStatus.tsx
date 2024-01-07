import React from 'react'
import {Typography} from "@mui/material";
import {Order, ORDER_STATUS_ICON_DICTIONARY} from "../../../entities/Order/model";

interface Props {
    status: Order['status']
}

export const OrderStatus = ({status}: Props) => {
    const Icon = ORDER_STATUS_ICON_DICTIONARY[status]

    return (
        <>
            <Icon/>
            <Typography variant="h5" fontWeight={600} style={{marginLeft: '8px'}}>Принят</Typography>
        </>
    )
}