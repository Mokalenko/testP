'use strict';
// урок 49
// ивенты на мобильных устройствах
// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// e - элемент выделения на мобильном
// e.touches - количество пальев нажимания на странице
// e.targetTouches -количество пальцев на элементе
// e.chengetTouches - количество пальцев которые на событие повлияло
// window.addEventListener('DONContentLoaded',() =>{
//     const box = document.querySelectorAll('.current')[0];

//     box.addEventListener('touchstart', (e) =>{
//         e.preventDefault();
//         console.log('Start');
//     });

//     box.addEventListener('touchmove', (e) =>{
//         e.preventDefault();
//         console.log('touchmove');
//     });

//     box.addEventListener('touchend', (e) =>{
//         e.preventDefault();
//         console.log('touchend');
//     });

// });

// урок 50

// const p = document.querySelectorAll('.wrapper');
// console.log(p);
// {/* <script defer src="/js/script49.js"></script>
//     <script async src="/js/script1.js"></script> */}

// const script = document.createElement('script');
// script.src ='js/script1.js';
// script.async = false;
// document.body.append(script);

// урок 53
// NUllish операторы ?? 
const box = document.querySelector('.box');
const block = document.querySelector('.block');

const newHeight = 50;
const newWidth = 400;

function changeParams(elem, h, w) {
    // elem.style.height = `${h}px`;
    // elem.style.height = `${h || 200}px`;
    elem.style.height = `${h ?? 200}px`;
    // elem.style.width = `${w}px`;
    elem.style.width = `${w || 200}px`;

    elem.innerHTML = (h ?? 200) * (w ??200);
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey = 0;
console.log(userName ?? userKey ?? 'User');

// урок 54
// .? - оператор опциональной цепочки
console.log(box);

// если существует
if(block){
    console.log(block);
}

console.log(block?.textContent);
console.log(1+2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function(){
        console.log('Hello');
    }
};


console.log(userData?.skils?.js);
userData.hey?.();