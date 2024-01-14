import {useEffect, useState} from "react"
import {CartItem} from "../../../entities/Cart/model"
import {useStore} from "../../../store/StoreProvider"

export const useCartItemFetch = (id: string) => {
    const [cartItem, setCartItem] = useState<CartItem | undefined>(undefined)

    const {cart} = useStore()

    useEffect(() => {
        setCartItem(cart.items.find(item => item.id === id))
    }, [cart, id])

    return { cartItem }
}