import $ from 'jquery'

class EventBus {
    constructor() {
        this._eventBus = $(window)
    }

    on(eventName, fn) {
        this._eventBus.on(eventName, fn)
    }

    trigger(eventName, data) {
        this._eventBus.trigger(eventName, data)
    }

    off(eventName, fn) {
        this._eventBus.off(eventName, fn)
    }
}

export default EventBus