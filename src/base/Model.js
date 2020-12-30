import EventBus from "./EventBus.js";

class Model extends EventBus {
    constructor(options) {
        super()
        const keys = ['data', 'create', 'update', 'delete', 'get']
        keys.forEach(item => {
            if (item in options) this[item] = options[item]
        })
    }

    create() {
        console?.error?.('你还没有实现create')//console && console.error && console.error('你还没有实现create')
    }

    update() {
        console?.error?.('update')
    }

    delete() {
        console?.error?.('delete')
    }

    get() {
        console?.error?.('get')
    }
}

export default Model