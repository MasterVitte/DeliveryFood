import {CartItem} from "../Cart/model";

export interface Order {
    id: string
    name: string
    total: number
    date: string
    items: CartItem[]
    address: string
    status: 'checking' | 'progress' | 'driving' | 'success'
}

export const ORDER_STATUS_DICTIONARY: Record<Order['status'], string> = {
    checking: 'принят',
    driving: 'в пути',
    progress: 'готовится',
    success: 'доставлен'
}