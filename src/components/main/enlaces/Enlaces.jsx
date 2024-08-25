import RenderCard from './RenderCard';
import Searching from '../filters/Searching';
import SelectTag from '../filters/SelectTag';
function Enlaces (){
    return(
        <>
            <div className="flex flex-col items-center gap-4 mt-12 sm:mt-8">
                <Searching/>
                <SelectTag/>
            </div>
            <RenderCard/>
        </>
    )
}
export default Enlaces