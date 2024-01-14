import {EventEmitter} from "./EventEmitter"

export const useEventEmitter = () => {
    return EventEmitter.getInstance()
}