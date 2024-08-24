import { useContext} from "react";
import { FilterContext } from "../../../context/dataContext";
import Tag from "./Tag"
function SelectTag() {
    const {tags,changeTagLinks,changeTypeFilter} = useContext(FilterContext);
    const handleFilterTag = (e)=>{
        const filterName = "category"
        const tagName = e.target.textContent;
        changeTypeFilter(filterName)
        changeTagLinks(tagName)
    }
    return (
        <div className="flex flex-wrap gap-x-4 gap-y-2 items-center px-6 sm:px-4 gap-x-2 justify-center ">
                {tags && tags.map(t => (
                    <Tag key={t.id} name={t.name} pId={t.id} click={handleFilterTag}/>
                ))}
        </div>
    )
}
export default SelectTag;