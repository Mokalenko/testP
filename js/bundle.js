!function(){"use strict";window.addEventListener("DOMContentLoaded",(function(){let t=1,e=0;const n=document.querySelectorAll(".offer__slide"),o=document.querySelector(".offer__slider"),l=document.querySelector(".offer__slider-prev"),r=document.querySelector(".offer__slider-next"),s=document.querySelector("#total"),i=document.querySelector("#current"),c=document.querySelector(".offer__slider-wrapper"),a=document.querySelector(".offer__slider-inner"),d=window.getComputedStyle(c).width;a.style.width=100*n.length+"%",a.style.display="flex",a.style.transition="0.5s all",c.style.overflow="hidden",n.forEach((t=>{t.style.width=d})),o.style.position="relative";const y=document.createElement("ol"),u=[];y.classList.add("carousel-indicators"),y.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n      ",o.append(y);for(let t=0;t<n.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText=" box-sizing: content-box;\n          flex: 0 1 auto;\n          width: 30px;\n          height: 6px;\n          margin-right: 3px;\n          margin-left: 3px;\n          cursor: pointer;\n          background-color: #fff;\n          background-clip: padding-box;\n          border-top: 10px solid transparent;\n          border-bottom: 10px solid transparent;\n          opacity: .5;\n          transition: opacity .6s ease;",0==t&&(e.style.opacity=1),y.append(e),u.push(e)}n.length<10?(s.textContent=`0${n.length}`,i.textContent=`0${t}`):(s.textContent=n.length,i.textContent=t),l.addEventListener("click",(function(){0==e?e=+d.slice(0,d.length-2)*(n.length-1):e-=+d.slice(0,d.length-2),a.style.transform=`translateX(-${e}px)`,t===n.length?t=1:t++,n.length<10?i.textContent=`0${t}`:i.textContent=t,u.forEach((t=>t.style.opacity=".5")),u[t-1].style.opacity=1})),r.addEventListener("click",(function(){e===+d.slice(0,d.length-2)*(n.length-1)?e=0:e+=+d.slice(0,d.length-2),a.style.transform=`translateX(-${e}px)`,t===n.length?t=1:t++,n.length<10?i.textContent=`0${t}`:i.textContent=t,u.forEach((t=>t.style.opacity=".5")),u[t-1].style.opacity=1})),u.forEach((n=>{n.addEventListener("click",(n=>{const o=n.target.getAttribute("data-slide-to");t=o,e=+d.slice(0,d.length-2)*(t-1),a.style.transform=`translateX(-${e}px)`,i.textContent=t<10?`0${t}`:t,u.forEach((t=>t.style.opacity=".5")),u[t-1].style.opacity=1}))})),localStorage.setItem("numb",456),console.log(localStorage.getItem("numb")),localStorage.removeItem("numb"),localStorage.clear()}))}();
//# sourceMappingURL=bundle.js.map