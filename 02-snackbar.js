import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as t}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector(".form");a.addEventListener("submit",o=>{o.preventDefault();const s=o.target.delay.value,r=o.target.state.value;((e,i)=>new Promise((m,n)=>{setTimeout(()=>{i==="fulfilled"?m(e):n(e)},e)}))(s,r).then(e=>{console.log(e),t.success({position:"topCenter",backgroundColor:"#59A10D",messageColor:"white",icon:" ",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{t.error({position:"topCenter",backgroundColor:"#EF4040",messageColor:"white",icon:" ",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=02-snackbar.js.map
