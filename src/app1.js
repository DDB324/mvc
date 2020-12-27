import "./app1.css";
import $ from "jquery";

const html = ` <section id="app1">
        <div class="output">
            <span id="number"></span>
        </div>
        <div class="actions">
            <button id="add1">+1</button>
            <button id="minus1">-1</button>
            <button id="mul2">*2</button>
            <button id="divide2">÷2</button>
        </div>
    </section>`
const $element = $(html).appendTo('body>.page')
const $number = $('#number')
const $action = $('.actions')
const number = localStorage.getItem('number')
$number.text(number || 100)

$action.on('click', 'button', (e) => {
    let n = parseInt(($number.text()))
    const method = e.currentTarget.innerText
    if (method === '+1') {
        n += 1
    } else if (method === '-1') {
        n -= 1
    } else if (method === '*2') {
        n *= 2
    } else if (method === '÷2') {
        n /= 2
    }
    localStorage.setItem('number', n.toString())
    $number.text(n)
})
