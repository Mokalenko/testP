"use strict"; // директива определяющая что код работает в новом варианте кода 
//(строгий режим задания переменных)
// практика 20
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

// function showGoodFilms(arr) {
//     let myArr = [];
//     let it = 0;
//     arr.forEach((element,i)=> {
//         if(element.rating>=8){
//             myArr[it] = element;
//             it++;
//         }
//     });   
//     return myArr;
// }

// function showListOfFilms(arr) {
//    let res = ''; 
//     arr.forEach((element,i)=> {
//         res += ''+(res == ''?'':', ');
//         res += element.name;
//     });   
//     return res; 
// }

function setFilmsIds(arr) {
    let myArr = [];
    arr.forEach((element,i)=> {
        myArr[i] = JSON.parse(JSON.stringify(element));
        myArr[i].id = i;
    });   
    return myArr;
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    let lenght = 0;
    arr.forEach((element,i)=> {
        lenght++;
    }); 
    for (let i = 0; i < lenght; i++){
        if(arr[i].id === undefined){
         return false;
        }
    }
    return true; 
}
console.log(checkFilms(films));
console.log(checkFilms(tranformedArray));

// практика 21

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    let res = 0;
    data.forEach((item)=> {
       if (item.amount > 0){
        res +=item.amount;
       }
    });
    return res;    
};

const getTotalIncomeAmount = (data) => {

    let lenght = 0;
    data.forEach((element,i)=> {
        lenght++;
    }); 
    let myVar = true;
    for (let i = 0; i < lenght; i++){
        if(data[i].amount < 0){
            myVar = false;
         break;
        }
    }

    if (!myVar){
    let res = 0;
    data.forEach((item)=> {
        res +=item.amount;
    });
    return res; 
}else{
return getPositiveIncomeAmount(data);
}
};

console.log(getPositiveIncomeAmount(funds));
console.log(getTotalIncomeAmount(funds));