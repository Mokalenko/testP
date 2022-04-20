"use strict"; 
// урок 36

let str = 'test';
let strObj = new String(str);

console.log(str);
console.log(strObj);

const solder = {
   health: 400,
   armor: 100
};

// const jon = {
//    health: 100,
//    sayHallo: function(){
//       console.log('Hello!');
//    }
// };
// jon.sayHallo();
// Object.setPrototypeOf(jon,solder);
const jon = Object.create(solder);
console.log(jon.armor);

// урок 37

// personalDB.genders.forEach((itev, i) =>{
//    console.log(`Любимый жанр ${i+1} - это ${item}`);
// })

function writeYouGenres(){
   for (let i = 1; i < 2; i++){
     let gender = prompt('Введите любимые жанри через запятую'); 

      if (gender ==='' || gender == nul){
         i--;
      }else{
        let myArr = gender.split(','); //разделение названий по запятой
        myArr.sort();
      }

   }
}

// практика написания кода 13

const shoppingMallData = {
   shops: [
       {
           width: 10,
           length: 5
       },
       {
           width: 15,
           length: 7
       },
       {
           width: 20,
           length: 5
       },
       {
           width: 8,
           length: 10
       }
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000
}

function isBudgetEnough(data) {
   // V = Д x Ш x В
   const myHeight = data.height;
   let volume = 0;
   for (let i = 0; i < data.shops.length; i++){
      let myObj = data.shops[i];
      volume += myHeight * myObj.width * myObj.length;
   }
   // console.log(volume);
   let costVolue = volume * data.moneyPer1m3;
   // console.log(costVolue);

   if (costVolue > data.budget) {
      return 'Бюджета недостаточно';
   }else{
      return 'Бюджета достаточно';
   }

}

console.log(isBudgetEnough(shoppingMallData));

// практика написания кода 14
 const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Takesi2', 'Sam'];
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
   arr.sort();
   // console.log(arr);
   const resArr = [];
   let count = 0;
   let tempArr = [];
   for (let i = 0; i < arr.length; i++){
      
      for (let j = 0; j <3; j++){
         if (arr[i] !== undefined){
            tempArr[j] = arr[i];
            if (j<2){
             i++;
            }
         }
      }

      if (tempArr.length ===3){
         resArr[count]  = tempArr;
         count ++;
         tempArr = [];
      }
      // console.log(tempArr);
   }

   let textRes = 'Оставшиеся студенты: ';
   if(tempArr.length ===0){
      textRes += '-';
   }else{
      textRes += tempArr.join(', ');  
   }
   resArr[count]  = textRes;

   return resArr;
}

console.log(sortStudentsByGroups(students));