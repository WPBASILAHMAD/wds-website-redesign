import DesignPage,{pageMetadata} from "../../components/DesignPage";
import page from "../../content/about.json";
export const metadata=pageMetadata(page);
export default function About(){return <DesignPage page={page}/>;}
