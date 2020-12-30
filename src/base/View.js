import $ from 'jquery'
import EventBus from "./EventBus.js";

class View extends EventBus {
    // constructor({el, html, render,events,data,eventBus,method}) {
    constructor(options) {
        super()
        Object.assign(this, options)
    }

    init() {
        this.el = $(this.el)
        this.render(this.data)
        this.autoBindEvents()
        this.on('update:m', () => {
            this.render(this.data)
        })
    }

    autoBindEvents() {
        for (let key in this.events) {
            const [part1, part2] = key.split(' ')
            const method = this[this.events[key]]
            this.el.on(part1, part2, method)
        }
    }
}

export default View