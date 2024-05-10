import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import Tag from "./Tag"
function RenderTag (){
    const {tags, handleAddTag} = useContext(dataContext);

    return (
        <>
            {tags&& tags.map(t =>(
                <Tag key={t.id} name={t.name} />
            ))}

        </>
    )
}
export default RenderTag;