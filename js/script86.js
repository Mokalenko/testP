'use strict';
// урок 86

// const 
console.log('Zapros dannyh...');

// setTimeout(() =>{
//     console.log('Podgotovka dannyh...');
//     const product = {
//         name: 'TV',
//         prise: 2000
//     };

//     setTimeout(() =>{
//         product.status = 'order';
//         console.log(product);
//     },2000);

// },2000);

const req = new Promise(function(resolve,reject){
    setTimeout(() =>{
        console.log('Podgotovka dannyh...');
        const product = {
            name: 'TV',
            prise: 2000
        };
        // reject();
        resolve(product);
    },2000);
});
  
// resolve (положительный ответ обработки данных) обрабатывает then
req.then((product)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
        product.status = 'order';
        resolve(product);
    },2000);
    });      
}).then((product)=>{
    console.log(product);
}).catch(()=>{
    console.log('error');
}).finally(()=>{ // окончание выполненя
    console.log('finally');
});
// reject/ вызывается через catch - функция после получания ошибки
// req.catch(()=>{
//     console.log('error');
// });

const test = time => {
    return new Promise(function(resolve,reject){
        setTimeout(() =>{
            console.log('Podgotovka dannyh...');
            const product = {
                name: 'TV',
                prise: 2000
            };
            // reject();
            resolve(product);
        },2000);
    });
};

// Promise.all - ожидает выполнение всех промисов и только тогда отрабатывает
Promise.all([test(1000),test(2000)]).then(()=>{
    console.log('Promise.all');
}

);