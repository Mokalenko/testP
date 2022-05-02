"use strict"; // директива определяющая что код работает в новом варианте кода 
//(строгий режим задания переменных)
//!!! урок 24 
// const numberOfFilms = +prompt("Сколько фильмов Вы пострели","5");
// if (numberOfFilms < 10) {
//    alert('просмотрено довольно мало фильмов'); 
// }else{
//     if (numberOfFilms >= 10 && numberOfFilms < 30) {
//         alert('Вы класический зритель'); 
//      }else{
//         alert('Вы киноман');   
//      }
// }

// const personalMovieDB = {
//          count: numberOfFilms,
//         movies:{},
//         actors:{},
//         genres:[],
//         privat: false
//  };
    
// let f='',
//     r = '';
//  for (let i =0;i<3;i++){

//     while (f==='' || f.length >50 || f===null) {
//         f = prompt("Один из последних фильмов?","");
//         if (f !=null && f.length > 0 && f.length <50) {
//             r = prompt("На сколько его офениваете?","1.0");
//         }
//     }
//     personalMovieDB.movies[f] = r;
//     f = '';
//  }
 
//  console.log(personalMovieDB.movies);

//!!! урок 25
let num = 20;
function showFirstMessage(text){
   console.log(text);
   num = 10; 
}

showFirstMessage("Hello! First message");
console.log(num);

function calc(a,b){
   return (a+b);
}

console.log(calc(2,5));
console.log(calc(1,4));

function ret(){
   let num = 6;
   return num;
}

const anotherNum = ret();

const logger = function(){
   console.log("Hello!");
};

logger();

const calc2 = (a,b) => {return a+b;};

console.log(calc2(1,5));
//!!! урок 26
function convert(among,curr){
   let num = curr*among;
   return num;
}

console.log(convert(33,31));

// !! практика 27
// 1
// function sayHello(text) {
//    console.log("Привет, "+text+"!");
// }

function sayHello(text) {
  return `Привет, ${text}!`;
}
console.log(sayHello("Антон"));

// 2
function returnNeighboringNumbers(num) {
   const arr = [];
   arr[0] = num - 1;
   arr[1] = num;
   arr[2] = num + 1;

   return arr;
}

console.log(returnNeighboringNumbers(5));

// 3

function getMathResult(num1,num2) {

   if (typeof(num2)==='string' || num2<=0){
      return num1;
   }

   let res = '';
   let myNum = 0;

   for (let i = 1; i<= num2; i++){
      myNum = myNum+num1;
      if (i===num2){
         res += `${myNum}`;
      }else{
       res += `${myNum}---`;
      }
   }
   return res;
}
// console.log(getMathResult(5,3));
// console.log(getMathResult(3,10));
// console.log(getMathResult(10,0));
console.log(getMathResult(10,'5'));
