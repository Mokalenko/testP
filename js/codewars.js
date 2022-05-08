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

// 10
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
function humanReadable (seconds) {
    if(seconds >= 359999) {
        return '99:59:59';
    }

    const myDate = new Date(seconds*1000);
   
    let dh = (myDate.getUTCDate()-1)*24,
        h = ''+(myDate.getUTCHours()+dh),
        m = ''+myDate.getUTCMinutes(),
        s = ''+myDate.getUTCSeconds();
    return `${h.length==1 ? '0'+h : h}:${m.length==1 ? '0'+m : m}:${s.length==1 ? '0'+s : s}`;
}
console.log(humanReadable(86400)); // '00:00:00'

console.log(humanReadable(359999)); // '99:59:59'
console.log(humanReadable(45296)); // '12:34:56'
console.log(humanReadable(90)); // '00:01:30'
console.log(humanReadable(0)); // '00:00:00'

// 11
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    let res = url.replace('https://','');
    res = res.replace('http://','');
    res = res.replace('www.','');
    let lastInd = res.indexOf('.');
    res = res.slice(0,lastInd);
    return res.trim();
}

console.log(domainName("http://google.com"));//, "google");
console.log(domainName("http://google.co.jp"));//, "google");
console.log(domainName("www.xakep.ru"));// "xakep"));//;
console.log(domainName("https://youtube.com"));// "youtube");

// 12

function sumStrings(a,b) { 
    var n = Math.max(a.length, b.length)

    a = a.padStart(n, 0)
    b = b.padStart(n, 0)
  
    var res = Array(n), d = 0
  
    for (var q=n-1; ~q; --q) {
      if ((res[q] = d + +a[q] + +b[q]) > 9) {
        d = 1, res[q] -= 10;
      } else {
        d = 0;
      }
    }
    
    if (d) {
      res.unshift(1)
    }
    
    return res.join("");
    
}

// (BigInt(a) + BigInt(b)).toString();!!!!!

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
console.log(sumStrings('123','456'));

// 13
function sumStrings(string) { 
    let nString = '';
    let nambString = ''+string.replace(/[^0-9]/g,'');
   
    let nLog = nambString.length;
    if (nLog===0){
        return string+1;
    }

    nString = string.replace(nambString,'');
    nambString = ''+(+nambString+1);
    
    if (nLog > nambString.length){   
        nambString = nambString.padStart(nLog,'0');
    }
    return nString+nambString;
}

console.log(sumStrings('foobar000'));
console.log(sumStrings('foo099'));

// 14 
// For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"

function formatDuration (seconds) {
    // Complete this function
    let y = 0,
        month = 0,///??
        d = 0,
        h = 0,
        m = 0,
        s = 0,
        secondLeft = seconds;
  
    y = Math.trunc(secondLeft/(365*24*60*60));   
    if(y>0){secondLeft =secondLeft-(y*365*24*60*60)}
    d = Math.trunc(secondLeft/(24*60*60));
    if(d>0){secondLeft =secondLeft-(d*24*60*60)}   
    h = Math.trunc(secondLeft/(60*60));
    if(h>0){secondLeft =secondLeft-(h*60*60)}
    m = Math.trunc(secondLeft/(60));
    if(m>0){secondLeft =secondLeft-(m*60)};
    s =  secondLeft;
    y = y==0 ? '' : y==1? `${y} year` : `${y} years`;
    d = d==0 ? '' : d==1? `${d} day` : `${d} days`;
    h = h==0 ? '' : h==1? `${h} hour` : `${h} hours`;
    m = m==0 ? '' : m==1? `${m} minute` : `${m} minutes`;
    s = s==0 ? '' : s==1? `${s} second` : `${s} seconds`;

     const arr = [y,d,h,m,s];
     const myArr = arr.filter(element => element != '');
     return myArr;
    // return `${y=0 ? '' : y=1? 'year':'years'}${}
    // `;
}
  
console.log(formatDuration(1));//, "1 second");
console.log(formatDuration(62));//, "1 minute and 2 seconds");
console.log(formatDuration(120));//, "2 minutes");
console.log(formatDuration(3600));//, "1 hour");
console.log(formatDuration(3662));//, "1 hour, 1 minute and 2 seconds");
console.log(formatDuration(365*24*60*60 +3435));//

// 15
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
    const myArr = str.split('.');

    if (myArr.length != 4){
        return false;
    }

    let nambString = ''+str.replace(/[0-9]/g,'');
    
    if (nambString !='...'){
        return false; 
    }

    for (let i = 0; i< myArr.length; i++){
        if (myArr[i].length == 0){
            return false;    
        }
         if (myArr[i].length > 1 && +myArr[i][0] == 0){
            return false;    
        }
        if (+myArr[i] < 0 || +myArr[i] > 255){
            return false;    
        }
    }

    return true;   
}

