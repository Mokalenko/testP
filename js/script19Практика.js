"use strict"; // директива определяющая что код работает в новом варианте кода 
//(строгий режим задания переменных)
const numberOfFilms = +prompt("Сколько фильмов Вы пострели","5");
    // 19 урок
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

// 20 урок

if (4==9) {
    console.log('error');
}else{
    console.log('Ok');
};

const num = 145;

if (num < 49) {
    console.log('error');
}else if (num > 100){ 
    console.log('error2');
}else{
    console.log('OK');
};

(num ===145) ? console.log('OK') : console.log('error'); //пряма запись иф елс

const num = 34;
//switch - строгое сравнение
switch (num) {
    case 49:
        console.log('Не верно');
        break;
    case 45:
        console.log('OK');
        break;
    case 100:
        console.log('Не верно');
        break;
    default:
        console.log('Ничего не подошло');
        break;
};
