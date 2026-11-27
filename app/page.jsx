import DesignPage,{pageMetadata} from "../components/DesignPage";
import page from "../content/home.json";
export const metadata=pageMetadata(page);
export default function Home(){return <DesignPage page={page}/>;}
