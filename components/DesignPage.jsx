import Runtime from "./Runtime";
export function pageMetadata(page) {
  return {title:page.title,description:page.description,openGraph:{title:page.title,description:page.description,type:"website"},twitter:{card:"summary_large_image",title:page.title,description:page.description}};
}
// The approved markup is trusted repository content, never user input.
// Keep the original DOM and class names during the visual-parity migration.
export default function DesignPage({page}) {
  return <>
    {page.styles && <style dangerouslySetInnerHTML={{__html:page.styles}}/>}
    <div style={{display:"contents"}} dangerouslySetInnerHTML={{__html:page.body}}/>
    <link rel="stylesheet" href="/wds-growth-channels.css"/>
    <Runtime scripts={page.scripts}/>
  </>;
}
