'use strict';
// урок 110
// Jquery
// npm i jquery --save
// импорт библиотеки
// import 'jquery';

// импорт определенного объекта
import $ from'jquery';

//получения элемента, пример кнопка
// const btn = $('#btn');
// console.log(btn);

// ожидание загрузки старницы
$(document).ready(function(){
  // наведение на элемент через Jquery
  $('.list-item:first').hover(function(){
      $(this).toggleClass('active');
  });

  // ищем 3-ю кнопку и добавляем событие клика
  $('.list-item:eq(2)'.on('click',function(){
    // анимация скрытия элементов, 300 - задержка
    // event - четные эдлементы
    //odd - нечетные
      $('.image:event').fadeToggle(300);
  }));

  $('.list-item:eq(4)'.on('click',function(){
    // анимация вручную
      $('.image:odd').animate({
        opacity: 'toggle',
        hight: 'toggle'
      },200);
  }));
});