import chrome from "../content/site-chrome.json";
export function SiteHeader(){return <div style={{display:"contents"}} dangerouslySetInnerHTML={{__html:chrome.header}}/>;}
export function SiteFooter(){return <div style={{display:"contents"}} dangerouslySetInnerHTML={{__html:chrome.footer}}/>;}
export function SiteFilters(){return <div style={{display:"contents"}} dangerouslySetInnerHTML={{__html:chrome.filters}}/>;}
