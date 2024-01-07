import {useStore} from "../../../store/Store";
import {useEffect, useState} from "react";
import {CartItem} from "../../../entities/Cart/model";

interface CartItemState {
    restaurantId: string | null
    cartItem: CartItem
}

export const useCartItemFetch = (id: string) => {
    const { cart } = useStore()

    const [data, setData] = useState<CartItemState>({
        cartItem: {
            id: '',
            name: '',
            image: '',
            weight: 0,
            count: 0,
            price: 0
        },
        restaurantId: null
    })

    useEffect(() => {
        setData(prevState => {
            const foundedCartItem = cart.items.find(item => item.id === id)

            if (!foundedCartItem || !cart.restaurantId) {
                return prevState
            }

            return { cartItem: foundedCartItem, restaurantId: cart.restaurantId }
        })
    }, [cart.items, cart.restaurantId, id])

    return data
}