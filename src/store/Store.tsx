import React, {createContext, PropsWithChildren, useCallback, useContext, useEffect, useState} from 'react'
import {Restaurant} from "../entities/Resturant/model";
import {Cart, CartItem} from "../entities/Cart/model";
import Restaurant1PreviewImage from '../shared/images/restaurant1_preview.png'
import Restaurant1DetailImage from '../shared/images/restaurant1_detail.png'
import MenuItem1Image from '../shared/images/menu_item1.png'

interface ContextType extends Store {
    addToCard: ({ restaurantId, menuItemId }: { restaurantId: string | null, menuItemId: string }) => void
    removeFromCart: ({ menuItemId }: { menuItemId: string }) => void
    clearCart: () => void
    getRestaurantById: (id: string) => Restaurant | undefined
}

interface Store {
    restaurants: Restaurant[]
    cart: Cart
}

const defaultStoreValue: Store = {
    restaurants: [
        {
            id: '1',
            name: 'Secret Kitchen',
            imagePreview: Restaurant1PreviewImage,
            imageDetail: Restaurant1DetailImage,
            rating: 4.7,
            feedBackCount: 200,
            menu: [
                {
                    id: '11',
                    name: 'Dream Team',
                    image: MenuItem1Image,
                    price: 1830,
                    weight: 715
                }
            ]
        }
    ],
    cart: {
        restaurantId: null,
        items: [],
        total: 0
    }
}

const Context = createContext<ContextType>({} as ContextType)

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const persistRestaurants = localStorage.getItem('restaurants')
    const persistCart = localStorage.getItem('cart')

    const persistState = {
        restaurants: persistRestaurants ? JSON.parse(persistRestaurants) : defaultStoreValue.restaurants,
        cart: persistCart ? JSON.parse(persistCart) : defaultStoreValue.cart
    }

    const [{ restaurants, cart }, setState] = useState<Store>(persistState)

    const getRestaurantById = useCallback((id: string) => restaurants.find(restaurant => restaurant.id === id), [restaurants])

    const addToCard: ContextType['addToCard'] = useCallback(({ restaurantId, menuItemId }) => {
        setState(prevState => {
            const restaurant = prevState.restaurants.find(({ id }) => id === restaurantId)
            const menuItem = restaurant!.menu.find(({ id }) => id === menuItemId)!

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

            const total = newCartItems.reduce((acc, item) => acc + (item.price * item.count), 0)

            const newCart: Cart = {
                restaurantId,
                items: newCartItems,
                total
            }

            return {
                ...prevState,
                cart: newCart
            }
        })
    }, [])

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
    }, [cart])

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
    }, [cart])
    
    useEffect(() => {
        if (cart.items.length === 0 && cart.restaurantId) {
            setState(prevState => {
                return {
                    ...prevState,
                    cart: {
                        ...cart,
                        restaurantId: null
                    }
                }
            })
        }
    }, [cart])

    useEffect(() => {
        if (restaurants.length) {
            localStorage.setItem("restaurants", JSON.stringify(restaurants))
        } else {
            localStorage.setItem("restaurants", JSON.stringify(defaultStoreValue.restaurants))
        }

        if (cart.items.length) {
            localStorage.setItem("cart", JSON.stringify(cart))
        } else {
            localStorage.setItem("cart", JSON.stringify(defaultStoreValue.cart))
        }
    }, [restaurants, cart])

    return <Context.Provider value={{ restaurants, cart, getRestaurantById, addToCard, removeFromCart, clearCart }}>
        {children}
    </Context.Provider>
}

export const useStore = () => useContext(Context)