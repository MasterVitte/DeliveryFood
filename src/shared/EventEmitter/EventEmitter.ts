export class EventEmitter {
    private static instance: EventEmitter
    private handlers: Record<string, Function>

    constructor() {
        if (EventEmitter.instance){
            throw new Error("Error - use EventEmitter.getInstance()")
        }

        this.handlers = {}
    }

    public static getInstance(): EventEmitter {
        EventEmitter.instance = EventEmitter.instance || new EventEmitter()

        return EventEmitter.instance
    }

    emit(event: string, value: any) {
        this.handlers[event](value)
    }

    on(event: string, handler: Function) {
        this.handlers[event] = handler
    }
}