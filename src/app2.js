import "./app2.css";
import $ from "jquery";
import Model from "./base/Model";
// eventBus
const eventBus = $({})
//数据相关放到m
const m = new Model({
    data: {
        index: parseInt(localStorage.getItem('app2.index')) || 0
    },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('update:m')
        localStorage.setItem('app2.index', m.data.index.toString())
    }
})
//视图相关放到v
//其他内容放到c
const view = {
    el: null,
    html: (index) => {
        return ` <div id="app2">
        <ol class="tab-bar">
             <li class="${index === 0 ? 'selected' : ''}" data-index="0"><span>导航1</span></li>
             <li class="${index === 1 ? 'selected' : ''}" data-index="1"><span>导航2</span></li>
         </ol>
         <ol class="tab-content">
             <li class="${index === 0 ? 'active' : ''}">内容1</li>
             <li class="${index === 1 ? 'active' : ''}">内容2</li>
         </ol>
     </div>`
    },
    render(index) {
        if (view.el.children.length !== 0) view.el.empty()//移除所有子节点
        $(view.html(index)).appendTo(view.el)
    },
    init(container) {
        view.el = $(container)
        view.render(m.data.index)
        view.autoBindEvents()
        eventBus.on('update:m', () => {
            view.render(m.data.index)
        })
    },
    events: {
        'click .tab-bar>li': 'action',
    },
    action(e) {
        const index = parseInt($(e.currentTarget).data('index'));
        m.update({index: index})
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