// function isValidIP2(str) {
// const net = require('net');
// const isValidIP = (s) => net.isIP(s);
// }

// function isValidIP(str) {
//     return new RegExp(
//                "^(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])"
//             +"\\.(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])"
//             +"\\.(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])"
//             +"\\.(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$").test(str);
//   }

console.log(isValidIP("197.156.251.")); // false);
//   console.log(isValidIP("0.0.0.0")); // true);
//   console.log(isValidIP("12.255.56.1")); // true);
//   console.log(isValidIP("137.255.156.100")); // true);
//   console.log(isValidIP('')); //false);
//   console.log(isValidIP('abc.def.ghi.jkl')); //false);
//   console.log(isValidIP('123.456.789.0')); //false);
//   console.log(isValidIP('12.34.56')); //false);
//   console.log(isValidIP('01.02.03.04')); //false);
//   console.log(isValidIP('256.1.2.3')); //false);
//   console.log(isValidIP('1.2.3.4.5')); //false);
//   console.log(isValidIP('123,45,67,89')); //false);
//   console.log(isValidIP('1e0.1e1.1e2.2e2')); //false);
//   console.log(isValidIP(' 1.2.3.4')); //false);
  console.log(isValidIP('1.2.3.4 ')); //false);
  console.log(isValidIP('12.34.56.-7')); //false);
  console.log(isValidIP('1.2.3.4\n')); //false);
  console.log(isValidIP('\n1.2.3.4')); //false);


//   16
// Если n — числитель, а d — знаменатель дроби, эта дробь определяется как (сокращенная) правильная дробь тогда и только тогда, когда НОД (n, d) == 1.
// Например 5/16, это правильная дробь, а 6/16нет, так как и 6, и 16 делятся на 2, поэтому дробь может быть уменьшена до 3/8.
// Теперь, если рассмотреть заданное число d, сколько правильных дробей можно составить, используя d в качестве знаменателя?
// Например, предположим, что d равно 15: с его помощью можно построить 8 различных правильных дробей от 0 до 1: 1/15, 2/15, 4/15, 7/15, 8/15, 11/15. , 13/15 и 14/15.
// Вы должны построить функцию, которая вычисляет, сколько правильных дробей вы можете построить с заданным знаменателем:

function properFractions(n){
    // if (n===1){
    //     return 0;
    // }
    // let res = 0;
    // const myArr = [];
    // let ind = 0;
    // for (let i = 2; i <= n; i++){
    //     if (n%i===0){
    //         myArr[ind] = i;
    //         ind++;
    //     }
    // }
    // // console.log(myArr);
    // for (let i = 1; i <= n; i++){ 
    //     let correct = true;  
    //     for (let j = 0; j<myArr.length;j++){
    //         if (i%myArr[j]===0){
    //            correct =false;
    //           break;
    //         }
    //     }
    //     if (correct){
    //         res++;
    //     }
    // }
    // return res;
  if (n === 1) return 0;

  let res = n, a = n;
  for(let i = 2; i <= Math.sqrt(a); i++) {
    if(a % i === 0) {
      res = res / i * (i - 1);
      while(a % i === 0) a /= i;
    }
  }

  if(a > 1)
    res = res / a * (a - 1)
  
  return res

}
console.log(properFractions(500000002));//==243900800
// console.log(properFractions(0));//==0
// console.log(properFractions(1));//==0
// console.log(properFractions(2));//==1
// console.log(properFractions(5));//==4
// console.log(properFractions(15));//==8
// // 1: 1/15, 2/15, 4/15, 7/15, 8/15, 11/15. , 13/15 и 14/15.
// console.log(properFractions(25));//==20
// console.log(properFractions(125));//==100

// 17
// Что такое анаграмма? Ну, два слова являются анаграммами друг друга, если они оба содержат одни и те же буквы. Например:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false
// Напишите функцию, которая найдет все анаграммы слова из списка. Вам будет дано два входа слово и массив со словами. Вы должны вернуть массив всех анаграмм или пустой массив, если их нет. Например:

function anagrams(word, words){
    let res = [];
    let myObj ={
    };
    let it = 0;
    for (i =0; i < word.length; i ++){
        let re = new RegExp(word[i], 'g');
        myObj[word[i]] = word.match(re).length;
    }
    
    words.forEach((e)=>{
        if(e.length ===word.length){
        let correct = true; 
        for (let key in myObj) {
            let re = new RegExp(key, 'g');
            let match = e.match(re);
            if(match!=undefined){
                if(myObj[key] != match.length){
                correct = false; 
                }
            }else{
                correct = false; 
            }
        }
        if (correct){
            res[it] = e;
            it++;
        }
    }
    });

    return res;
}
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));// => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));// => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));// => []

