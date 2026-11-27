
(function(){
 const track=document.getElementById("wds-wheel-scroll-track");
 const stage=document.getElementById("wds-service-stage");
 if(!track||!stage)return;
 const petals=Array.from(stage.querySelectorAll(".wds-channel-rotor > g > path"));
 const markers=Array.from(stage.querySelectorAll(".wds-channel-markers > g > circle"));
 const labels=Array.from(stage.querySelectorAll(".wds-channel-trigger"));
 const center=stage.querySelector(".wds-wheel-center");
 const rings=Array.from(center?center.querySelectorAll(".wds-wheel-layer"):[]);
 const hub=stage.querySelector(".wds-channel-hub");
 const diagram=stage.querySelector(".wds-channel-diagram");
 const hint=stage.querySelector(".wds-service-hint");
 if(petals.length!==6||markers.length!==6||labels.length!==6||!center||rings.length!==4||!hub||!hint||!diagram)return;
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
 const order=[5,0,1,2,3,4];
 const ringSequence=[{name:"white",start:.08,from:39,to:50},{name:"light-orange",start:.16,from:49,to:61},{name:"light-red",start:.24,from:60,to:72},{name:"red",start:.32,from:71,to:88}];
 const ringByName=new Map(rings.map(el=>[el.dataset.layer,el]));
 const clamp=x=>Math.max(0,Math.min(1,x));
 const smooth=x=>{x=clamp(x);return x*x*(3-2*x);};
 const around=s=>"translate(240 260) scale("+s.toFixed(4)+") translate(-240 -260)";
 let frame=0,last=-1,keyboardOverride=false,target=0,current=0,initialized=false;
 function paint(p){
  if(p===last)return;
  last=p;
  const state=p>=1?"complete":"running";
  if(stage.dataset.scrollReveal!==state){
   stage.dataset.scrollReveal=state;
   if(state==="running")stage.dispatchEvent(new Event("wds:wheel-rewind"));
  }
  if(p>=1){
   petals.concat(markers).forEach(el=>{el.removeAttribute("transform");el.removeAttribute("opacity");});
   center.removeAttribute("transform");
   ringSequence.forEach(layer=>{const el=ringByName.get(layer.name);el.setAttribute("r",String(layer.to));el.removeAttribute("opacity");});
   labels.forEach(el=>{el.style.removeProperty("opacity");el.style.removeProperty("visibility");});
   hub.style.removeProperty("transform");diagram.style.removeProperty("scale");hint.style.removeProperty("opacity");
   return;
  }
  // Reveal the logo first, then build concentric layers outward beneath it.
  const logoGrow=smooth(p/.13);
  const scale=.78+.22*logoGrow;
  ringSequence.forEach(layer=>{
   const el=ringByName.get(layer.name),t=smooth((p-layer.start)/.12);
   el.setAttribute("r",(layer.from+(layer.to-layer.from)*t).toFixed(3));
   el.setAttribute("opacity",t.toFixed(3));
  });
  hub.style.transform="translate(-50%,-50%) scale("+scale.toFixed(4)+")";
  diagram.style.scale=(.86+.14*smooth(p)).toFixed(4);
  order.forEach((petalIndex,i)=>{
   const start=.44+i*.065;
   const local=smooth((p-start)/.20),alpha=smooth((p-start)/.13);
   const shape=petals[petalIndex];
   const t=around(.16+.84*local);
   shape.setAttribute("transform",t);shape.setAttribute("opacity",alpha.toFixed(3));
  });
 }
 function measure(){
  frame=0;
  if(reduced.matches||keyboardOverride){current=target=1;paint(1);return;}
  const vh=window.innerHeight||document.documentElement.clientHeight;
  const rect=track.getBoundingClientRect(),style=getComputedStyle(track),stageStyle=getComputedStyle(stage);
  const sticky=stageStyle.position==="sticky";
  const padTop=parseFloat(style.paddingTop)||0,padBottom=parseFloat(style.paddingBottom)||0;
  if(sticky){
   const pinTop=parseFloat(stageStyle.top)||0;
   // Start just before the stage settles below the header; finish before the runway ends.
   const start=pinTop-padTop+Math.min(72,vh*.10);
   const distance=Math.max(160,padBottom*.73);
   target=clamp((start-rect.top)/distance);
  }else{
   const start=vh*.90,end=Math.max(vh*.27,(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--wds-header-space"))||80)+24);
   target=clamp((start-rect.top)/Math.max(1,start-end));
  }
  if(!initialized){current=target;initialized=true;}else current+=(target-current)*.19;
  if(Math.abs(target-current)<.002)current=target;
  paint(current);
  if(current!==target)frame=requestAnimationFrame(measure);
 }
 function queue(){if(!frame)frame=requestAnimationFrame(measure);}
 stage.addEventListener("focusin",function(e){
  if(e.target.matches(":focus-visible")){keyboardOverride=true;paint(1);}
 },true);
 stage.addEventListener("focusout",function(e){
  if(!stage.contains(e.relatedTarget)){keyboardOverride=false;queue();}
 });
 if(reduced.addEventListener)reduced.addEventListener("change",queue);
 window.addEventListener("scroll",queue,{passive:true});
 window.addEventListener("resize",queue,{passive:true});
 measure();
})();
