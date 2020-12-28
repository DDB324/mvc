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
    html: ` <section id="app1">
        <div class="output">
            <span id="number">{{n}}</span>
        </div>
        <div class="actions">
            <button id="add1">+1</button>
            <button id="minus1">-1</button>
            <button id="mul2">*2</button>
            <button id="divide2">÷2</button>
        </div>
    </section>`,
    render(container) {
        const element = $(v.html.replace('{{n}}', m.data.n.toString()))
        if (!v.el) {
            v.el = element.appendTo(container)
        } else {
            v.el.replaceWith(element)
            v.el = element
        }
    },
    update() {
        c.ui.number.text(m.data.n || 100)
    }
}
//其他内容放到c
const c = {
    init() {
        c.ui = {
            number: $('#number'),
            action: $('.actions')
        }
    },
    bindEvents() {
        c.ui.action.on('click', 'button', (e) => {
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
            v.render()
        })
    }
}

//第一次渲染HTML
v.render()
//寻找重要元素
c.init()
//初始化数据
//将数据渲染到页面
//绑定鼠标事件
c.bindEvents()