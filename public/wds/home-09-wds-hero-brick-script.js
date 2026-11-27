
(function(){
 const hero=document.querySelector(".section.home-hero");
 const field=hero&&hero.querySelector(".wds-hero-brick-field");
 if(!field)return;
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
 let bricks=[],raised=new Set(),frame=0,resizeFrame=0,pointer=null,lastW=0,lastH=0;
 const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
 function reset(){
  if(frame)cancelAnimationFrame(frame);frame=0;pointer=null;
  raised.forEach(b=>b.el.classList.remove("is-raised"));raised.clear();
 }
 function build(){
  resizeFrame=0;
  const w=field.clientWidth,h=field.clientHeight;
  if(w===lastW&&h===lastH)return;
  if(!w||!h)return;
  lastW=w;lastH=h;reset();bricks=[];
  const gap=7,bw=clamp(w/9,110,180),bh=bw*.60,stepX=bw+gap,stepY=bh+gap;
  field.style.setProperty("--brick-w",bw+"px");field.style.setProperty("--brick-h",bh+"px");
  const frag=document.createDocumentFragment();
  for(let row=0;row<Math.ceil(h/stepY)+1;row++){
   for(let x=-(row%2)*stepX/2-stepX/2;x<w;x+=stepX){
    const y=row*stepY-gap,el=document.createElement("span");el.className="wds-hero-brick";
    el.style.left=x+"px";el.style.top=y+"px";
    frag.appendChild(el);bricks.push({el,x:x+bw/2,y:y+bh/2});
   }
  }
  field.replaceChildren(frag);
 }
 function queueBuild(){if(!resizeFrame)resizeFrame=requestAnimationFrame(build);}
 function draw(){
  frame=0;if(!pointer||reduced.matches)return;
  const rect=field.getBoundingClientRect(),x=pointer.x-rect.left,y=pointer.y-rect.top;
  const radius=clamp(rect.width*.115,125,210),next=new Set();
  for(const b of bricks){
   const dx=x-b.x,dy=y-b.y,d=Math.hypot(dx,dy);
   if(d>=radius)continue;
   const strength=Math.pow(1-d/radius,1.35);
   b.el.style.setProperty("--brick-lift",(-6*strength).toFixed(2)+"px");
   b.el.style.setProperty("--brick-depth",(12*strength).toFixed(2)+"px");
   b.el.style.setProperty("--brick-rx",clamp(-dy/radius*8,-6,6).toFixed(2)+"deg");
   b.el.style.setProperty("--brick-ry",clamp(dx/radius*8,-6,6).toFixed(2)+"deg");
   b.el.classList.add("is-raised");next.add(b);
  }
  raised.forEach(b=>{if(!next.has(b))b.el.classList.remove("is-raised");});raised=next;
 }
 function move(e){
  if(reduced.matches||(e.pointerType!=="mouse"&&e.pointerType!=="pen"))return;
  pointer={x:e.clientX,y:e.clientY};
  if(!frame)frame=requestAnimationFrame(draw);
 }
 hero.addEventListener("pointermove",move,{passive:true});
 hero.addEventListener("pointerleave",reset);
 hero.addEventListener("pointercancel",reset);
 window.addEventListener("scroll",reset,{passive:true});
 window.addEventListener("blur",reset);
 document.addEventListener("visibilitychange",()=>{if(document.hidden)reset();});
 if(reduced.addEventListener)reduced.addEventListener("change",reset);
 if("ResizeObserver" in window)new ResizeObserver(queueBuild).observe(field);
 window.addEventListener("resize",queueBuild,{passive:true});
 build();
})();
