'use strict';
// урок 63

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0)); //  обращение к какому то класу
// console.log(btns[0].classList.add('red', 'dsjufhdkshnfh'));
// console.log(btns[0].classList.remove('red'));
// console.log(btns[0].classList.toggle('red')); // toggle - если клас есть удаляем. если нет добавляем

//  проверка наличия класа
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }else{
//     console.log('NO red'); 
// }

btns[0].addEventListener('click', ()=>{
    // if (!btns[1].classList.contains("red")){
    //     btns[1].classList.add('red');
    // }else{
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

// console.log(btns[0].className);// старый метод, не использовать!

wrapper.addEventListener('click', (event)=>{
    // проверка на то что можно кликнуть по элементу и что это кнопка
    //  if (event.target && event.target.tagName =='BUTTON'){
        if (event.target && event.target.matches("button.red")){
        // if (event.target && event.target.classList.contains('blue')){
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn); // добавление элемента в родителя
