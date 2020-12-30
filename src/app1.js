import "./app1.css";
import Vue from 'vue'

const init = (el) => {
    new Vue({
        el: el,
        data: {n: parseFloat(localStorage.getItem('number')) || 100},
        watch: {
            n() {
                localStorage.setItem('number', this.n.toString())
            }
        },
        methods: {
            add() {
                this.n += 1
            },
            minus() {
                this.n -= 1
            },
            mul() {
                this.n *= 2
            },
            divide() {
                this.n /= 2
            }
        },
        template: `
          <section>
          <div class="output">
            <span id="number">{{ n }}</span>
          </div>
          <div class="actions">
            <button @click="add">+1</button>
            <button @clcik="minus">-1</button>
            <button @click="mul">*2</button>
            <button @click="divide">÷2</button>
          </div>
          </section>`,

    })
}
export default init