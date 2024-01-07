import {mockStore} from "./fixtures";
import {useEffect, useState} from "react";
import {StoreProviderType} from "../StoreProvider";

export const useConfigureStore = () => {
    const persistRestaurants = localStorage.getItem('restaurants')
    const persistCart = localStorage.getItem('cart')
    const persistOrders = localStorage.getItem('orders')
    const persistActiveOrderOnView = localStorage.getItem('activeOrderOnView')
    const persistClearCartModalShow = localStorage.getItem('clearCartModalShow')

    const persistState = {
        restaurants: persistRestaurants ? JSON.parse(persistRestaurants) : mockStore.restaurants,
        cart: persistCart ? JSON.parse(persistCart) : mockStore.cart,
        orders: persistOrders ? JSON.parse(persistOrders) : mockStore.orders,
        activeOrderOnView: persistActiveOrderOnView ? JSON.parse(persistActiveOrderOnView) : mockStore.activeOrderOnView,
        clearCartModalShow: persistClearCartModalShow ? JSON.parse(persistClearCartModalShow) : mockStore.clearCartModalShow,
    }

    const [{ restaurants, cart, orders, activeOrderOnView, clearCartModalShow }, setState] = useState<StoreProviderType>(persistState)
    
    const needFetch = !restaurants.length
    const needSyncLocalStorageWithStore = restaurants.length

    useEffect(() => {
        if (needFetch) {
            localStorage.setItem("restaurants", JSON.stringify(mockStore.restaurants))
            localStorage.setItem("cart", JSON.stringify(mockStore.cart))
            localStorage.setItem("orders", JSON.stringify(mockStore.orders))
        }
        
        if (needSyncLocalStorageWithStore) {
            localStorage.setItem("restaurants", JSON.stringify(restaurants))
            localStorage.setItem("cart", JSON.stringify(cart))
            localStorage.setItem("orders", JSON.stringify(orders))
        }
    }, [cart, needFetch, needSyncLocalStorageWithStore, orders, restaurants])

    return { restaurants, cart, orders, activeOrderOnView, clearCartModalShow, setState }
}