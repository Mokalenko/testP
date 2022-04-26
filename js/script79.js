'use strict';
// урок 79
document.addEventListener('DOMContentLoaded', () =>{

    // использование класов для карточек
    class MenyCart{
        constructor(src, alt, title, descr, prise, parentSelecor, ...clases){
            this.src = src;
            this.title = title;
            this.descr = descr;
            this.prise = prise;
            this.alt = alt;
            this.transfer = 27;
            this.parent = document.querySelector(parentSelecor);
            // this.clases = clases || ['menu__item'];
            if (clases.length == 0){
                this.clases = ['menu__item']; 
            }else{
                this.clases = clases;
            }

            this.changeToUAH();
        }

        changeToUAH(){
            this.prise = this.prise * this.transfer;
        }

        render(){
            const element = document.createElement('div');

            this.clases.forEach((e)=>{
                element.classList.add(e);
            });

            element.innerHTML = `<div class="menu__item">
            <img src="${this.src}" alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.title}"</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.prise}</span> грн/день</div>
            </div>
            </div>`;
            this.parent.append(element); // вставка/добавление элемента в другой

        }

    }

    //const div = new MenyCart(...);
    // или
    new MenyCart(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'это новый подход к приготовлению блюд',
        33,
        '.menu .container',
        'menu__item',
        'big').render();

        new MenyCart(
            "img/tabs/vegy.jpg",
            "vegy",
            'Меню "Фитнес"',
            'это новый подход к приготовлению блюд',
            33,
            '.menu .container').render();

});

//79
// спрет - раскладывает на отдельные элементы
// рет - складывает отдельные в один массив

// так задаются не четкое количество аргументов это опрератор рест
// const log = function(a,b=2, ...rest){
//     // console.log(a,b,...rest);// рест разложит на элементы
//     // console.log(a,b,rest); // рест выведется как массив
//     // b = b || 1;// не надежный вариант проверки заполнения б
//     console.log(a*b);

// };

// log(22);