"use strict"; // директива определяющая что код работает в новом варианте кода 
//(строгий режим задания переменных)
//!!! урок 24 
const numberOfFilms = +prompt("Сколько фильмов Вы пострели","5");
if (numberOfFilms < 10) {
   alert('просмотрено довольно мало фильмов'); 
}else{
    if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert('Вы класический зритель'); 
     }else{
        alert('Вы киноман');   
     }
}

const personalMovieDB = {
         count: numberOfFilms,
        movies:{},
        actors:{},
        genres:[],
        privat: false
 };
    
let f='',
    r = '';
 for (let i =0;i<3;i++){

    while (f==='' || f.length >50 || f===null) {
        f = prompt("Один из последних фильмов?","");
        if (f !=null && f.length > 0 && f.length <50) {
            r = prompt("На сколько его офениваете?","1.0");
        }
    }
    personalMovieDB.movies[f] = r;
    f = '';
 }
 
 console.log(personalMovieDB.movies);