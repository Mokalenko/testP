/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const  reklama = document.getElementsByClassName('promo__adv');
reklama[0].remove(); 
// 2) Изменить жанр фильма, поменять "комедия" на "драма"
const  typeOfFilm = document.getElementsByClassName('promo__genre')[0];
typeOfFilm.textContent = 'Драма';
// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
const  promoBg = document.querySelector('.promo__bg');
//promoBg.style.cssText = 'background: url(../img/bg.jpg) center center/cover no-repeat;';
promoBg.style.backgroundImage = 'url("/img/bg.jpg")';
// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 
// const oldlist = document.getElementsByClassName('promo__interactive-item');

// let dellArr = [];
// for (let i = 0; i < oldlist.length; i++){
//     dellArr[i] = oldlist[i];
// }

//  for (let i = 0; i < dellArr.length; i++){
//       dellArr[i].remove(); 
//  }
const mainElement = document.getElementsByClassName('promo__interactive-list')[0];

// for (let i = 0; i < movieDB.movies.length; i++){
//     const li = document.createElement('li');
//     li.textContent = `${i+1}. ${movieDB.movies[i]}`;//html текст добавляем
//     li.classList.add('promo__interactive-item');
//     mainElement.append(li);
    
//     const div = document.createElement('div');
//     div.classList.add('delete');
//     li.append(div);
    
//  };
mainElement.innerHTML = '';

movieDB.movies.forEach((item,i)=>{
    mainElement.innerHTML +=`<li class="promo__interactive-item">${i+1}. ${item}
    <div class="delete"></div>
</li>`; 
});

// урок 45 

const btn = document.querySelector(".promo__descr");
// лучше не использовать
// btn.onclick = function(){
//     alert('нажали на ИСТОРИЯ ЧЕЛОВЕКА');
// };

btn.addEventListener('click', ()=>{
    alert('нажали на ИСТОРИЯ ЧЕЛОВЕКА'); 
},{onse: true});
// можно как аргумент получать действие/событие

let i = 0;
const myFunc = function(e){
    alert(e.target); //target - сам элемент
    alert(e.type);
    alert(e.currentTarget);
    i++;
    if (i===1){
        btn.removeEventListener('click',myFunc); 
    }
};
// btn.addEventListener('click', (e)=>{
//     alert(e.target); //target - сам элемент
// });
btn.addEventListener('click',myFunc);
// наведение мышки
// btn.addEventListener('mouseenter', ()=>{
//     console.log('mouseenter');
// });
//  btn.removeEventListener('click',myFunc); // удаление ивент + его функция которую удаляем

const link = document.querySelector(".promo__descr");

link.addEventListener('click',function(event){
    event.preventDefault(); // отключение стандартного поведение для действия
    // тут можно прописать свой обработчик
});

