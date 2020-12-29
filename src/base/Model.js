class Model {
    constructor(options) {
        this.data = options.data
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