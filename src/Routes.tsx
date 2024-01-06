import React from "react";
import {Route, Switch} from "react-router-dom";
import {OrdersPage} from "./pages/OrdersPage";
import {ProfilePage} from "./pages/ProfilePage";
import {AddressesPage} from "./pages/AddressesPage";
import {MainPage} from "./pages/MainPage";
import {RestaurantPage} from "./pages/RestaurantPage";

export const ROUTES = {
    orders: '/orders',
    profile: '/profile',
    addresses: '/addresses',
    restaurant: '/restaurant/:name',
    main: '/'
} as const

export const getRestaurantLinkByName = (name: string) => `${ROUTES.restaurant.replaceAll(':name', name)}`

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
            <Route path={ROUTES.restaurant}>
                <RestaurantPage />
            </Route>
            <Route path={ROUTES.main} exact>
                <MainPage />
            </Route>
        </Switch>
    )
}