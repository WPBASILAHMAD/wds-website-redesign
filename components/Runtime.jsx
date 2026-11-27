"use client";
import {useEffect} from "react";
const core=["/wds/gsap.min.js","/wds/SplitText.min.js","/wds/ScrollTrigger.min.js","/wds/wds-native.js"];
const loaded=new Map();
function load(src){
  if(loaded.has(src))return loaded.get(src);
  const promise=new Promise((resolve,reject)=>{
    const script=document.createElement("script");
    script.src=src;script.async=false;
    script.onload=resolve;script.onerror=()=>reject(new Error("Failed to load "+src));
    document.body.appendChild(script);
  });
  loaded.set(src,promise);return promise;
}
let coreSequence;
export default function Runtime({scripts,sharedOnly=false}) {
  useEffect(()=>{
    if(!coreSequence)coreSequence=(async()=>{for(const src of core)await load(src);})();
    coreSequence.then(async()=>{
      for(const src of scripts)await load(src);
      if(window.gsap&&window.ScrollTrigger)window.ScrollTrigger.refresh();
      if(!sharedOnly)document.documentElement.dataset.wdsReady="true";
    }).catch(error=>console.error("[WDS]",error));
  },[scripts,sharedOnly]);
  return null;
}
