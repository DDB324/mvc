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
const c = {
    container: null,
    v: null,
    initV() {
        c.v = new View({
            el: c.container,
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
            render(data) {
                if (c.v.el.children.length !== 0) c.v.el.empty()//移除所有子节点
                $(c.v.html.replace('{{n}}', data))
                    .appendTo(c.v.el)
            },
        })
    },
    init(container) {
        c.container = container
        c.initV()
        c.v.render(m.data.n)
        c.ui = {
            number: $('#number'),
            action: $('.actions')
        }
        c.autoBindEvents()
        eventBus.on('update:m', () => {
            c.v.render(m.data.n)
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
        for (let key in c.events) {
            const [part1, part2] = key.split(' ')
            const method = c[c.events[key]]
            c.v.el.on(part1, part2, method)
        }
    }
}

export default c