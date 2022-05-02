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