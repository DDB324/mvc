import $ from "jquery";
import "./app4.css";

const $circle = $('#app4 .circle')

$circle.on('mouseenter',()=>{
    $circle.addClass('actions')
}).on('mouseleave',()=>{
    $circle.removeClass('actions')
})