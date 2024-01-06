import React from "react";
import {Route, Switch} from "react-router-dom";
import {OrdersPage} from "./pages/OrdersPage";
import {ProfilePage} from "./pages/ProfilePage";
import {AddressesPage} from "./pages/AddressesPage";
import {MainPage} from "./pages/MainPage";

export const ROUTES = {
    orders: '/orders',
    profile: '/profile',
    addresses: '/addresses',
    main: '/'
} as const

export const Routes = () => {
    return (

        <Switch>
            <Route path={ROUTES.orders}>
                <OrdersPage />
            </Route>
            <Route path={ROUTES.profile}>
                <ProfilePage />
            </Route>
            <Route path={ROUTES.addresses}>
                <AddressesPage />
            </Route>
            <Route path={ROUTES.main} exact>
                <MainPage />
            </Route>
        </Switch>
    )
}