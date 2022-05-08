"use strict";
// Palindrome Checker
function palindrome(str) {

    let myString1 = str,
    myString2 = '';
    myString1 = myString1.toLowerCase();
    myString1 = myString1.replace(/[^a-z0-9]/g,'');
 
    for (let i = myString1.length-1;i>=0;i--){
        myString2 +=myString1[i];
    }

    return myString2===myString1;
  }
  
  console.log(palindrome("eye"));
  console.log(palindrome("A man, a plan, a canal. Panama"));
  console.log(palindrome("not a palindrome"));//false
  console.log(palindrome("1 eye for of 1 eye."));//false
  console.log(palindrome("0_0 (: /-\ :) 0-0"));

//   Roman Numeral Converter
// 1	2	3	4	5	6	7	8	9
// I   II III IV   V   VI VII VIII IX

// 10	20	30	40	50	60	70	80	90
// X   XX  XXX XL   L  LX  LXX LXXX XC

// 100	200	300	400	500	600	700	800	900
// C CC    CCC  CD  D   DC DCC DCCC CM

// 1000 = M

function convertToRoman(num) {
    const myRoman = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M",
    };

    let res = '',
    thousand = Math.trunc((num/1000)),
    hundred = Math.trunc(((num-thousand*1000)/100)),
    ten = Math.trunc(((num-thousand*1000 - hundred*100)/10)),
    numbers = Math.trunc((num-thousand*1000 - hundred*100 - ten*10));

    for (let i =0; i<thousand;i++){
        res += "M";
    }
    res += hundred===0 ? '' : myRoman[hundred*100];
    res += ten===0 ? '' : myRoman[ten*10];
    res += numbers===0 ? '' : myRoman[numbers];
    return res;
   }
   console.log(convertToRoman(9)); // IX.
   console.log(convertToRoman(36)); 
   console.log(convertToRoman(798)); // DCCXCVIII
   console.log(convertToRoman(2014)); //MMXIV

//    Caesars Cipher

function rot13(str) {
    const check = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          checkOut = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    let res = '';
    for (let i = 0; i < str.length; i++){
        if (/[A-Z]/i.test(str[i])){
            res += checkOut.charAt(check.indexOf(str[i])) ; 
        }else{
            res += str[i]; 
        }
    }
    return res;
  }
  
  console.log(rot13("SERR PBQR PNZC!"));

//   Telephone Number Validator
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// ^\(*\+*[1-9]{0,3}\)*-*[1-9]{0,3}[-. /]*\(*[2-9]\d{2}\)*[-. /]*\d{3}[-. /]*\d{4} *e*x*t*\.* *\d{0,4}$
function telephoneCheck(str) {
    // let res = false;
    // if (/(1\s)?\d{3}[-\s]\d{3}[-\s]\d{3}/.test(str)){
    //     res = true; 
    // }
    // else if (/[()]\d{3}[)](\s)?\d{3}-\d{3}/.test(str)){
    //     res = true;
    // }else if (/[(]\d{3}[)\s]\d{3}[-]\d{3}/.test(str)){
    //     res = true;
    // }else if (/\d{3}[\s]\d{3}-\d{3}/.test(str)){
    //     res = true;
    // }else if (/\d{10}/.test(str)){
    //     res = true;
   
        
    // }
    if ((str.indexOf('(') !=-1 && str.indexOf(')') ==-1)
    || (str.indexOf('(') ==-1 && str.indexOf(')') !=-1)){
        return false;
    }
    let phoneTest = new RegExp(/^((\+1)|1)? ?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})( ?(ext\.? ?|x)(\d*))?$/);

    let phone = str.trim();
    let results = phoneTest.exec(phone);
   if (results !== null && results.length > 8) {
       return true;
   }
   else {
        return false;
   }

  }
  console.log(telephoneCheck("1 555)555-5555"));
  console.log(telephoneCheck("2 555 555 5555"));
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("(555) 555-5555"));
  console.log(telephoneCheck("555-555"));
  console.log(telephoneCheck("1 (555) 555-5555")); //должны вернуть true.
  console.log(telephoneCheck("(555)555-5555")); //должен вернуться true.
  console.log(telephoneCheck("1 (555)555-5555")); //должен вернуться true.

  function checkScope() {
    let i = 'function scope';
    if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  console.log(checkScope());