"use strict"; // директива определяющая что код работает в новом варианте кода 
//(строгий режим задания переменных)
// практика 21
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

// function showGoodFilms(arr) {
//     let myArr = [];
//     let it = 0;
//     arr.forEach((element,i)=> {
//         if(element.rating>=8){
//             myArr[it] = element;
//             it++;
//         }
//     });   
//     return myArr;
// }

// function showListOfFilms(arr) {
//    let res = ''; 
//     arr.forEach((element,i)=> {
//         res += ''+(res == ''?'':', ');
//         res += element.name;
//     });   
//     return res; 
// }

function setFilmsIds(arr) {
    let myArr = [];
    arr.forEach((element,i)=> {
        myArr[i] = JSON.parse(JSON.stringify(element));
        myArr[i].id = i;
    });   
    return myArr;
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    let lenght = 0;
    arr.forEach((element,i)=> {
        lenght++;
    }); 
    for (let i = 0; i < lenght; i++){
        if(arr[i].id === undefined){
         return false;
        }
    }
    return true; 
}
console.log(checkFilms(films));
console.log(checkFilms(tranformedArray));