import $ from 'jquery'

class EventBus {
    constructor() {
        this._eventBus = $(window)
        this.n = console.log(1)
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