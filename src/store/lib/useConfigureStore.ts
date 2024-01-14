import {useState} from "react"
import {StoreProviderType} from "../StoreProvider"

export const useConfigureStore = () => {
    const [{ restaurants, cart, orders, activeOrderOnView, clearCartModalShow }, setState] = useState<StoreProviderType>({
        activeOrderOnView: null,
        cart: {
            restaurantId: null,
            total: 0,
            items: []
        },
        clearCartModalShow: false,
        orders: [],
        restaurants: []
    })

    return { restaurants, cart, orders, activeOrderOnView, clearCartModalShow, setState }
}