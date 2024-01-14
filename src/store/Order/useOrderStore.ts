import React, {useCallback, useEffect} from "react"
import {StoreProviderType} from "../StoreProvider"
import {Order} from "../../entities/Order/model"
import {useApi} from "../../shared/Api/useApi"
import {useEventEmitter} from "../../shared/EventEmitter/useEventEmitter"

interface Props {
    orders: Order[]
    setState: React.Dispatch<React.SetStateAction<StoreProviderType>>
}

export const useOrderStore = ({ orders, setState }: Props) => {
    const api = useApi()
    const emitter = useEventEmitter()

    const confirmOrder = useCallback((order: Order) => {
        setState(prevState => {
            emitter.emit('orders', [...prevState.orders, order])

            return {
                ...prevState,
                orders: [...prevState.orders, order]
            }
        })
    }, [emitter, setState])
    
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

    useEffect(() => {
        emitter.on('orders', (value: Order[]) => api.post('api/orders', value))
    }, [api, emitter])

    useEffect(() => {
        const orders = api.get('api/orders')

        setState(prevState => {
            return {
                ...prevState,
                orders
            }
        })
    }, [api, setState])

    return { confirmOrder, getOrderById, setActiveFirstOrderOnView, setActiveOrderOnView }
}