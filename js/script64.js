'use strict';
// урок 64
document.addEventListener('DOMContentLoaded', () =>{

    console.log('ran');

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent(){
        tabsContent.forEach(item =>{
                item.style.display = 'none';
                // item.classList.add('hide');
                // item.classList.remove('show','fade');
                // item.classList.remove('fade');
        });

        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active');
        });  
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        // tabsContent[i].classList.add('show', 'fade');
        // tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click',(event)=>{
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item,i) =>{
                if (item==target){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});