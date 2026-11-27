
(function(){
const root=document.getElementById("wds-growth-service-marquee");
if(!root)return;
const button=root.querySelector(".wds-growth-pause");
button.addEventListener("click",function(){
const paused=root.classList.toggle("is-paused");
button.setAttribute("aria-pressed",String(paused));
button.setAttribute("aria-label",paused?"Resume service scrolling":"Pause service scrolling");
});
})();
