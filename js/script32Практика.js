"use strict"; 
// урок 32
// const obj = new Object(); // старый метод лучше не делать

const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red'
   },
   makeTest: function(){
      console.log('Test');
   }
};

// delete options.name; // удаление свойства объекта
options.makeTest();

// деструризация объекта - перенос свойст объекта в переменные
const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options)); // получаем массыв ключей объекта
console.log(Object.keys(options).length); // количество элементов объекта

let counter = 0;
for (let key in options){
   // console.log(options[key]);

   if (typeof(options[key]) ==="object"){
   for (let key2 in options[key]){
      // console.log(options[key]);
      console.log(`${key} / ${key2} : ${options[key][key2]}`);
      counter ++;
   }
   } else {
      console.log(`${key} : ${options[key]}`);
      counter ++;
   }
}
console.log(counter);

// урок 33

const arr1 = [10,21,13,4,55];
// arr.pop(); // удаляет последний элемент массива
// arr.push(10); // добавляет в конец массива новый элемент
// console.log(arr);
arr1[99] = 99; // будут добавлены индексы по 98
// ленг вернет последний индекс +1
for (let value of arr1){
   console.log(value);  
}

const arr2 = [10,21,13,4,55];

arr2.forEach(function(value,i,arr2){
   console.log(`${i}: ${value} in arr ${arr2}`);  
})

const arr = [10,21,13,4,55];

const str = 'nfnf, hfhfh, jfjfj';
const products = str.split(', '); // cтроку в массив через разделитель
// console.log(products);
// console.log(products.join('\\')); // массив в строку и указываем разделитель между ними
// products.sort(); // сортирует но как строки!!!
console.log(products);

// сортировка по числам!
arr.sort(compareNumb); 
console.log(arr);
// функция для сортировки числел
function compareNumb(a,b){
   return a-b;
}

// урок 35

let a = 5,
   b = a;

const obj = {
   a:5,
   b:1
};

// const copy = obj;

// console.log(copy);
// copy.a = 10;

// console.log(obj);
// console.log(copy);

function copy(mainObj){
   let CopyObj = {};
   for (let key in mainObj){
      CopyObj[key] = mainObj[key];
   }
   return CopyObj;
}
let myCopy = copy(obj);
myCopy.a = 10;
console.log(myCopy);

const objec = {
   a:5,
   b:1
};

const myTest = Object.assign({},objec); // объедение объектов/елси первый пусто - клонируем

myTest.a = 11;
console.log(myTest);
console.log(objec);

const oldArr = ['a','b','c'];
const newArr = oldArr.slice(); // копирование массива


const video = ['yutube','vimeo','rutube'],
      blogs = ['worpres','blogger'],
      internet = [...video,...blogs, 'vk', 'fb'];// пример развертывания нескольких в один

// console.log(internet);

log(...video);// разложили на отдельные элементы
function log(a,b,c){
   console.log(a);
   console.log(b);
   console.log(c);
}

const NEWobject = {...objec};// клон объекта

// практика написания кода 10
const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
      languages: ['ru', 'eng'],
       programmingLangs: {
           js: '20%',
           php: '10%'
       },
       exp: '1 month'
   },
   showAgeAndLangs: function(plan){
     let res = 'Мне '+plan.age+" и я владею языками: ";
     let str = '';
     for (let key in plan.skills.languages){
      str = plan.skills.languages[key];
      //console.log(str);
        res += (str.toUpperCase())+' ';
     }
     return res;
   }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
// function showExperience(plan) {
// return plan.skills.exp;
// }
function showProgrammingLangs(plan) {
   let res = '';
   for (let key in plan.skills.programmingLangs){
      res += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
   }
   return res;
}
console.log(showProgrammingLangs(personalPlanPeter));