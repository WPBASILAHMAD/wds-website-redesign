import {SiteHeader,SiteFooter,SiteFilters} from "../components/SiteChrome";
import Runtime from "../components/Runtime";
import "./site-chrome.css";
export const metadata = {
  title: "Web Design Shop",
  description: "Website design, SEO and digital marketing for agencies and businesses.",
  icons: {icon:"/favicon.png",apple:"/favicon.png"}
};
export default function RootLayout({children}) {
  return <html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
    <link rel="stylesheet" href="/wds-site.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"/>
  </head><body><div className="page-wrapper"><div className="main-wrapper"><SiteHeader/>{children}<SiteFooter/></div></div><SiteFilters/><Runtime scripts={["/wds/site-header.js"]} sharedOnly/></body></html>;
}
