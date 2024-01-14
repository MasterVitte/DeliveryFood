import React, {useCallback, useEffect} from 'react'
import {ContextType, StoreProviderType} from "../StoreProvider"
import {Cart, CartItem} from "../../entities/Cart/model"
import {MenuItem} from "../../entities/Resturant/model"
import {useApi} from "../../shared/Api/useApi"
import {useEventEmitter} from "../../shared/EventEmitter/useEventEmitter"

interface Props {
    cart: Cart
    setState: React.Dispatch<React.SetStateAction<StoreProviderType>>
}

export const useCartStore = ({ cart, setState }: Props) => {
    const api = useApi()
    const emitter = useEventEmitter()

    const addToCard: ContextType['addToCard'] = useCallback(({ restaurantId, menuItemId }) => {
        setState(prevState => {
            const restaurant = prevState.restaurants.find(({ id }) => id === restaurantId)
            const restaurantMenuItems = restaurant!.menu.reduce<MenuItem[]>((acc, group) => ([...acc, ...group.items]) ,[])
            const menuItem = restaurantMenuItems.find(({ id }) => id === menuItemId)!

            const preparedMenuItem: CartItem = {...menuItem, count: 1}

            const prevCartItems = prevState.cart.items
            let newCartItems: CartItem[]

            const needIncrementCountOfSameItem = prevCartItems.find(prevCartItem => prevCartItem.id === preparedMenuItem.id)

            if (needIncrementCountOfSameItem) {
                newCartItems = prevCartItems.map(prevCartItem => {
                    if (prevCartItem.id === preparedMenuItem.id) {
                        return {...prevCartItem, count: prevCartItem.count + 1}
                    }

                    return prevCartItem
                })
            } else {
                newCartItems = [...prevState.cart.items, preparedMenuItem]
            }

            const newCart: Cart = {
                restaurantId,
                items: newCartItems,
                total: cart.total
            }

            emitter.emit('addCart', newCart)

            return {
                ...prevState,
                cart: newCart
            }
        })
    }, [cart.total, emitter, setState])

    const removeFromCart: ContextType['removeFromCart'] = useCallback(({ menuItemId }) => {
        setState(prevState => {
            const cartItems = prevState.cart.items
            const cartItem = cart.items.find(({id}) => id === menuItemId)!

            const needRemove = cartItem.count === 1

            if (needRemove) {
                const filteredCart = {
                    ...cart,
                    items: cartItems.filter(item => item.id !== menuItemId)
                }

                emitter.emit('removeFromCart', filteredCart)

                return {
                    ...prevState,
                    cart: filteredCart
                }
            } else {
                const recalculatedCart = {
                    ...cart,
                    items: cartItems.map(item => {
                        return {...item, count: item.count - 1}
                    })
                }

                emitter.emit('removeFromCart', recalculatedCart)

                return {
                    ...prevState,
                    cart: recalculatedCart
                }
            }

        })
    }, [cart, emitter, setState])

    const clearCart = useCallback(() => {
        const clearedCart = {
            ...cart,
            items: []
        }

        emitter.emit('clearCart', clearedCart)

        setState(prevState => {
            return {
                ...prevState,
                cart: {
                    ...cart,
                    items: []
                }
            }
        })
    }, [cart, emitter, setState])

    useEffect(() => {
        emitter.on('addCart', (value: Cart) => api.post('api/cart', value))
        emitter.on('removeFromCart', (value: Cart) => api.post('api/cart', value))
        emitter.on('clearCart', (value: Cart) => api.post('api/cart', value))
    }, [api, emitter])

    // Получить данные корзины с бэкенда
    useEffect(() => {
        const cart = api.get('api/cart')

        setState(prevState => {
            return {
                ...prevState,
                cart
            }
        })
    }, [api, setState])

    // Очистить корзину, если нет позиций
    useEffect(() => {
        if (cart.items.length === 0 && cart.restaurantId) {
            setState(prevState => {
                return {
                    ...prevState,
                    cart: {
                        ...cart,
                        restaurantId: null,
                        total: 0
                    }
                }
            })
        }
    }, [cart, setState])


    // Реактивный подсчет суммы корзины
    useEffect(() => {
        if (cart.items.length && cart.restaurantId) {
            setState(prevState => {
                return {
                    ...prevState,
                    cart: {
                        ...cart,
                        total: prevState.cart.items.reduce((acc, item) => acc + (item.price * item.count), 0)
                    }
                }
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart.items, setState])

    return { addToCard, removeFromCart, clearCart }
}