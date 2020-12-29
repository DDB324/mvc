class Model {
    constructor(options) {
        ['data', 'create', 'update', 'delete', 'get']
            .forEach(item => {
                if (item in options) this[item] = options[item]
            })
        // this.data = options.data
        // this.create = options.create
        // this.update = options.update
        // this.delete = options.delete
        // this.get = options.get
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