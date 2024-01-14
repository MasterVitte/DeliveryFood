import {GET_CONTROLLERS_TYPE, POST_CONTROLLERS_TYPE} from "./controllers"


export abstract class AbstractAdapterApi {
    abstract get(url: GET_CONTROLLERS_TYPE): any
    abstract post(url: POST_CONTROLLERS_TYPE, payload: any): void
}