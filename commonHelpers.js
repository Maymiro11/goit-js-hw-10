import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h}from"./assets/vendor-4daf66c6.js";const g="/goit-js-hw-10/assets/izitoast-icon-172762f2.svg",p="/goit-js-hw-10/assets/izitoast-close-b4fe742b.svg";document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector("[data-start]"),r=document.querySelector("[data-days]"),i=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),u=document.querySelector("[data-seconds]"),d=document.getElementById("datetime-picker");s.addEventListener("click",f),h("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(s.disabled=!0,iziToast.show({title:"Error",message:"Please choose a date in the future",class:"error-message",position:"topCenter",titleColor:"#ffffff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#ffffff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",icon:"",iconText:"",iconColor:"#ffffff",iconUrl:g,image:"",imageWidth:50,timeout:1e4,close:!1,buttons:[[`<button type="button" style="background-color: #EF4040"><img src=${p}></button>`,function(t,o){t.hide({transitionOut:"fadeOut"},o)}]],closeOnEscape:!0,pauseOnHover:!1})):s.disabled=!1}});function c(e){const a=Math.floor(e/864e5),t=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),o=Math.floor(e%(1e3*60*60)/(1e3*60)),m=Math.floor(e%(1e3*60)/1e3);r.textContent=n(a),i.textContent=n(t),l.textContent=n(o),u.textContent=n(m)}function f(){const e=new Date(d.value),t=e-new Date;c(t),setInterval(()=>{const o=e-new Date;c(o)},1e3)}function n(e){return e<10?`0${e}`:e}});
//# sourceMappingURL=commonHelpers.js.map
