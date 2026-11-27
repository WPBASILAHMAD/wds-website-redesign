
(function(){
 const hero=document.querySelector(".section.home-hero");
 if(!hero)return;
 const heading=hero.querySelector(".wds-hero-headline"),words=Array.from(hero.querySelectorAll(".wds-hero-word"));
 if(!heading||words.length!==4)return;
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
 let index=0,timer=0,visible=!window.IntersectionObserver;
 function schedule(){
  clearTimeout(timer);
  if(reduced.matches||!visible||document.hidden||heading.matches(":hover"))return;
  timer=setTimeout(function(){
   words[index].classList.remove("is-active");
   index=(index+1)%words.length;
   words[index].classList.add("is-active");
   schedule();
  },2800);
 }
 heading.addEventListener("pointerenter",schedule);
 heading.addEventListener("pointerleave",()=>setTimeout(schedule,0));
 document.addEventListener("visibilitychange",schedule);
 if(reduced.addEventListener)reduced.addEventListener("change",schedule);
 if(window.IntersectionObserver){const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();},{threshold:.1});observer.observe(heading);}
 schedule();
})();
