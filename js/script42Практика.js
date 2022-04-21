"use strict"; 
// урок 42
// const box = document.getElementById("box");

// // console.log(box);

// const butns = document.getElementsByTagName('button');
// // console.log(butns[1]);
// // console.log(butns[8]);

// const circles = document.getElementsByClassName('circle');
// // console.log(circles[2]);

// const heards = document.querySelectorAll('.heart'); //поиск по ссs селекторам
// // console.log(heards);

// // heards.forEach(item => {
// //     console.log(item); 
// // })

// const oneHeard = document.querySelector('.heart');// первый найденный элемент
// console.log(oneHeard);

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName('circle'),
      heards = document.querySelectorAll('.heart'),
      oneHeard = document.querySelector('.heart');
box.style.backgroundColor = 'blue';
box.style.width = '350px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

circles[1].style.cssText = 'background-color: red; width: 65px';

// for (let i = 0; i < heards.length; i++){
//     heards[i].style.backgroundColor = 'blue';
// }

heards.forEach(item =>{
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('тут был Я');

div.classList.add('black');
div.innerHTML = '<h1>hello !</h1>';//html текст добавляем
// div.textContent = 'Hello'; // только текст записываем
document.body.append(div); //вставка элемента на документ в конец
// document.body.appendChild(div); // старый метод
// document.body.prepend(div); // в начале блока
// document.querySelector('.wrapper').append(div); 

// heards[1].before(div); //вставка нового элемента перед тем у которого вызвали метод
// heards[1].after(div); //вставка нового элемента после того у которого вызвали метод
// document.body.insertBefore(div,heards[0]);// старый метод
// circles[2].remove(); // удаление элемента
// document.body.removeChild(circles[2]);  // старый метод
// heards[2].replaceWith(circles[2]); // замена элемента на другой
// document.body.replaceChild(circles[0],heards[1]);  // старый метод

div.insertAdjacentHTML('beforebegin','<h2>Good bay!</h2>'); //вставка только html текста

