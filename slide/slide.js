'use strict';   

const images = [
    {'id': '1', 'url': './img/Camaro.jpg'},
    {'id': '2', 'url': './img/charger.jpg'},
    {'id': '3', 'url': './img/impala.jpg'},
    {'id': '4', 'url': './img/M1.jpg'},
    {'id': '5', 'url': './img/rx5.jfif'}
]

const container = document.getElementById('container')

const loadImages = (images , container) => {
    images.forEach(image => {
        container.innerHTML += ` 
        <div class='item'>
        <img src='${image.url}'
        </div>
        `
    })
}

loadImages( images , container)
let items = document.querySelectorAll('.item')

const previus = () => {
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}

const next = () => {
    let lastItem = items[items.length - 1]
    container.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#left').addEventListener('click', previus)
document.querySelector('#right').addEventListener('click', next)