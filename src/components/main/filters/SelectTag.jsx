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
        <section className="flex justify-center items-center mx-8">
            <div className="flex gap-2 items-center">
                {tags && tags.map(t => (
                    <Tag key={t.id} name={t.name} pId={t.id} click={handleFilterTag}/>
                ))}
            </div>
        </section>
    )
}
export default SelectTag;