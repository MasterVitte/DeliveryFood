import React, {useCallback} from "react";
import {StoreProviderType} from "../StoreProvider";
import {Order} from "../../entities/Order/model";

interface Props {
    orders: Order[]
    setState: React.Dispatch<React.SetStateAction<StoreProviderType>>
}

export const useOrderStore = ({ orders, setState }: Props) => {
    const confirmOrder = useCallback((order: Order) => {
        setState(prevState => {
            return {
                ...prevState,
                orders: [...prevState.orders, order]
            }
        })
    }, [setState])
    
    const getOrderById = useCallback((id: string) => {
        return orders.find(order => order.id === id)
    }, [orders])

    const setActiveFirstOrderOnView = useCallback(() => {
        setState(prevState => {
            return {
                ...prevState,
                activeOrderOnView: orders[0]?.id || null
            }
        })
    }, [orders, setState])

    const setActiveOrderOnView = useCallback((id: string) => {
        setState(prevState => {
            return {
                ...prevState,
                activeOrderOnView: id
            }
        })
    }, [setState])

    return { confirmOrder, getOrderById, setActiveFirstOrderOnView, setActiveOrderOnView }
}