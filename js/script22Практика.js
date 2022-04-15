"use strict"; // директива определяющая что код работает в новом варианте кода 
//(строгий режим задания переменных)
const numberOfFilms = +prompt("Сколько фильмов Вы пострели","5");
//!!! 19 урок
//alert(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };

// let f1 = prompt("Один из последних фильмов?",""),
//     r1 = prompt("На сколько его офениваете?","1.0");
// personalMovieDB.movies[f1] = r1;
// //alert(personalMovieDB.movies[f1]);
// let f2 = prompt("Один из последних фильмов?",""),
//     r2 = prompt("На сколько его офениваете?","1.0");
// personalMovieDB.movies[f2] = r2;
// let f3 = prompt("Один из последних фильмов?",""),
//     r3 = prompt("На сколько его офениваете?","1.0");
// personalMovieDB.movies[f3] = r3;

// console.log(personalMovieDB);

//!!! 20 урок

// if (4==9) {
//     console.log('error');
// }else{
//     console.log('Ok');
// };

// const num = 145;

// if (num < 49) {
//     console.log('error');
// }else if (num > 100){ 
//     console.log('error2');
// }else{
//     console.log('OK');
// };

// (num ===145) ? console.log('OK') : console.log('error'); //пряма запись иф елс

// const num = 34;
// //switch - строгое сравнение
// switch (num) {
//     case 49:
//         console.log('Не верно');
//         break;
//     case 45:
//         console.log('OK');
//         break;
//     case 100:
//         console.log('Не верно');
//         break;
//     default:
//         console.log('Ничего не подошло');
//         break;
// };

//!!! 21 урок

// const hamburger = true;
// const fries = true;

// if (hamburger && fries){
// console.log('Ya poel');
// };

// console.log((hamburger && fries));

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries){
// console.log('Ya poel');
// }else{
//     console.log('Ne poel');
// }

// console.log((hamburger && fries));

// const hamburger = 4;
// const fries = 1;
// const cola = 5;
// // if (hamburger===3 && fries===1){
//     // проверка числа на булево - просто налчие значение - тру, 0 - фолс
// if (hamburger >=3 && fries && cola){
//     console.log('Ya poel');
// }else{
//     console.log('Ne poel');
// }
// console.log((hamburger >=3 && fries && cola)); // вертает первое ложное значение
// или последнее трушное
// console.log((hamburger >=3 && '' && cola));

const hamburger = 4;
const fries = 1;
const cola = 0;
const nuggets = 2;

if (hamburger >=3 && !cola || fries >1 && nuggets){
    console.log('Ya poel');
}else{
    console.log('Ne poel');
}

let jonReport, samReport, marinaReport = 'done';

console.log(jonReport || samReport || marinaReport);