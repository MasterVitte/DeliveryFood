import React, {useCallback, useEffect} from 'react'
import {ContextType, StoreProviderType} from "../StoreProvider";
import {Cart, CartItem} from "../../entities/Cart/model";
import {MenuItem} from "../../entities/Resturant/model";

interface Props {
    cart: Cart
    setState: React.Dispatch<React.SetStateAction<StoreProviderType>>
}

export const useCartStore = ({ cart, setState }: Props) => {
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

            return {
                ...prevState,
                cart: newCart
            }
        })
    }, [cart.total, setState])

    const removeFromCart: ContextType['removeFromCart'] = useCallback(({ menuItemId }) => {
        setState(prevState => {
            const cartItems = prevState.cart.items
            const cartItem = cart.items.find(({id}) => id === menuItemId)!

            const needRemove = cartItem.count === 1

            if (needRemove) {
                return {
                    ...prevState,
                    cart: {
                        ...cart,
                        items: cartItems.filter(item => item.id !== menuItemId)
                    }
                }
            } else {
                return {
                    ...prevState,
                    cart: {
                        ...cart,
                        items: cartItems.map(item => {
                            return {...item, count: item.count - 1}
                        })
                    }
                }
            }

        })
    }, [cart, setState])

    const clearCart = useCallback(() => {
        setState(prevState => {
            return {
                ...prevState,
                cart: {
                    ...cart,
                    items: []
                }
            }
        })
    }, [cart, setState])

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
    }, [cart, setState])

    return { addToCard, removeFromCart, clearCart }
}