import{e as C,c as h}from"./assets/izitoast-close-581d7fbd.js";/* empty css                      */import{f as p}from"./assets/vendor-77e16229.js";document.addEventListener("DOMContentLoaded",function(){const a=document.querySelector("[data-start]"),u=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),r=document.querySelector("[data-minutes]"),c=document.querySelector("[data-seconds]"),f=document.getElementById("datetime-picker");a.addEventListener("click",m),p("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(a.disabled=!0,iziToast.show({title:"Error",message:"Please choose a date in the future",class:"error-message",position:"topCenter",titleColor:"#ffffff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#ffffff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",icon:"",iconText:"",iconColor:"#ffffff",iconUrl:C,image:"",imageWidth:50,timeout:1e4,close:!1,buttons:[[`<button type="button" style="background-color: #EF4040"><img src=${h}></button>`,function(s,t){s.hide({transitionOut:"fadeOut"},t)}]],closeOnEscape:!0,pauseOnHover:!1})):a.disabled=!1}});function i(e){const l=Math.floor(e/864e5),s=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),t=Math.floor(e%(1e3*60*60)/(1e3*60)),n=Math.floor(e%(1e3*60)/1e3);u.textContent=o(l),d.textContent=o(s),r.textContent=o(t),c.textContent=o(n),isNaN(t)?r.textContent="00":r.textContent=o(t),isNaN(n)?c.textContent="00":c.textContent=o(n)}function m(){a.disabled=!0;const e=new Date(f.value),s=e-new Date;i(s);const t=setInterval(()=>{const n=e-new Date;n<=0?(clearInterval(t),i(0)):i(n)},1e3)}function o(e){return e<10?`0${e}`:e}});
//# sourceMappingURL=commonHelpers.js.map
