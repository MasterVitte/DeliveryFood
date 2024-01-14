import {CartItem} from "../Cart/model"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import HomeIcon from '@mui/icons-material/Home'
import {SvgIcon} from "@mui/material"

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

export const ORDER_STATUS_ICON_DICTIONARY: Record<Order['status'], typeof SvgIcon> = {
    checking: ShoppingCartIcon,
    driving: DirectionsBikeIcon,
    progress: ShoppingBasketIcon,
    success: HomeIcon
}