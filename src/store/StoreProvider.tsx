import React, {createContext, PropsWithChildren, useCallback, useContext} from 'react'
import {Restaurant} from "../entities/Resturant/model";
import {Cart} from "../entities/Cart/model";
import {Order} from "../entities/Order/model";
import {useCartStore} from "./Cart/useCartStore";
import {useConfigureStore} from "./lib/useConfigureStore";
import {useRestaurantStore} from "./Restaurant/useRestaurantStore";
import {useOrderStore} from "./Order/useOrderStore";

export interface ContextType extends StoreProviderType {
    addToCard: ({ restaurantId, menuItemId }: { restaurantId: string | null, menuItemId: string }) => void
    removeFromCart: ({ menuItemId }: { menuItemId: string }) => void
    clearCart: () => void
    getRestaurantById: (id: string) => (Restaurant | undefined)
    confirmOrder: (order: Order) => void
    getOrderById: (id: string) => (Order | undefined)
    setActiveFirstOrderOnView: () => void
    setActiveOrderOnView: (id: string) => void
    openClearCartModal: () => void
    closeClearCartModal: () => void
}

export interface StoreProviderType {
    restaurants: Restaurant[]
    cart: Cart
    activeOrderOnView: string | null
    clearCartModalShow: boolean
    orders: Order[]
}

const Context = createContext<ContextType>({} as ContextType)

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const { restaurants, cart, orders, activeOrderOnView, clearCartModalShow, setState } = useConfigureStore()

    const { addToCard, removeFromCart, clearCart } = useCartStore({ cart, setState })
    const { getRestaurantById } = useRestaurantStore({ restaurants })
    const { confirmOrder, getOrderById, setActiveFirstOrderOnView, setActiveOrderOnView } = useOrderStore({ orders, setState })
    
    const openClearCartModal = useCallback(() => {
        setState(prevState => {
            return {
                ...prevState,
                clearCartModalShow: true
            }
        })
    }, [setState])

    const closeClearCartModal = useCallback(() => {
        setState(prevState => {
            return {
                ...prevState,
                clearCartModalShow: false
            }
        })
    }, [setState])

    return <Context.Provider value={{
        openClearCartModal,
        closeClearCartModal,
        clearCartModalShow,
        activeOrderOnView,
        restaurants,
        cart,
        orders,
        getRestaurantById,
        addToCard,
        removeFromCart,
        clearCart,
        confirmOrder,
        getOrderById,
        setActiveFirstOrderOnView,
        setActiveOrderOnView
    }}
    >
        {children}
    </Context.Provider>
}

export const useStore = () => useContext(Context)