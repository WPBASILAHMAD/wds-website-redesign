
(function(){
 const menu=document.querySelector("#wds-service-pricing .pricing-tabs-menu");
 if(!menu)return;
 menu.querySelectorAll(".pricing-tab[data-w-tab]").forEach(function(tab){
  tab.addEventListener("pointerenter",function(e){
   if(e.pointerType==="mouse"&&!tab.classList.contains("w--current"))tab.click();
  });
 });
})();
