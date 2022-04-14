"use strict"; // директива определяющая что код работает в новом варианте кода 
//(строгий режим задания переменных)
const numberOfFilms = +prompt("Сколько фильмов Вы пострели","5");

//alert(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

let f1 = prompt("Один из последних фильмов?",""),
    r1 = prompt("На сколько его офениваете?","1.0");
personalMovieDB.movies[f1] = r1;
//alert(personalMovieDB.movies[f1]);
let f2 = prompt("Один из последних фильмов?",""),
    r2 = prompt("На сколько его офениваете?","1.0");
personalMovieDB.movies[f2] = r2;
let f3 = prompt("Один из последних фильмов?",""),
    r3 = prompt("На сколько его офениваете?","1.0");
personalMovieDB.movies[f3] = r3;

console.log(personalMovieDB);