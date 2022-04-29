'use strict';

// практика очистка текста от лишних символов
function stringClean(s){
    // Function will return the cleaned string
    return s.replace(/[0-9]/g, '');
  }

console.log(stringClean(""));//, "")
console.log(stringClean("! !"));//, "! !")
console.log(stringClean("123456789"));//, "")
console.log(stringClean("(E3at m2e2!!)"));//, "(Eat me!!)")
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"));
//, "Dsa cdsc csa!!! I Am cool!")
console.log(stringClean("A1 A1! AAA   3J4K5L@!!!"));
;//, "A A! AAA   JKL@!!!")
console.log(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"));
;//, "Adgre Asad! AAA fvfdvJKL@")
console.log(stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 "));
;//, "Addsadds A  $$sad! AAAe fKL@ ")
console.log(stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 "));
;//, "Addsadds A  $$sa!d! A!A!Ae$ f## ")
console.log(stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?"));
//, "My \"messy\" data issues! Will they ever, ever be solved?")
console.log(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"));
// "Why can't we buy the good software? #cheapskates")

// let str = 'call: +7(123) 456-78-90';
// console.log(str.replace(/[^+\d]/g, ''));

// let str = '"Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222';
//  console.log(str.replace(/[0-9]/g, ''));


 ///2 практика
//  отображение данных по данным массива
//  []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Примечание. Для 4 и более имен число "and 2 others"просто увеличивается.
// let names = [];
function likes(names){
    const arrL = names.length;
    // TODO
    if ( arrL === 0){
        return "no one likes this";
    }else{
  
        if ( arrL === 1){
            return `${names[0]} likes this`; 
        }else if ( arrL === 2){
            return `${names[0]} and ${names[1]} like this`; 
        }else if ( arrL === 3){
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        }else{
            return `${names[0]}, ${names[1]} and ${arrL-2} others like this`;  
        }
    }
}

console.log(likes([]));//, //'no one likes this');
console.log(likes(['Peter']));//, 'Peter likes this');
console.log(likes(['Jacob', 'Alex']));
//, 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']));//
// , 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
//, 'Alex, Jacob and 2 others like this');

 ///3 практика
 const humanYearsCatYearsDogYears = function(humanYears) {
    const catYears = [15,9,4];
    const dogYears = [15,9,5];
    let catY = 0;
    let dogY = 0;
    let intd = 0;
    if (humanYears<1){
        return [0,0,0]; 
    }else{   
        for (let i=1;i<=humanYears;i++){
            catY +=catYears[intd];
            dogY +=dogYears[intd];
            if (intd<2){
                intd++;
            }
        }        
    }
    return [humanYears,catY,dogY];
  };
  

  console.log(humanYearsCatYearsDogYears(1));//[1,15,15]
  console.log(humanYearsCatYearsDogYears(2));//[2,24,24]
  console.log(humanYearsCatYearsDogYears(10));//[10,56,64]

//   4
var isSquare = function(n){
    if (n<0){
      return false;  
    }
    if (Number.isInteger(Math.sqrt(n))) {
      return true; 
    }else{
     return false; 
   }
  };

  // 5
    // Given an array of the weather conditions, your task is to work out the minimum number of umbrellas he needs to start with in order that he never gets wet. 
    // He can start with some umbrellas at home and some at work, but the output is a single integer, the minimum total number.
    // The input is an array/list of consecutive half-day weather forecasts. 
    // So, e.g. the first value is the 1st day's morning weather and the second value is the 1st day's afternoon weather.
    // "clear",
    // "sunny",
    // "cloudy",
    // "rainy",
    // "overcast",
    // "windy"
    // "thunderstorms".
function minUmbrellas(weather) {
    let home = 0;
    let job = 0;
    let atHome = true;
     
    weather.forEach((e)=>{
        if (e === "rainy" || e ==="thunderstorms" ){
            if (atHome){
                job++;
                if (home>0){
                    home--;                    
                } 
             }else{
                home++;
                if (job>0){
                    job--;                    
                }   
            }
        }
        atHome = !atHome;
    });
    return home+job;
}
    console.log(minUmbrellas(["cloudy"]));//0
    console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy"]));//1
    console.log(minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]));//2


//6
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
// Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  let res = 0;
  if (number < 0){
      return 0;
  }

  for (let i =0; i<number; i++){
    if(i % 3===0 || i % 5===0){
        res +=i;  
    }
  }
  return res;
}

// console.log(solution(-1));
console.log(solution(2));
console.log(solution(9));
console.log(solution(10));

//7
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    const array1 = [];
    const array2 = [];

    arr.forEach((e)=>{

        if (e ===0){
            array2[array2.length] = e;  
        }else{
            array1[array1.length] = e; 
        }

    });
    
    return [...array1, ...array2];
}
// (arr.filter(n => n === 0))????
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); //returns[false,1,1,2,1,3,"a",0,0]

//8
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. 
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    let nString = ''+n;
    if (nString.length <=1){
        return n; 
    }

    if (nString.length ==1){
        // console.log(nString);
        return (+nString[0] + (+nString[1]));
    }else{
        let sum = 0;
        for (let i = 0; i<nString.length;i++){
            sum += +nString[i]; 
        }
        return digital_root(sum);
    }
  }

  console.log(digital_root(100));
  console.log(digital_root(11));
  console.log(digital_root(16));
  console.log(digital_root(456));

  //9
//   Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число и есть позиция, которую должно занимать слово в результате.
// Примечание. Цифры могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).
// Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только допустимые последовательные числа.
// Примеры
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
function order(words){
    
    const myArr = words.split(' ');
    const nyArr = [];
    let n = '';

    myArr.forEach((e)=>{
        n = e.replace(/[^0-9]/g,'');
        nyArr[+n] = (e.replace(n,''));
   
    });
    return nyArr.join(' ').trim();
}
console.log(order("Bo2b Alic1e C3indy"));

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// if(arr[0]==0){delete arr[0]}
// if(arr[arr.length]==0){delete arr[arr.length]]}
// return 