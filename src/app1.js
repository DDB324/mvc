import "./app1.css";
import $ from "jquery";
import Model from './base/Model.js'
import View from "./base/View";
//eventBus
const eventBus = $({})
//数据相关放到m
const m = new Model({
    data: {
        n: parseInt(localStorage.getItem('number')) || 100
    },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('update:m')
        localStorage.setItem('number', m.data.n.toString())
    }
})
//视图相关放到v
//其他内容放到c
const view = {
    html: ` 
    <div>
        <div class="output">
            <span id="number">{{n}}</span>
        </div>
        <div class="actions">
            <button id="add1">+1</button>
            <button id="minus1">-1</button>
            <button id="mul2">*2</button>
            <button id="divide2">÷2</button>
        </div>
    </div>`,
    el:null,
    render(data) {
        if (view.el.children.length !== 0) view.el.empty()//移除所有子节点
        $(view.html.replace('{{n}}', data))
            .appendTo(view.el)
    },
    init(container) {
        view.el = $(container)
        view.render(m.data.n)
        view.autoBindEvents()
        eventBus.on('update:m', () => {
            view.render(m.data.n)
        })
    },
    events: {
        'click #add1': 'add',
        'click #minus1': 'minus',
        'click #mul2': 'mul',
        'click #divide2': 'div',
    },
    add() {
        m.update({n: m.data.n + 1})
    },
    minus() {
        m.update({n: m.data.n - 1})
    },
    mul() {
        m.update({n: m.data.n * 2})
    },
    div() {
        m.update({n: m.data.n / 2})
    },
    autoBindEvents() {
        for (let key in view.events) {
            const [part1, part2] = key.split(' ')
            const method = view[view.events[key]]
            view.el.on(part1, part2, method)
        }
    }
}

export default view