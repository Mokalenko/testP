"use strict"; 
// урок 38
// debugger; // останавливает квыполнение кода в браузере, можно через инструмены разработчика смотреть

// урок 39
// урок 40
// let number = 5; 
// // debugger;

// function myLog(){
//    console.log(number);
// }
// number = 6;
// myLog();

// function createCounter(){
//    let counter = 0;
//    const myFunction = function(){
//       counter = counter +1;
//       return counter;
//    };
//    return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// //console.log(increment());
// const c2 = increment();
// const c3 = increment();
// const c4 = createCounter();
// console.log(c1,c2,c3,c4());

// for (let i =0; i <5; i++){
//    for (let j = 0; j<3;j++){
//       let num = 3;
//    }
// }

// console.log(typeof(NaN));

// for (let i = 1; i < 5; i++) {
//    console.log(i + 1)
// }

// function foo(a,b) {
//    const [first] = a;
//    const {eng} = b;

//    return `${first} ${eng}`;
// }

// const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});

// console.log(result);

// урок 41
// Какое будет выведено значение: let x = 5; alert( x++ ); ?

// Чему равно такое выражение: [ ] + false - null + true ?

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

// Чему равна сумма [ ] + 1 + 2?

// Что выведет этот код: alert( "1"[0] )?

// Чему равно 2 && 1 && null && 0 && undefined ?

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

// Что выведет этот код: alert( +"Infinity" ); ?

// Верно ли сравнение: "Ёжик" > "яблоко"?

// Чему равно 0 || "" || 2 || undefined || true || falsе ?
// let x = 5; 
// let a = [1, 2, 3]; let b = [1, 2, 3];
// console.log( a==b );

// let y = 1; let x = y = 2; console.log(x); 

// console.log(+"Infinity" );
// console.log("Ёжик" > "яблоко");
// console.log( '1'[0]);

// практика 15
const restorantData = {
   menu: [
       {
           name: 'Salad Caesar',
           price: '14$'
       },
       {
           name: 'Pizza Diavola',
           price: '9$'
       },
       {
           name: 'Beefsteak',
           price: '17$'
       },
       {
           name: 'Napoleon',
           price: '7$'
       }
   ],
   waitors: [
       {name: 'Alice', age: 22}, {name: 'John', age: 24}
   ],
   averageLunchPrice: '20$',
   openNow: true
};

// function isOpen(prop) {
//    let answer = '';
//     prop ? answer = 'Закрыто' : answer = 'Открыто';
//    // If (pop){
//    //    answer = 'Закрыто';
//    // }else{
//    //    answer = 'Открыто';
//    // }   
//     return answer;
// }
// function isAverageLunchPriceTrue(fDish, sDish, average) {
//    // console.log(+fDish.price.slice(0, -1) );
//    // console.log(sDish.price);

//    if (+fDish.price.slice(0, -1) + parseInt(sDish.price) < parseInt(average)) {
//        return 'Цена ниже средней';
//    } else {
//        return 'Цена выше средней';
//    }
// }
// // console.log(isOpen(restorantData.openNow));
// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
   // глубокое коппирование объекта!
   const copy = JSON.parse(JSON.stringify(data));

   copy.waitors[0] = {name: 'Mike', age: 32};
   return copy;
}

transferWaitors(restorantData);