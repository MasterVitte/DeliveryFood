const GET_CONTROLLERS = {
    'restaurants': 'api/restaurants',
    'cart': 'api/cart',
    'orders': 'api/orders'
} as const

const POST_CONTROLLERS = {
    'cart': 'api/cart',
    'orders': 'api/orders'
} as const

type CONTROLLER_TYPE<C extends Record<string, string>> = C[keyof C]

export type GET_CONTROLLERS_TYPE = CONTROLLER_TYPE<typeof GET_CONTROLLERS>
export type POST_CONTROLLERS_TYPE = CONTROLLER_TYPE<typeof POST_CONTROLLERS>