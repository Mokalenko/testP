"use strict"; // директива определяющая что код работает в новом варианте кода 
//(строгий режим задания переменных)
//!!! урок 22 
// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;  
// // }
// // while (num <=55);

// for (let i = 1; i < 8; i++){
//    // console.log(i);  
    

//     if (i === 6){
//         break;
//     }; 

//     if (i === 3){
//         continue;
//     }; 

//     console.log(i );
//     // num++;
// }

//!!! урок 23
for(let i = 0; i <3; i++){
    console.log(i);
    for(let j = 5; j <7; j++){
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******
// *******
// let text = "";
// const leght = 19;
// for(let i = 0; i <leght; i++){
//     text = text+'*';
//     console.log(text);  
// }

// let text = "";
// let res = "";
// const leght = 19;
// for(let i = 0; i <leght; i++){
//     text = text+'*';
//     res = res+text+'\n';     
// }

let res = "";
const leght = 19;
for(let i = 0; i <leght; i++){
    for (let j=0;j<i; j++){
        res +='*';
    }    
    res += '\n';     
}
console.log(res); 

const leght = 5;
// first: - метка, можно к ней обращатся в циклах для понимания 
// какой цикл остановить или пропустить
first: for(let i = 0; i <leght; i++){
    console.log(`1 level: ${i}`); 
    for (let j=0;j<i; j++){
        console.log(`2 level: ${j}`); 
        for (let k=0;k<j; k++){
            if (k === 2) continue first;
            console.log(`3 level: ${k}`); 
        }   
    }    
}

// !! практика 1
for (let i = 1; i <=10; i++){
    i++;
    console.log(i);
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
          console.log(i);
    }
}
    

let num = 2;
while (num < 16){
    num++;
    if (num % 2 === 0) {
        continue;
    } else {
        console.log(num);
    }
    
}

const arrayOfNumbers = [];
let iter = 0;
for (let i = 5; i <=10; i++){
    arrayOfNumbers[iter] = i;
    iter++;
}

console.log(arrayOfNumbers);
// !! практика 2
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i <arr.length; i++){
    result[i] = arr[i];    
}

console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

let iter = 0;
for (let i = (data.length-1); i >=0 ; i--){
    result[iter] = data[i]; 
    iter++;
}

console.log(result);

const lines = 5;
let result = '';

// 11 символов в строке
const allSymbols = (lines*2);
let symbols = allSymbols;
const arr = [];
let iter = 0;
let res = '';
let symb = 0;
for (let i = 0; i <= lines ; i++){
    res = '';
    for (let j=0;j<symb;j++){
        res +=' ';    
    }
    for (let j=0;j<=symbols;j++){
        res +='*';    
    }

    // for (let j=0;j<symb;j++){
    //     res +=' ';    
    // }
    symbols = symbols-2;
    symb = (allSymbols-symbols)/2;
    arr[iter] = res;
    iter++;
}


for (let i = (arr.length-1); i >= 0; i--){
   result += arr[i]+'\n';
}

console.log(result);

const lines = 5;
let result = '';
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)