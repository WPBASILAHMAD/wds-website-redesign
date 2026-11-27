(function(){
 const space=document.querySelector(".wds-sticky-header-space");const nav=space&&space.querySelector(".navbar.w-nav");if(!nav)return;
 function measure(){const rect=nav.getBoundingClientRect();if(rect.height>0)document.documentElement.style.setProperty("--wds-header-space",Math.ceil(rect.bottom)+"px");}
 measure();if("ResizeObserver" in window)new ResizeObserver(measure).observe(nav);window.addEventListener("resize",measure,{passive:true});
 document.querySelectorAll(".wds-sticky-header-space a[href],.footer a[href]").forEach(a=>{const h=a.getAttribute("href");if(h==="/"||h==="/about"){if(h===location.pathname){a.setAttribute("aria-current","page");a.classList.add("w--current");}}});
})();