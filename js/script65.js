'use strict';
// урок 65

// const timerId = setTimeout(function(text){
//     console.log(text);
// },1000,'Hello');
const btn = document.querySelector('.btn');
let timerId;
// console.log(timerId);
// const timerId = setTimeout(logger,4000,'Hello');
// btn.addEventListener('click',()=>{
//     clearInterval(timerId); // отключение таймера запуска функции
// });

// btn.addEventListener('click',()=>{
//     if(timerId==undefined){
//      timerId = setInterval(logger,2000,'Hello');
//     }else{
//      clearInterval(timerId); // отключение таймера запуска функции
//      timerId = undefined;
//     }
// });

// function logger(text){
//     console.log(text);
// }
btn.addEventListener('click',()=>{
    myAnimation();
     
});

function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame,5);

    function frame(){
        if(pos== 300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos +'px';
            elem.style.left = pos +'px';
        }
    }
}


// урок 68

