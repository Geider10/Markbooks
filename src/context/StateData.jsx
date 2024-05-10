import { dataContext } from "./dataContext";
import { useState } from "react";

function StateData ({children}){
    const [idTag, setIdTag] = useState(1);
    const [tags, setTags] = useState([{id: 0, name:"General"}]);
    const handleAddTag = (tag)=>{
        const newTag = {
            id:idTag,
            name: tag
        }
        setIdTag(idTag + 1);
        setTags([...tags, newTag ])
        console.log(tags);
    }
    return(
        <dataContext.Provider value={{tags, handleAddTag}}>
           {children}
        </dataContext.Provider>
    )
}
export default StateData;