// 18
// Вы умеете делать спираль? Давайте проверим это!
// Классическое определение: Спираль — это кривая, исходящая из центральной точки и постепенно удаляющаяся по мере вращения вокруг этой точки.
// Ваша цель — завершить функцию createSpiral(N), которая получает целое число Nи возвращает NxNдвумерный массив с числами , представленными 1в NxNвиде спирали по часовой стрелке.
// Возвращает пустой массив, если он N < 1не Nявляется целым/числом

// Примеры:

// N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]

// 1    2    3    
// 8    9    4    
// 7    6    5    

function createSpiral(n){
    if (!Number.isInteger(n) || n < 1){
        return [];
    }
    // 1 2 3 4 5 6 7 8 9
    let res = [];

    for (let i =0;i<n;i++){
        res[i] = [];
    }

    let arr1 = 0,
     arr2 = 0,
     arr1Plus = 0,
     arr2Plus = 1,
     dirChanges = 0,
    v = n;

    for (let i =0;i<n*n;i++){
        res[arr1][arr2] = (i+1); 
        if (--v == 0) 
			{
				v = Math.ceil(n * (dirChanges % 2) + n * ((dirChanges + 1) % 2) -(dirChanges / 2 - 1) - 2);
                let temp = arr2Plus;
				arr2Plus = -arr1Plus;
				arr1Plus = temp;
				dirChanges++;
			}
        arr2 +=arr2Plus;
        arr1 +=arr1Plus;
    }

    return res;
}

console.log(createSpiral(3));

//19 
// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).
// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end){
   const arrCost = [BigInt(256*256*256)
                ,BigInt(256*256)
                ,BigInt(256)
                ,BigInt(1)]; 
    let sum1 = BigInt(0),
        sum2 = BigInt(0);
    start.split('.').forEach((item,i)=>{
            sum1 += BigInt(+item)*BigInt(arrCost[i]);
        }
    );

    end.split('.').forEach((item,i)=>{
        sum2 += BigInt(item)*BigInt(arrCost[i]);
        }
    );

    return +(BigInt(sum2) - BigInt(sum1)).toString();
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1"));//, 1);
console.log(ipsBetween("10.0.0.0", "10.0.0.50"));//, 50);
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));//, 246);
console.log(ipsBetween("10.11.12.13", "10.11.13.0"));//, 243);
console.log(ipsBetween("160.0.0.0", "160.0.1.0"));//, 256);
console.log(ipsBetween("170.0.0.0", "170.1.0.0"));//, 65536);
console.log(ipsBetween("50.0.0.0", "50.1.1.1"));//, 65793);
console.log(ipsBetween("180.0.0.0", "181.0.0.0"));//, 16777216);
console.log(ipsBetween("1.2.3.4", "5.6.7.8"));//, 67372036);
console.log(ipsBetween("0.0.0.0", "255.255.255.255"));//, 2 ** 32 - 1);


// 20
// Улитка
// Учитывая n x nмассив, вернуть элементы массива, расположенные от самых внешних элементов до среднего элемента, перемещаясь по часовой стрелке.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

function snail(array){

    if (!Array.isArray( array )
    || !Array.isArray( array[0] )
    || array[0].length ==0){
      return [];  
    }

    let res = [];
    let n = array.length;
     arr1 = 0,
     arr2 = 0,
     arr1Plus = 0,
     arr2Plus = 1,
     dirChanges = 0,
    v = n;

    for (let i =0;i<n*n;i++){
        res[i] = array[arr1][arr2];
        if (--v == 0) 
			{
				v = Math.ceil(n * (dirChanges % 2) + n * ((dirChanges + 1) % 2) -(dirChanges / 2 - 1) - 2);
                let temp = arr2Plus;
				arr2Plus = -arr1Plus;
				arr1Plus = temp;
				dirChanges++;
			}
        arr2 +=arr2Plus;
        arr1 +=arr1Plus;
    }
    return res;
}

console.log(snail([[]]));

console.log(snail([undefined ]));

let array = [[1,2,3],
          [4,5,6],
          [7,8,9]];

console.log(snail(array));


// 21
// Завершите решение так, чтобы оно удаляло весь текст, следующий за любым из переданных маркеров комментариев. Все пробелы в конце строки также должны быть удалены.

// Пример:
// Учитывая входную строку:

