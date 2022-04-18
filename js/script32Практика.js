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
