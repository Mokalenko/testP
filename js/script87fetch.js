'use strict';
// урок 87
API 
DOM API

fetch('http://example.com/movies.json')
  .then((response) => {
    console.log(response.json());
  })
  .then((data) => {
    console.log(data);
  });

//   POST // or 'PUT'
fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

// урок 88
// filter
// const arr = [y,d,h,m,s];
// const myArr = arr.filter(element => element != '');
// const myArr = arr.filter(function(element){
//    return element.lenght <5;
// });

// map - объод всех элементов и работа с ними
const answers = ['Ivan','AnnA',"HelLo"];
const result = answers.map(item => item.toLocaleLowerCase);

// every/some 
//some - если хотя бы один элемент подходит условию тогда тру/фолс
//every - если все  элементы подходит условию тогда тру/фолс
const some = [1,'AnnA',"HelLo"];
console.log(some.some(item => typeof(item)=='number'));

// ! сумма всех элементов массива/ вычитание/ другое действие со всеми элементами
// reduce

const arr = [4,5,1,3,2,6];
// sum = сумма всех элементов
// current - значение элемента
const res = arr.reduce((sum,current)=>sum+current);
//arr.reduce((sum,current)=>sum+current,3) - 3 можно задать начальное значение заполнения суммы/значения
console.log(res);

const arr2 = ['apple','pear','plum','peach','melon','lemon'];
// sum = сумма всех элементов
// current - значение элемента
const res2 = arr2.reduce((sum,current)=>`${sum}, ${current}`);
console.log(res2);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

// const newArr = Object.entries(obj);// объект в массив
const newArr = Object.entries(obj)
.filter(item =>item[1] =='persone')// объект в массив/ толкьо елси 2-й элемент = persone
.map(item => item[0]);
console.log(newArr);
