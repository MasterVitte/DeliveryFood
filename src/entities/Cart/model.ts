import {MenuItem} from "../Resturant/model";

export interface Cart {
    restaurantId: string | null
    items: CartItem[]
    total: number
}

export type CartItem = MenuItem & { count: number }