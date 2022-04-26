'use strict';
// урок 71
document.addEventListener('DOMContentLoaded', () =>{
    const box = document.querySelector('[data-modal]');
    const boxClose = document.querySelector('[data-close]');
    const elModal = document.querySelector('.modal');
// const width = box.clientWidth; // элемента без учета полосы прокрутки
// const high = box.clientHeight;

// // const width = box.offsetWidth; // видимой части
// // const high = box.scrollHeight;// размер без учета полосы прокрутки

// const myButn = document.querySelector('button');

// myButn.addEventListener('click', ()=>{
//     // box.style.height = box.scrollHeight+'px';
//     console.log(box.scrollTop);
// });

// // console.log(box.getBoundingClientRect());// все координаты объекта
// // console.log(box.getBoundingClientRect().top);// координаты топ

// const style = window.getComputedStyle(box);// список стилей от окна по объекту
// console.log(style.display);

// // const style = window.getComputedStyle(box, псевдо элемент);// стили псевдо элемента
// // console.log(style.display);

// console.log(document.documentElement.scrollTop);

// document.documentElement.scrollTop = 0;// переход на верх окна
// window.scrollBy(0,400);// пролистав в низ на 400 пикселей от текущей позиции
// window.scrollTo(0,400);// пролистать с начала страницы на 400 пикс

// урок 72
clouseModal();
function clouseModal(){
    elModal.style.display = 'none';
    // elModal.classList.remove('show');
    // elModal.classList.add('hide');
    elModal.classList.toggle('show'); // добавляет клас если нет и удаляет если есть
    document.body.style.overflow = '';
}

boxClose.addEventListener('click',()=>{
    clouseModal();
});

function openModal(){
    elModal.style.display = 'block';
    // elModal.classList.add('show');
    // elModal.classList.remove('hide');
    elModal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
   // clearTimeout(modalIdTime);
}

box.addEventListener('click',()=>{
    openModal(); 
});

elModal.addEventListener('click', (e)=>{
    if (e.target === elModal){
        clouseModal(); 
    }
});

document.addEventListener('keydown', (e)=>{
    // console.log(e);
    // console.log(e);

    if (e.code === "Escape"){
        if (document.body.style.overflow === 'hidden') {
            console.log('закрыли');   
        clouseModal();   
        }
    }
});
    // const modalIdTime = setTimeout(openModal,3000);

// проверка что долистал до низу страницы
function showMod(){
    if (window.pageXOffset+document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
        openModal(); 
        window.removeEventListener('scroll',showMod);  
    }
}

window.addEventListener('scroll',showMod);
});

// 75
// функции конструкторы

// const num = new Number(3);
// console.log(num);

function user (name, id) {
    this.name = name;
    this.id = id;
    this.humen = true;
    this.hello = function(){
        console.log(`Privet ${this.name}`);  
    };
}

user.prototype.exit = function(){
    console.log(`User ${this.name} exit`);  
};
    const ivan = new user('Ivan',1);
    const alex = new user('Alex',1);
    // console.log(ivan);
    // console.log(alex);
    // alex.hello();
    // alex.exit();

// 76

// 1 обычная функция this = виндовс
// если ус стрикт = андефайн
// 2. в функции без зис, в объекте сам объект
function showThis(a,b){
     function sum(){
        //return this.a+this.b;
        return a+b;
    }

    return sum();
}

console.log(showThis(1,2));//

// 3. через оператор нюб пример function user - создает новый екземпляр объекта

function sayName(surname){
    console.log(this);
    console.log(this.name+' '+surname);
}

const user1 = {
    name:'John'
};

// первая переменная объект, вторая как передавать переменные
sayName.call(user1,'Smit'); // указание объекта для функции
sayName.aplly(user1,['smit']); // указание объекта для функции 

function count(num){
    return this*num;
}
const double = count.bind(2);// bind - устанавливает принудительный объект зис
console.log(double(4));

// урок 77 класы - синтаксический сахар
//Rectangle = прямоугольник
class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
        this.name = 'Rectangle';
    }

    calcArea(){
        return this.height * this.width;
    }
}

//extends - наследовать от другого класа
class ColoretRectangleWithText extends Rectangle{
    constructor(height,width,text, bgColor){
        //super() - вызывает ье же строки заполнения что и в основного
        //    super();
        super(height,width);// можно указать какие свойства создать
        this.text = text;
        this.bgColor = bgColor;
    }

    calcArea(){
        return this.height * this.width;
    }
}
const square = new Rectangle(10,10);
console.log(square.calcArea());

// прицыпы ооп 
// концепция
// екземпляры
// наследование

