'use strict';
// урок 55

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName("box");

boxesQuery.forEach(box =>{
    if(box.matches('.this')) console.log("This one");
});

console.log(boxesQuery[0].closest('.wrapper'));
// boxesQuery[0].remove();
// boxesGet[0].remove();

// console.log(boxesQuery);
// console.log(boxesGet);
// // console.log(document.body.childNodes);

// console.log(Array.from(boxesGet));

// урок 56

const obj ={
    name: 'Test',
    [Symbol('id')]:2, // такие щитаются скрытими

    // getId: function(){
    //     return this[id];
    // }
};

let id = Symbol("id");
obj[id] = 1;

// console.log(obj[id]);
console.log(obj);

for ( let value in obj){
    console.log(value);
}

console.log(Object.getOwnPropertySymbols(obj));
console.log(obj [Object.getOwnPropertySymbols(obj)[0]]);

// глобальный реест символов
// Symbol.for('id')
// Symbol.keyFor('id');

// практика 17

function amountOfPages(summary){
    let resTxt = '';
    let lastI = 0;
    for (let i = 1; i<=summary; i++){
        //  console.log(resTxt.length);
        if ((resTxt.length+1)>=summary){
            // console.log(resTxt);
            if ((resTxt.length+1)>summary){
            return lastI;
            }else{
                return i;
            }
        }else{
            resTxt +=i;  
        }
        lastI = i;
    }
}

console.log(amountOfPages(5));
console.log(amountOfPages(25));
console.log(amountOfPages(1095));
console.log(amountOfPages(185));