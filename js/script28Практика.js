"use strict"; 

// const str = 'test';
// console.log(str.length);

// const arr = [2,5,8];
// console.log(arr.length);

// console.dir(Number); // это в бразере только, список свойтв в и методов по данным

const str = 'Test';
// console.log(str[1]==='e');
console.log(str.toUpperCase()); // в верхний регистр
console.log(str.toLocaleLowerCase()); // в нижний регистр

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // найти индекс элемента в строке
console.log(fruit.indexOf("numb"));  // -1 - нет такого значения

const logg = "Hello world!";
console.log(logg.slice(logg.indexOf("w"),logg.length)); // выразет
// строку с одного символа по другой, можно не указывать последний,
// тогад будет вся строка с указаного индекса
// console.log(logg.slice(-5,-1)); // минус с права количесвто символов

// console.log(logg.substring(6,11)); // первый посл символ

console.log(logg.substr(6,5)); // c какого символа сколько символов взять

const test = "12.2px";
console.log(parseInt(test)); //строку в число с округлением
console.log(parseFloat(test)); // число со строки вместе с точкой




