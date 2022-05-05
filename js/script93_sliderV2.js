'use strict';
// урок 93
window.addEventListener('DOMContentLoaded', function() {
  // Slider

//   let slideIndex = 1;
//   const slides = document.querySelectorAll('.offer__slide'),
//       prev = document.querySelector('.offer__slider-prev'),
//       next = document.querySelector('.offer__slider-next'),
//       total = document.querySelector('#total'),
//       current = document.querySelector('#current');

//   showSlides(slideIndex);

//   if (slides.length < 10) {
//       total.textContent = `0${slides.length}`;
//   } else {
//       total.textContent = slides.length;
//   }

//   function showSlides(n) {
//       if (n > slides.length) {
//           slideIndex = 1;
//       }
//       if (n < 1) {
//           slideIndex = slides.length;
//       }

//       slides.forEach((item) => item.style.display = 'none');

//       slides[slideIndex - 1].style.display = 'block'; 
      
//       if (slides.length < 10) {
//           current.textContent =  `0${slideIndex}`;
//       } else {
//           current.textContent =  slideIndex;
//       }
//   }

//   function plusSlides (n) {
//       showSlides(slideIndex += n);
//   }

//   prev.addEventListener('click', function(){
//       plusSlides(-1);
//   });

//   next.addEventListener('click', function(){
//       plusSlides(1);
//   });

  let slideIndex = 1;
  let offset = 0;
  const slides = document.querySelectorAll('.offer__slide'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current'),
      slidesWrapper = document.querySelector('.offer__slider-wrapper'),
      slidesFild = document.querySelector('.offer__slider-inner'),
      width = window.getComputedStyle(slidesWrapper).width;// получили примененный стиль и его ширину

      slidesFild.style.width = 100*slides.length +'%';
      slidesFild.style.display = 'flex';
      slidesFild.style.transition = '0.5s all';

      slidesWrapper.style.overflow = 'hidden';

      slides.forEach(slide =>{
        slide.style.width = width;
      });

      if (slides.length < 10) {
        total.textContent =  `0${slides.length}`;
          current.textContent =  `0${slideIndex}`;
      } else {
        total.textContent =  slides.length;
        current.textContent =  slideIndex;
      }

      prev.addEventListener('click', function(){
        if (offset == 0){
          offset = +width.slice(0, width.length-2) * (slides.length -1);
        }else{
          offset -= +width.slice(0, width.length-2);
        }

      slidesFild.style.transform = `translateX(-${offset}px)`;

      if (slideIndex === slides.length) {
          slideIndex = 1;
      }else {
          slideIndex ++;
      }

      if (slides.length < 10) {
          current.textContent =  `0${slideIndex}`;
      } else {
        current.textContent =  slideIndex;
      }

      });
          
      next.addEventListener('click', function(){
        if (offset === +width.slice(0, width.length-2) * (slides.length -1)){
            offset = 0;
        }else{
          offset += +width.slice(0, width.length-2);
        }

        slidesFild.style.transform = `translateX(-${offset}px)`;

        if (slideIndex === slides.length) {
          slideIndex = 1;
      }else {
          slideIndex ++;
      }

      if (slides.length < 10) {
          current.textContent =  `0${slideIndex}`;
      } else {
        current.textContent =  slideIndex;
      }
      });
});
