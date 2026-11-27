
(function(){
 const stage=document.getElementById("wds-service-stage");if(!stage)return;
 const hub=stage.querySelector(".wds-channel-hub");
 const triggers=Array.from(stage.querySelectorAll(".wds-channel-trigger"));
 const cards=Array.from(stage.querySelectorAll("[data-service-card]"));
 let mode="none",selected=-1,pinned=false,opener=null,ignoreFocus=false;
 function setMode(next,index=-1,lock=false,source=null){
  mode=next;selected=index;pinned=lock;opener=source;
  stage.dataset.mode=mode;stage.dataset.side=mode==="single"?(index<3?"left":"right"):"none";
  hub.setAttribute("aria-expanded",String(mode==="all"));
  triggers.forEach(t=>t.setAttribute("aria-expanded",String(mode==="all"||(mode==="single"&&Number(t.dataset.serviceIndex)===index))));
  cards.forEach(c=>{c.hidden=!(mode==="all"||(mode==="single"&&Number(c.dataset.serviceCard)===index));});
 }
 function close(restore=false){
  const target=opener;setMode("none");
  if(restore&&target){ignoreFocus=true;target.focus({preventScroll:true});ignoreFocus=false;}
 }
 function focusLink(index){const card=cards.find(c=>Number(c.dataset.serviceCard)===index);if(card&&!card.hidden)card.querySelector("a").focus({preventScroll:true});}
 function bind(el,index){
  const next=index===-1?"all":"single";
  el.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse")setMode(next,index,false,el);});
  el.addEventListener("pointerleave",e=>{if(e.pointerType==="mouse"&&opener===el&&!pinned)close();});
  el.addEventListener("focus",()=>{if(!ignoreFocus&&el.matches(":focus-visible")&&!pinned)setMode(next,index,false,el);});
  el.addEventListener("click",e=>{
   if(pinned&&mode===next&&selected===index){close(false);return;}
   setMode(next,index,true,el);if(e.detail===0)focusLink(index===-1?0:index);
  });
  el.addEventListener("blur",e=>{if(!pinned&&opener===el&&!el.matches(":hover"))close();});
 }
 bind(hub,-1);triggers.forEach(t=>bind(t,Number(t.dataset.serviceIndex)));
 stage.addEventListener("wds:wheel-rewind",()=>close());
 stage.addEventListener("pointerleave",e=>{if(e.pointerType==="mouse")close();});
 stage.addEventListener("focusout",e=>{if(pinned&&e.relatedTarget&&!stage.contains(e.relatedTarget))close();});
 document.addEventListener("pointerdown",e=>{if(mode!=="none"&&!stage.contains(e.target))close();});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&mode!=="none"){e.preventDefault();close(stage.contains(document.activeElement));}});
 stage.querySelectorAll(".wds-service-learn").forEach(link=>link.addEventListener("click",e=>{
  const target=document.getElementById("wds-service-pricing");if(!target)return;
  e.preventDefault();
  const tab=Array.from(target.querySelectorAll(".pricing-tab[data-w-tab]")).find(t=>t.dataset.wTab===link.dataset.tab);
  close();if(tab)tab.click();
  target.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
  if(tab)tab.focus({preventScroll:true});
 }));
})();