// apples, pears # and bananas
// grapes
// bananas !apples
// Ожидаемый результат будет следующим:

// apples, pears
// grapes
// bananas

function solution(input, markers){
    const myArr = input.split('\n');
    markers.forEach((e) => {
        myArr.forEach((item,i) => {
            let index = item.indexOf(e);
            if(index >= 0){
                myArr[i] = item.slice(0,index).trim();
            }
        });
    });
    return myArr.join('\n');
}
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
console.log(result);

// 22
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
    //   return (Number(a) + Number(b)).toString(); // Fix me!
    //  return (BigInt(a) + BigInt(b)).toString(); в старой ноде не работает!
    var n = Math.max(a.length, b.length)

    a = a.padStart(n, 0)
    b = b.padStart(n, 0)
  
    var res = Array(n), d = 0
  
    for (var q=n-1; ~q; --q) {
      if ((res[q] = d + +a[q] + +b[q]) > 9) {
        d = 1, res[q] -= 10;
      } else {
        d = 0;
      }
    }
    
    if (d) {
      res.unshift(1)
    }
    
    return res.join("");
}

console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
//, "91002328220491911630239667963")

// 23
function createSpiral(n){
    if (!Number.isInteger(n) || n < 1){
        return [];
    }
    // 1 2 3 4 5 6 7 8 9
    let res = [];
    let flag = n%2==0;
    
    for (let i =0;i<n;i++){
        let res1 = [];
        for (let j =0;j<n;j++){
            res1[j] = 0;
        }
        res[i] = res1;
    }

    let arr1 = 0,
     arr2 = 0,
     arr1Plus = 0,
     arr2Plus = 1,
     myI = 1,
     myInk = 0,
     dirChanges = 0,
    v = n;

    for (let i =0;i<n*n;i++){
        // res[arr1][arr2] = 1;
       if(!flag){
        if ( res[arr1] ==undefined){
            break;
        }
        if ( res[arr1][arr2] ==undefined){
            break;
        }
        res[arr1][arr2] = 1;
    }    
        if (--v == 0) 
			{
                v = Math.ceil(n * (dirChanges % 2) + n * ((dirChanges + 1) % 2) -(dirChanges / 2 - 1) - 2);
                let temp = arr2Plus;
				arr2Plus = -arr1Plus;
				arr1Plus = temp;
				dirChanges++;
                // console.log(dirChanges);
                
                if (dirChanges>2){
                    v = v-myI; 
                    console.log(v);
                    if (v <= 0) {
                        break;
                    } 
                    // console.log(v);
                    myInk++;
                    if (myInk%2==0){
                       // myInk = 1;
                         myI++;
                    }
                }
			}
          
            if(flag){
                if ( res[arr1] ==undefined){
                    break;
                }
                if ( res[arr1][arr2] ==undefined){
                    break;
                }
                res[arr1][arr2] = 1;
            }   

        //    let next = fnext(res,v,n,dirChanges,arr2Plus, arr1Plus,arr1,arr2);
        // //    console.log(next);
        //     if (next==1){
        //         res[arr1][arr2] = 0;
        //     }else{
            // if ( res[arr1] ==undefined){
            //     // break;
            // }
            // if ( res[arr1][arr2] ==undefined){
            //     // break;
            // }
            //     res[arr1][arr2] = 1;
            // }
            // console.log(res[arr1]); 
        arr2 +=arr2Plus;
        arr1 +=arr1Plus;
    }
 
    return res;
}
console.log(createSpiral(8));

function fnext(res,v,n,dirChanges,arr2Plus, arr1Plus,arr1,arr2){
//    console.log(res);

    // if (--v <= 0) 
    // {
    //     // v = Math.ceil(n * (dirChanges % 2) + n * ((dirChanges + 1) % 2) -(dirChanges / 2 - 1) - 2);
        
    //     // let temp = arr2Plus;
    //     // arr2Plus = -arr1Plus;
    //     // arr1Plus = temp;
    //     // dirChanges++;
    //     v = Math.ceil(n * (dirChanges % 2) + n * ((dirChanges + 1) % 2) -(dirChanges / 2 - 1) - 2);
    //             let temp = arr2Plus*2;
	// 			arr2Plus = -arr1Plus*2;
	// 			arr1Plus = temp;
	// 			dirChanges++;

    // }else{
        arr2Plus =arr2Plus*2;
        arr1Plus =arr1Plus*2;  
    // }
    arr2 +=arr2Plus;
    arr1 +=arr1Plus;
    console.log(res);
    // console.log(res[arr1]);
    console.log(`res[arr1] ${res[arr1]} // arr1 ${arr1} arr2 ${arr2}// v ${v}`);
    return res[arr1]==undefined ? 0:res[arr1][arr2];
}

