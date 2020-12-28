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
        c.bindEvents()
    },
    bindEvents() {
        v.el.on('click', 'button', (e) => {
            const method = e.currentTarget.innerText
            if (method === '+1') {
                m.data.n += 1
            } else if (method === '-1') {
                m.data.n -= 1
            } else if (method === '*2') {
                m.data.n *= 2
            } else if (method === '÷2') {
                m.data.n /= 2
            }
            v.render(m.data.n)
        })
    }
}

export default c