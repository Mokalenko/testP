"use strict"; // директива определяющая что код работает в новом варианте кода 
//(строгий режим задания переменных)

//let number = 10; // изменяемая переменная
//const leftBorderWidh = 1; //  констатнта, раз задали и все
//var name = 'Vasy'; // старый вариант который не желательно использовать, сразу код ее видит (сразу существует)
// и выдает как андефайн если обращаемся до ее определения
//number = 70;
//console.log(number);

//null - не существует  
//undefined - существует но не задано значение

//let number = 5.076;
//console.log(4/0); // деление на ноль дает infinity
//NaN - результат выполнение опреации не число

//const obj = {
//     name: "Vasy",
//     age: 30,
//     isMarried: false
//};

//console.log(obj.age);
//console.log(obj["isMarried"]);

//let arr = ['test.png','test2.png','test3.png'];
//console.log(arr[2]);

//let rez = confirm("Are yo hire?"); // вопрос с ответом отмена/ок , тру /фолс
//let rez = prompt("Yo are 18 years ild?","18");
//let rez = +prompt("Yo are 18 years ild?","18"); + перед prompt - динамическая типизация в число
//console.log(typeof(rez)); // typeof - тип данных переменной

const answers = [];
answers[0] = prompt("Yo are 18 years ild?","18");
answers[1] = prompt("Yo are 18 years ild?","20");
answers[2] = prompt("Yo are 18 years ild?","25");

document.write(answers);// заменяет текст страницы на то что записываем