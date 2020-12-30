import "./app2.css";
import Vue from 'vue'

const init = (el) => {
    new Vue({
        el: el,
        data: {
            index: parseInt(localStorage.getItem('app2.index')) || 0
        },
        watch: {
            index() {
                localStorage.setItem('app2.index', this.index.toString())
            }
        },
        template: `
          <section id="app2">
          <ol class="tab-bar">
            <li :class="index === 0 ? 'selected' : ''" @click="index=0"><span>导航1</span></li>
            <li :class="index === 1 ? 'selected' : ''" @click="index=1"><span>导航2</span></li>
          </ol>
          <ol class="tab-content">
            <li :class="index === 0 ? 'active' : ''">内容1</li>
            <li :class="index === 1 ? 'active' : ''">内容2</li>
          </ol>
          </section>`,

    })
}

export default init