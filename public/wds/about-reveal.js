(function(){
 const root=document.getElementById("about-content");
 if(!root||!window.gsap||!window.ScrollTrigger||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
 gsap.registerPlugin(ScrollTrigger);
 root.querySelectorAll("[data-about-reveal]").forEach((el,i)=>{
  if(el.getBoundingClientRect().top<innerHeight*0.92)return;
  gsap.from(el,{y:28,opacity:0,duration:.72,delay:Math.min(i%4*.055,.165),ease:"power2.out",scrollTrigger:{trigger:el,start:"top 92%",once:true},clearProps:"opacity,transform"});
 });
 const orbit=root.querySelector(".wds-about-orbit");
 if(orbit)gsap.to(orbit,{rotate:18,ease:"none",scrollTrigger:{trigger:orbit,start:"top bottom",end:"bottom top",scrub:1}});
})();