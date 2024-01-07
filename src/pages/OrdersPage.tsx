import React, {useEffect} from 'react'
import {Grid, Typography} from "@mui/material";
import {OrdersList} from "../widgets/OrdersList/ui/OrdersList";
import {OrderDetail} from "../widgets/OrderDetail/ui/OrderDetail";
import {useStore} from "../store/StoreProvider";
import {Button} from "../shared/Button/ui/Button";
import CakeIcon from '@mui/icons-material/Cake';
import {RouterLink} from "../shared/RouterLink/ui/RouterLink";
import {ROUTES} from "../Routes";

export const OrdersPage = () => {
    const {setActiveFirstOrderOnView, orders} = useStore()

    useEffect(() => {
        setActiveFirstOrderOnView()
    }, [setActiveFirstOrderOnView])

    if (!orders.length) {
        return (
            <Grid container justifyContent="space-between">
                <Grid container>
                    <Typography variant="h4" fontWeight={600}>Мои заказы</Typography>
                </Grid>
                <Grid container style={{marginTop: '24px'}}>
                    <Typography variant="h6">У вас пока не было заказов</Typography>
                </Grid>
                <Grid container style={{marginTop: '24px'}}>
                    <RouterLink to={ROUTES.main}>
                        <Button startIcon={<CakeIcon />}>Заказать что-нибудь вкусненькое</Button>
                    </RouterLink>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container justifyContent="space-between">
            <Grid container>
                <Typography variant="h4" fontWeight={600}>Мои заказы</Typography>
            </Grid>
            <Grid item lg={5} md={5} sm={5} xs={5}>
                <OrdersList/>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
                <OrderDetail/>
            </Grid>
        </Grid>
    )
}