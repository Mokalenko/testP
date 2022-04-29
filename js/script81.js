'use strict';

// практика 19

function deepCount(a){

    let count = 0;
        a.forEach ((elem)=>{
            if (Array.isArray(elem)){
           
                let myVar = deepCount(elem);
                count = count+myVar;
                count++;
    
            }else{
               
               count++;  
              
            }
        });

    return count;
}

 console.log(deepCount([1,5,3]));//3
console.log(deepCount([1,5,3,['10']]));//5
console.log(deepCount([1,5,[3,4,[5]]]));//7
console.log(deepCount([]));//0
console.log(deepCount([[[[[[[[[]]]]]]]]]));//8

// урок 81
document.addEventListener('DOMContentLoaded', () =>{

   

});

// 82

const persone = {
    name: 'Aleks',
    tel: '+39494949494',
    perens: {
        mom: 'Olga',
        dad: "Mike"
    }
};

console.log(JSON.stringify(persone));// объект в строку json
console.log(JSON.parse(JSON.stringify(persone)));//json в объект

// создать клон объекта без ссылок на родителя
const clon = JSON.parse(JSON.stringify(persone));
