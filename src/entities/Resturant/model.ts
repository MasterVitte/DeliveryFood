export interface Restaurant {
    id: string
    name: string
    imagePreview: string
    imageDetail: string
    rating: number
    feedBackCount: number
    menu: MenuGroup[]
}

export interface MenuGroup {
    id: string
    name: string
    items: MenuItem[]
}

export interface MenuItem {
    id: string
    name: string
    image: string
    price: number
    weight: number
}