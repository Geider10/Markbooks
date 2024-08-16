import RenderTag from "./RenderTag";
import RenderCard from "./RenderCard";
import Details from "./Details";
import Searching from "../filters/Searching"
function Home (){
   
    return(
        <>
        <Details/>
         <div className="flex justify-center">
         <Searching/>
         </div>
        <RenderTag/>
        <RenderCard/>
        {/* <Form/> */}
        </>
    )
}
export default Home;