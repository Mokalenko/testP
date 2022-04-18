"use strict"; 
// урок 28
// const str = 'test';
// console.log(str.length);

// const arr = [2,5,8];
// console.log(arr.length);

// console.dir(Number); // это в бразере только, список свойтв в и методов по данным

// const str = 'Test';
// // console.log(str[1]==='e');

// console.log(str.toUpperCase()); // в верхний регистр
// console.log(str.toLocaleLowerCase()); // в нижний регистр

// let fruit = "Some fruit";
// console.log(fruit.indexOf("fruit")); // найти индекс элемента в строке
// console.log(fruit.indexOf("numb"));  // -1 - нет такого значения

// const logg = "Hello world!";
// console.log(logg.slice(logg.indexOf("w"),logg.length)); // выразет
// // строку с одного символа по другой, можно не указывать последний,
// // тогад будет вся строка с указаного индекса
// // console.log(logg.slice(-5,-1)); // минус с права количесвто символов

// // console.log(logg.substring(6,11)); // первый посл символ

// console.log(logg.substr(6,5)); // c какого символа сколько символов взять

// const test = "12.2px";
// console.log(parseInt(test)); //строку в число с округлением
// console.log(parseFloat(test)); // число со строки вместе с точкой

// урок 29
// let numberOfFilms;
// function start(){
//    numberOfFilms = +prompt('Сколько фильмов пострели','0');
//    while (numberOfFilms== '' || numberOfFilms == null || isNaN(numberOfFilms)){
//       numberOfFilms = +prompt('Сколько фильмов пострели','0');
//    }

// }

// start();

// function remembermyFilms(){
//    let f='',
//      r = '';
//   for (let i =0;i<3;i++){

//      while (f==='' || f.length >50 || f===null) {
//          f = prompt("Один из последних фильмов?","");
//          if (f !=null && f.length > 0 && f.length <50) {
//              r = prompt("На сколько его офениваете?","1.0");
//          }
//      }
//     personalMovieDB.movies[f] = r;
//     f = '';
//   }
 
// }

const gender = [];
function writeUourGender(){
   let l = '';
   for (let i = 0; i<3;i++){
      l = prompt(`Ваш любимый жанр №${i+1}`,'');
      gender[i] = l;
   }
}
writeUourGender();
console.log(gender);

let hiden1 = false;
function showMyDb(hiden){
   if (!hiden){
         console.log(gender);
   }
}

showMyDb(hiden1);

// 29 практика 1

function calculateVolumeAndArea(num) {
   if (typeof(num) !== "number" || parseInt(num)!==num || num <0) {
      return "При вычислении произошла ошибка";
   } else{
    const obym = num*num*num;
    const plosha = 6*(num*num);
    return `Объем куба: ${obym}, площадь всей поверхности: ${plosha}`;
   }
}
console.log(calculateVolumeAndArea(-5));
console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(5.5));

function getCoupeNumber(num) {
   if (typeof(num) !== "number" || parseInt(num)!==num || num <=0 || num > 36) {
     if (typeof(num) !== "number" || parseInt(num)!==num || num <0) {
      return "Ошибка. Проверьте правильность введенного номера места";
     }else{
      return "Таких мест в вагоне не существует";   
     }
   
   } else{
    
      if (num>1 && num<5){
       return 1;  
      }else if(num>4 && num<9){ 
         return 2;  
      }else if(num>8 && num<14){ 
         return 3;  
      }else if(num>13 && num<17){ 
         return 4;  
      }else if(num>16 && num<21){ 
         return 5; 
      }else if(num>20 && num<25){ 
         return 6; 
      }else if(num>24 && num<29){ 
         return 7; 
      }else if(num>28 && num<33){ 
         return 8; 
      }else{ 
         return 9; 
      }
      
   }
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));

// 29 практика 2

function getTimeFromMinutes(min) {
   if (typeof(min) !== "number" || parseInt(min)!==min || min <0) {
      return "Ошибка, проверьте данные";
   } else{
    const chasa = Math.trunc(min/60);
    const minut = min - (chasa*60);
    if (chasa === 0){
      return `Это 0 часов и ${minut} минут`;
    }else if (chasa === 1){
         return `Это 1 час и ${minut} минут`;
    }else{
      return `Это ${chasa} часа и ${minut} минут`;
    }
   }
}
console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(60));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));

function findMaxNumber(num1,num2,num3,num4) {
   if (typeof(num1) !== "number" || typeof(num2) !== "number"|| typeof(num3) !== "number" || typeof(num4) !== "number") {
      return 0;
   } else{
      return Math.max(num1,num2,num3,num4);
   }  
}

console.log(findMaxNumber(1,5,6.6,11));
console.log(findMaxNumber(1,5,'6','10'));

// 29 практика 3
function fib(num) {
   if (typeof(num) !== "number" ||  num<=0
   || parseInt(num)!==num ){
      return '';
   }else{
      let res = '';
      let a = 0;
      let b = 1;
      let sum = 0;
     for (let i =0; i<num; i++){
         if (i ===0){
            res = '0';
         }else if(i ===1){
            res += ' 1'; 
         }else{
            sum = a+b;
            res += ` ${a+b}`; 
            a = b;
            b = sum;
         }
     } 
     return res;
   } 
}

console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(0));

// ! урок 30

