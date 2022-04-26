'use strict';
// урок 68

// const now = new Date(); // текущая дата и время
// console.log(now);

// const now1 = new Date('2022-01-25'); // 
// console.log(now1);

// const now2 = new Date(2022,1,25,23,45); // месяца нумеруются с 0
// now2.setHours(18);// установка даты/ тут часов, можно через запятую минуты
// console.log(now2);

// const now3 = new Date(-999999999); //дата до 1970 года 
// console.log(now3);

// const nowMyDate = new Date(); // текущая дата и время
// console.log(nowMyDate.getFullYear());
// console.log(nowMyDate.getDay()); // день недели, 0 - воскресенье
// console.log(nowMyDate.getMonth());
// console.log(nowMyDate.getDate());
// console.log(nowMyDate.getUTCHours());

// console.log(nowMyDate.getTimezoneOffset());// разница от моей с ютиси
// console.log(nowMyDate.getTime());
// console.log(Date(nowMyDate.getTime()));


// let start = new Date();

// for (let i =0; i < 1000000;i++){
//     let some = i*3;
// }

// let end = new Date();

// alert(`Цикл отработал за ${end-start} мили секунд`);

// урок 69
// ждем загрузку страницы
document.addEventListener('DOMContentLoaded', () =>{

    const spanDay = document.getElementById('days'),
        spanHours = document.getElementById('hours'),
        spanMinutes = document.getElementById('minutes'),
        spanSeconds = document.getElementById('seconds'),
        maxData = new Date(2022,6,28);

    myAnimation();

    function myAnimation(){

        const id = setInterval(frame,100);
    
        function frame(){
            let myDate = new Date();
            // Берем разницу дат в секундах
            let delta = (maxData - myDate)/1000;
            let days = Math.floor(delta / 86400);

              if(delta<=0){
                  console.log('отключили');
                 clearInterval(id);
              }else{
                // Вычисляем количество ПОЛНЫХ дней
                 let days = Math.floor(delta / 86400);
                // А теперь вычитаем из секунд количество дней, выраженных в секундах
                delta -= days * 86400;
                // В оставшихся секунд вычленяем количество полных часов
                let hours = Math.floor(delta / 3600) % 24;
                // Также их потом вычитаем, выразив в секундах
                delta -= hours * 3600;
                // Из оставшихся секунд берем минуты
                let minutes = Math.floor(delta / 60) % 60;
                // Опять вычитаем
                delta -= minutes * 60;
                // И наконец секунды
                // В теории  деление по модулю на 60 не обязателен
                let seconds = delta % 60;
                // console.log(seconds);
                 spanDay.textContent = days;
                 spanHours.textContent = hours;
                 spanMinutes.textContent = minutes;
                 spanSeconds.textContent = seconds.toFixed(0);

             }
        }
    }

});