'use strict';
// урок 46
//console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.head.firstChild);
// console.log(document.head.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]'));
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// метод получения всех элементов

for (let node of document.body.childNodes){
    if (node.nodeName==='#text'){
        continue;
    }
    console.log(node);
}

// урок 47
// рекурсия

// function pow(a,b){
//     let res = 1;
//     for (let i = 0; i< b; i++){
//         res*=a;
//     }

//     return res;
// }
function pow(a,b){   
    if (b === 1) {
        return a;
    }else{
        return a*pow(a, b - 1);
    }
}
console.log(pow(2,2));
console.log(pow(3,3));

let students = {
    js: [{
        name: "jon",
        progress: 100
    },
    {
        name: "Ivan",
        progress: 80
    },
    {
        name: "pety",
        progress: 10
    }
    ],

    html:{
        basic:[{
        name: "Peter",
        progress: 15
    },
    {
        name: "Ann",
        progress: 85
    }],
    pro:[
        {
            name: "jon",
            progress: 100
        }
    ]
  }
};
// function getTotalProgressByIteration(data){
//     let total = 0;
//     let studens = 0;

//     for (let curse of Object.values(data)){
//         if (Array.isArray(curse)) {
//            studens += curse.length;  
//            for (let i =0; i< curse.length;i++){
//                 total +=curse[i].progress;
//             }   
//         }else{
//             for (let valCurse of Object.values(curse)){
//                 studens += valCurse.length;  
//                 for (let i =0; i< valCurse.length;i++){
//                      total +=valCurse[i].progress;
//                  }   
//             } 
//         }    
//     }
//     return total/studens;
// }

function getTotalProgressByIteration(data){  
    let resArr = getTotalByRec(data);  
    return resArr[0]/resArr[1];
}

function getTotalByRec(data){
    let total = 0;
    let studens = 0;
    for (let curse of Object.values(data)){
        if (Array.isArray(curse)) {
           studens += curse.length;  
           for (let i =0; i< curse.length;i++){
                total +=curse[i].progress;
            }   
        return [total,studens];
        }else{
            let resArr = [0,0];
            for (let subCurse of Object.values(curse)){     
                const subDataArr = getTotalByRec(subCurse);
                total[0] +=subDataArr[0];
                total[1] +=subDataArr[1];
            }
            return resArr;
        }    
    }
}

console.log(getTotalProgressByIteration(students));

function factorial(n) {
    if(!Number.isInteger(n)){
        return 'не подходит';  
    }else{
    if (n <= 1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
}

console.log(factorial(5.5));
console.log(factorial('sdfdsf'));
