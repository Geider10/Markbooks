import { useContext} from "react";
import { FilterContext } from "../../../context/dataContext";
import Tag from "./Tag"
function SelectTag() {
    const {tags,changeTagLinks,changeTypeFilter,linksTag} = useContext(FilterContext);
    const addStyleTag = (e) => {
        window.document.querySelector(".tagLinkActive")?.classList.remove("tagLinkActive");
        e.target.classList.add("tagLinkActive");
    }
    const handleFilterTag = (e)=>{
        const filterName = "category"
        const tagName = e.target.textContent;
        changeTypeFilter(filterName)
        changeTagLinks(tagName)
        addStyleTag(e)
    }
    // console.log(linksTag);

    return (
        <div className="flex flex-wrap gap-x-4 gap-y-2 items-center px-6 sm:px-4 gap-x-2 justify-center ">
                {tags && tags.map(t => (
                    <Tag key={t.id} name={t.name} pId={t.id} click={handleFilterTag}  style={ linksTag == t.name? "tagLinkActive border-2 rounded-md px-1 cursor-default" : "border-2 rounded-md px-1 cursor-default"}/>
                ))}
        </div>
    )
}
export default SelectTag;