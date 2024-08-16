import RenderTag from "./RenderTag";
import RenderCard from "./RenderCard";
import Details from "./Details";
import Searching from "../filters/Searching"
function Home (){
   
    return(
        <>
        <Details/>
         <div className="flex flex-col items-center gap-4 mb-4">
         <Searching/>
         <RenderTag/>
         </div>
       
        <RenderCard/>
        {/* <Form/> */}
        </>
    )
}
export default Home;