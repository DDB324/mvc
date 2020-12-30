import "./app1.css";
import $ from "jquery";
import Model from './base/Model.js'
import View from "./base/View.js";
//数据相关放到m
const m = new Model({
    data: {
        n: parseFloat(localStorage.getItem('number')) || 100
    },
    update(data) {
        Object.assign(m.data, data)
        this.trigger('update:index')
        localStorage.setItem('number', m.data.n.toString())
    }
})
//视图相关放到v
//其他内容放到c
const init = (el) => {
    const view = new View({
        data: m.data,
        el: el,
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
            const n = data.n
            if (this.el.children.length !== 0) this.el.empty()//移除所有子节点
            $(this.html.replace('{{n}}', n))
                .appendTo(this.el)
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
    })
    view.init('update:index')
}
export default init