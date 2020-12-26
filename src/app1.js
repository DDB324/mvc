import "./app1.css";
import $ from "jquery";

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
