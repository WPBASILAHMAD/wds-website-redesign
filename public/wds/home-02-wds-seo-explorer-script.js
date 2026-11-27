
(function(){
  const root=document.getElementById("wds-seo-explorer");
  if(!root)return;
  const items=[["Keyword Research","Identify relevant search terms and opportunities for your business."],["On-Page SEO","Optimize page content, headings and metadata for relevant searches."],["Technical SEO","Improve crawlability, indexing and website performance."],["Off-Page SEO","Build online authority through relevant links and outreach."],["Local SEO","Help nearby customers discover your business in local searches."],["Content Writing","Create helpful, search-friendly content for your audience."],["SEO Audits","Identify technical and content improvements that support search visibility."],["E-commerce SEO","Improve product and category visibility to help shoppers find your store."]];
  const range=root.querySelector("#wds-seo-range");
  const number=root.querySelector("#wds-seo-number");
  const title=root.querySelector("#wds-seo-title");
  const description=root.querySelector("#wds-seo-description");
  const ticks=root.querySelectorAll(".wds-seo-ticks span");
  function update(){
    const index=Math.max(0,Math.min(items.length-1,Number(range.value)-1));
    const item=items[index];
    number.textContent=String(index+1).padStart(2,"0");
    title.textContent=item[0];
    description.textContent=item[1];
    range.style.setProperty("--seo-fill", (index/(items.length-1)*100)+"%");
    range.setAttribute("aria-valuetext",(index+1)+" of "+items.length+": "+item[0]);
    ticks.forEach((tick,i)=>tick.classList.toggle("is-active",i===index));
  }
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
  let timer=0, paused=reduced.matches, visible=!window.IntersectionObserver, dragging=false;
  function schedule(){
    clearTimeout(timer);
    if(paused||!visible||document.hidden||dragging||range.matches(":hover")||document.activeElement===range)return;
    timer=setTimeout(function(){
      range.value=String(Number(range.value)%items.length+1);
      update();schedule();
    },3000);
  }
  function manual(){update();schedule();}
  range.addEventListener("input",manual);
  range.addEventListener("change",manual);
  ["pointerenter","focus"].forEach(e=>range.addEventListener(e,schedule));
  ["pointerleave","blur"].forEach(e=>range.addEventListener(e,()=>setTimeout(schedule,0)));
  range.addEventListener("pointerdown",()=>{dragging=true;schedule();});
  ["pointerup","pointercancel"].forEach(e=>window.addEventListener(e,()=>{if(dragging){dragging=false;schedule();}}));
  document.addEventListener("visibilitychange",schedule);
  if(reduced.addEventListener)reduced.addEventListener("change",e=>{paused=e.matches;schedule();});
  if(window.IntersectionObserver){
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();},{threshold:.15});
    observer.observe(root);
  }
  update();schedule();
})();
