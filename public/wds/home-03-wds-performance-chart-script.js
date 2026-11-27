
(function(){
  const chart=document.getElementById("wds-performance-chart");
  if(!chart)return;
  const value=chart.querySelector("#wds-performance-value");
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame=0, timer=0, hasPlayed=false;
  function finish(){
    cancelAnimationFrame(frame);clearTimeout(timer);
    chart.classList.remove("is-animating");value.textContent="+102%";
  }
  function play(){
    if(hasPlayed)return;
    hasPlayed=true;
    if(reduced.matches){finish();return;}
    chart.classList.add("is-animating");
    const start=performance.now(),duration=1600;
    value.textContent="+0%";
    function tick(now){
      if(reduced.matches){finish();return;}
      const p=Math.min(1,Math.max(0,(now-start)/duration));
      value.textContent="+"+Math.round(102*(1-Math.pow(1-p,3)))+"%";
      if(p<1)frame=requestAnimationFrame(tick);
    }
    frame=requestAnimationFrame(tick);
    timer=setTimeout(finish,2600);
  }
  // Cursor brush: fill columns in a short wave without changing the illustrative statistic.
  const grid=chart.querySelector(".wds-performance-grid");
  if(grid){
    const columns=Array.from(grid.querySelectorAll(".wds-dot-column"));
    let brushFrame=0, cursorX=0, active=new Set();
    function clearBrush(){
      cancelAnimationFrame(brushFrame);brushFrame=0;
      active.forEach(col=>col.classList.remove("is-cursor-filled","is-cursor-edge"));
      active.clear();
    }
    function drawBrush(){
      brushFrame=0;
      const rect=grid.getBoundingClientRect();
      const visible=columns.filter(col=>col.offsetWidth>0);
      if(!visible.length||!rect.width){clearBrush();return;}
      const index=Math.max(0,Math.min(visible.length-1,Math.floor((cursorX-rect.left)/rect.width*visible.length)));
      const next=new Set();
      for(let i=Math.max(0,index-4);i<=Math.min(visible.length-1,index+4);i++){
        const col=visible[i],edge=Math.abs(i-index)>2;
        next.add(col);
        col.classList.toggle("is-cursor-filled",!edge);
        col.classList.toggle("is-cursor-edge",edge);
      }
      active.forEach(col=>{if(!next.has(col))col.classList.remove("is-cursor-filled","is-cursor-edge");});
      active=next;
    }
    function move(e){
      if(e.pointerType!=="mouse"&&e.pointerType!=="pen")return;
      if(reduced.matches)return;
      if(chart.classList.contains("is-animating")||!hasPlayed){hasPlayed=true;finish();}
      cursorX=e.clientX;
      if(!brushFrame)brushFrame=requestAnimationFrame(drawBrush);
    }
    grid.addEventListener("pointerenter",move);
    grid.addEventListener("pointermove",move,{passive:true});
    grid.addEventListener("pointerleave",clearBrush);
    grid.addEventListener("pointercancel",clearBrush);
    window.addEventListener("resize",clearBrush,{passive:true});
    if(reduced.addEventListener)reduced.addEventListener("change",clearBrush);
  }
  if("IntersectionObserver" in window){
    const observer=new IntersectionObserver(function(entries){
      if(entries.some(function(e){return e.isIntersecting;})){observer.disconnect();play();}
    },{threshold:.25});
    observer.observe(chart);
  }else{play();}
  if(reduced.addEventListener)reduced.addEventListener("change",function(e){if(e.matches)finish();});
})();
