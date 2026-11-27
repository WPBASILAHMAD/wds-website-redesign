(function(){
"use strict";
const qa=(root,sel)=>Array.from(root.querySelectorAll(sel));
const reduce=matchMedia("(prefers-reduced-motion: reduce)");
let serial=0;
function activate(el,fn){if(!el)return;if(!/^(A|BUTTON)$/.test(el.tagName)){el.setAttribute("role","button");el.tabIndex=0;el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();fn(e);}});}el.addEventListener("click",fn);}
function run(){
 document.querySelectorAll(".w-tabs").forEach(root=>{
  const tabs=qa(root,".w-tab-link[data-w-tab]"),panes=qa(root,".w-tab-pane[data-w-tab]");if(!tabs.length)return;
  const menu=root.querySelector(".w-tab-menu");if(menu)menu.setAttribute("role","tablist");
  function select(tab,focus=false){tabs.forEach(t=>{const on=t===tab;t.classList.toggle("w--current",on);t.setAttribute("aria-selected",String(on));t.tabIndex=on?0:-1;});panes.forEach(p=>{const on=p.dataset.wTab===tab.dataset.wTab;p.classList.toggle("w--tab-active",on);p.hidden=!on;});if(focus)tab.focus();}
  tabs.forEach(t=>{const pane=panes.find(p=>p.dataset.wTab===t.dataset.wTab);t.id=t.id||"wds-tab-"+(++serial);t.setAttribute("role","tab");if(pane){pane.id=pane.id||"wds-panel-"+(++serial);pane.setAttribute("role","tabpanel");pane.setAttribute("aria-labelledby",t.id);t.setAttribute("aria-controls",pane.id);}
   t.addEventListener("click",e=>{e.preventDefault();select(t);});t.addEventListener("keydown",e=>{let i=tabs.indexOf(t);if(e.key==="ArrowRight"||e.key==="ArrowDown")i=(i+1)%tabs.length;else if(e.key==="ArrowLeft"||e.key==="ArrowUp")i=(i+tabs.length-1)%tabs.length;else if(e.key==="Home")i=0;else if(e.key==="End")i=tabs.length-1;else return;e.preventDefault();select(tabs[i],true);});});
  select(tabs.find(t=>t.classList.contains("w--current"))||tabs[0]);
 });
 const dropdowns=[];
 document.querySelectorAll(".w-dropdown").forEach(root=>{
  const toggle=root.querySelector(":scope > .w-dropdown-toggle"),list=root.querySelector(":scope > .w-dropdown-list");if(!toggle||!list)return;
  const faq=root.classList.contains("faq-list");let open=false;
  list.id=list.id||"wds-dropdown-"+(++serial);toggle.setAttribute("aria-controls",list.id);
  function set(on){open=on;toggle.setAttribute("aria-expanded",String(on));toggle.classList.toggle("w--open",on);list.classList.toggle("w--open",on);root.classList.toggle("wds-open",on);list.hidden=!on;}
  activate(toggle,e=>{e.preventDefault();if(!open&&!faq)dropdowns.forEach(d=>{if(d.root!==root&&!d.faq)d.set(false);});set(!open);});
  if(!faq&&root.dataset.hover==="true"){root.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse")set(true);});root.addEventListener("pointerleave",e=>{if(e.pointerType==="mouse")set(false);});}
  root.addEventListener("keydown",e=>{if(e.key==="Escape"&&open){set(false);toggle.focus();}});
  dropdowns.push({root,faq,set});set(false);
 });
 document.addEventListener("pointerdown",e=>dropdowns.forEach(d=>{if(!d.faq&&!d.root.contains(e.target))d.set(false);}));
 document.querySelectorAll(".w-nav").forEach(root=>{
  const menu=root.querySelector(".w-nav-menu"),button=root.querySelector(".w-nav-button");if(!menu||!button)return;const mobile=matchMedia("(max-width: 991px)");let open=false;
  menu.id=menu.id||"wds-menu-"+(++serial);button.setAttribute("aria-controls",menu.id);button.setAttribute("aria-label","Toggle navigation");
  function set(on){open=on&&mobile.matches;root.classList.toggle("wds-nav-open",open);button.classList.toggle("w--open",open);button.setAttribute("aria-expanded",String(open));if(!open)dropdowns.filter(d=>root.contains(d.root)&&!d.faq).forEach(d=>d.set(false));}
  activate(button,e=>{e.preventDefault();set(!open);});
  menu.addEventListener("click",e=>{if(e.target.closest("a[href]"))set(false);});document.addEventListener("pointerdown",e=>{if(open&&!root.contains(e.target))set(false);});root.addEventListener("keydown",e=>{if(e.key==="Escape"&&open){set(false);button.focus();}});if(mobile.addEventListener)mobile.addEventListener("change",()=>set(false));set(false);
 });
 document.querySelectorAll(".w-slider").forEach(root=>{
  const mask=root.querySelector(".w-slider-mask");if(!mask)return;
  const slides=qa(mask,":scope > .w-slide");if(!slides.length)return;
  let index=0,x=0;const left=root.querySelector(".w-slider-arrow-left"),right=root.querySelector(".w-slider-arrow-right");
  function render(){const offset=slides[index].offsetLeft-slides[0].offsetLeft;slides.forEach(slide=>{slide.style.transform="translateX("+(-offset)+"px)";});}
  function move(step){index=(index+step+slides.length)%slides.length;render();}
  if(left){left.setAttribute("aria-label","Previous slide");activate(left,e=>{e.preventDefault();move(-1);});}
  if(right){right.setAttribute("aria-label","Next slide");activate(right,e=>{e.preventDefault();move(1);});}
  mask.addEventListener("touchstart",e=>{x=e.changedTouches[0].clientX;},{passive:true});mask.addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-x;if(Math.abs(dx)>45)move(dx<0?1:-1);},{passive:true});
  window.addEventListener("resize",render,{passive:true});render();
 });
 // Use existing repeated groups; clone only when an export has a single group.
 document.querySelectorAll(".marquee-partner,.testimonials-bottom,.case-marquee,.integration-marquee:not(#wds-tech-marquee)").forEach(root=>{
  const groups=qa(root,":scope > .partner-logos,:scope > .testimonial-items,:scope > .case-items,:scope > .integration-items");if(!groups.length)return;
  if(groups.length===1){const clone=groups[0].cloneNode(true);clone.setAttribute("aria-hidden","true");qa(clone,"a,button,[tabindex]").forEach(el=>el.tabIndex=-1);root.append(clone);groups.push(clone);}
  const measure=()=>{const w=groups[1].offsetLeft-groups[0].offsetLeft;root.style.setProperty("--wds-loop-distance",Math.max(1,w||groups[0].getBoundingClientRect().width)+"px");};
  root.classList.add("wds-native-marquee");measure();if("ResizeObserver" in window)new ResizeObserver(measure).observe(groups[0]);window.addEventListener("resize",measure,{passive:true});
 });
 if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);}
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run,{once:true});else run();
})();