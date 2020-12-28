import "./app1.css";
import $ from "jquery";

//数据相关放到m
const m = {
    data: {
        n: parseInt(localStorage.getItem('number'))
    }
}
//视图相关放到v
const v = {
    el: null,
    html: ` <div>
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
        if (v.el.children.length !== 0) v.el.empty()//移除所有子节点
        $(v.html.replace('{{n}}', data))
            .appendTo(v.el)
    },
    init(container) {
        v.el = $(container)
    }
}
//其他内容放到c
const c = {
    init(container) {
        v.init(container)
        v.render(m.data.n)
        c.ui = {
            number: $('#number'),
            action: $('.actions')
        }
        c.autoBindEvents()
    },
    events: {
        'click #add1': 'add',
        'click #minus1': 'minus',
        'click #mul2': 'mul',
        'click #divide2': 'div',
    },
    add() {
        m.data.n += 1
        v.render(m.data.n)
    },
    minus() {
        m.data.n -= 1
        v.render(m.data.n)
    },
    mul() {
        m.data.n *= 2
        v.render(m.data.n)
    },
    div() {
        m.data.n /= 2
        v.render(m.data.n)
    },
    autoBindEvents() {
        for (let key in c.events) {
            const [part1, part2] = key.split(' ')
            const method = c[c.events[key]]
            v.el.on(part1, part2, method)
        }
    }
}

export default c