console.log(createSpiral(6));

const arr = [5, 6, 11, 20, 3];
 
const result = arr.reduce((sum, curr) => sum + curr, 10);
console.log(result);

const arr = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];
 
const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr)
console.log(result);

const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
 
two().then(console.log);

// const promisify = (item, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(item), delay));
 
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
 
// async function three() {
//     const outpu1 = await a();
//     const outpu2 = await b();
//     const outpu3 = await c();
//     return `three is done: ${outpu1} ${outpu2} ${outpu3}`
// }
 
// three().then(console.log);

// const FCC = "freeCodeCamp"; // Change this line
// let fact = "is cool!"; // Change this line
// fact = "is awesome!";
// console.log(FCC, fact); // Change this line

// let lastNameLength = 0;
// const lastName = "Lovelace";

// // Only change code below this line
// // lastNameLength = lastName.length;
// // console.log(

//     function nextInLine(arr, item) {
//         // Only change code below this line
//         if (arr.length ==0){
//          arr.push(item);
//          return item; 
//         }
//         let myItewm = arr[0]; 
//         arr.push(item);
//         arr.shift();
//         return myItewm;
//         // Only change code above this line
//       }
      
//       // Setup
//       const testArr = [1, 2, 3, 4, 5];
      
//       // Display code
//       console.log(nextInLine([], 5));
//       console.log("Before: " + JSON.stringify(testArr));
//       console.log(nextInLine(testArr, 6));
//       console.log("After: " + JSON.stringify(testArr));

//       function testLogicalAnd(val) {
//         // Only change code below this line
      
      
//           if (val > 24 && val < 51) {
//             return "Yes";
//           }
//         // Only change code above this line
//         return "No";
//       }
      

// function orderMyLogic(val) {
//     if (val < 5) {
//       return "Less than 5";
//     } else if (val < 10) {
//       return "Less than 10";
//     } else {
//       return "Greater than or equal to 10";
//     }
//   }
  
//   console.log(orderMyLogic(4));
//       console.log( testLogicalAnd(25));

// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   if(card === 2 || card === 3 || card === 4 || card === 5 || card === 6){
//     count ++;
//   }

//   console.log(card);
// if(card === 10 || card =='J' || card == 'Q' || card =='K' || card == 'А'){
    
//     count --;
//   }

// if (count <=0){
//   return ""+count+" Hold";
// }else{
//   return ""+count+" Bet";
// }
//   // Only change code above this line
// }

// // console.log(cc(2));
// // console.log(cc(3));
// // console.log(cc(7));
// console.log(cc('K'));
// console.log(cc('A'));

// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
// //   delete
//   // Only change code below this line
//   function updateRecords(records, id, prop, value) {
//     if(value ===''){
//       delete records[id][prop];
//     }else{
//       if (prop =='tracks'){
//           if (records[id][prop]==undefined){
//             records[id][prop] = [value];
//           }else{
//         records[id][prop].push(value) ;
//           }
//       }else{
//       records[id][prop] = value;
//       }
//     }
//     return records;
//   }
//   updateRecords(recordCollection, 2468, "tracks", "");
//   console.log(recordCollection);

// function sum(arr, n) {
//     // Only change code below this line
//   if (n <= 0) {
//         return 0;
//       } else {
//         return sum(arr, n - 1) + arr[n - 1];
//       }
//     // Only change code above this line
//   }

//   console.log(sum([2, 3, 4, 5], 3));

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    let myObj = undefined;
    contacts.forEach((obj)=>{
        if (obj.firstName === name){
            myObj = obj; 
        }
    });

    if (myObj == undefined){
        return 'No such contact';
    }

    if(myObj[prop]== undefined){
        return 'No such property';  
    }

    return myObj[prop];
    // Only change code above this line
  };
  
  console.log(lookUpProfile("Akira", "likes"));

  function checkEqual(a, b) {
    return (a === b ? "Equal" : "Not Equal");
  }
  
  console.log(checkEqual(1, 2));

  function countdown(n,i=1){
    if (n <= i) {
      return [n];
    } else {
      const countArray = countdown(n, i+1);
      countArray.push(i);
      return countArray;
    }
  }

  console.log(countdown(5));

  function rangeOfNumbers(startNum, endNum) {
    if (startNum >= endNum) {
        return [startNum];
      } else {
        const countArray = rangeOfNumbers(startNum, endNum-1);
        countArray.push(endNum);
        return countArray;
      }
  };

  console.log(rangeOfNumbers(1, 5));