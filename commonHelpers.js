import{e as b,c as D}from"./assets/izitoast-close-581d7fbd.js";/* empty css                      */import{f as E}from"./assets/vendor-77e16229.js";document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector("[data-start]"),i=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),d=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]"),f=document.getElementById("datetime-picker");E("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(o.disabled=!0,iziToast.show({title:"Error",message:"Please choose a date in the future",class:"error-message",position:"topCenter",titleColor:"#ffffff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#ffffff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",icon:"",iconText:"",iconColor:"#ffffff",iconUrl:b,image:"",imageWidth:50,timeout:1e4,close:!1,buttons:[[`<button type="button" style="background-color: #EF4040"><img src=${D}></button>`,function(t,n){t.hide({transitionOut:"fadeOut"},n)}]],closeOnEscape:!0,pauseOnHover:!1})):o.disabled=!1}});function c(e){const{days:r,hours:t,minutes:n,seconds:s}=h(e);i.textContent=a(r),u.textContent=a(t),d.textContent=a(n),l.textContent=a(s)}function m(){o.disabled=!0;const e=new Date(f.value),t=e-new Date;c(t);const n=setInterval(()=>{const s=e-new Date;s<=0?(clearInterval(n),c(0),o.disabled=!1):c(s)},1e3)}function a(e){return e<10?`0${e}`:e}function h(e){const y=Math.floor(e/864e5),g=Math.floor(e%864e5/36e5),p=Math.floor(e%36e5/6e4),C=Math.floor(e%6e4/1e3);return{days:y,hours:g,minutes:p,seconds:C}}o.addEventListener("click",m)});
//# sourceMappingURL=commonHelpers.js.map
