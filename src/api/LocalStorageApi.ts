import {AbstractAdapterApi} from "./AbstractAdapterApi"
import {GET_CONTROLLERS_TYPE, POST_CONTROLLERS_TYPE} from "./controllers"
import {mockStore} from "../store/lib/fixtures"

export class LocalStorageApi implements AbstractAdapterApi {
    private static instance: LocalStorageApi

    constructor() {
        if (LocalStorageApi.instance){
            throw new Error("Error - use LocalStorageApi.getInstance()")
        }
    }

    public static getInstance(): LocalStorageApi {
        LocalStorageApi.instance = LocalStorageApi.instance || new LocalStorageApi()

        return LocalStorageApi.instance;
    }

    public static init() {
        if (!LocalStorageApi.getInstance().get('api/restaurants')) {
            localStorage.setItem('api/restaurants', JSON.stringify(mockStore.restaurants))
        }

        if (!LocalStorageApi.getInstance().get('api/cart')) {
            localStorage.setItem('api/cart', JSON.stringify(mockStore.cart))
        }

        if (!LocalStorageApi.getInstance().get('api/orders')) {
            localStorage.setItem('api/orders', JSON.stringify(mockStore.orders))
        }
    }

    get(url: GET_CONTROLLERS_TYPE): any {
        const data = localStorage.getItem(url)

        if (data) {
            return JSON.parse(data)
        }

        return null
    }

    post(url: POST_CONTROLLERS_TYPE, payload: any): void {
        return localStorage.setItem(url, JSON.stringify(payload))
    }
}