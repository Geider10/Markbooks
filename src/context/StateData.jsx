import { dataContext } from "./dataContext";
import { useState } from "react";

function StateData ({children}){
    const [idTag, setIdTag] = useState(1);
    const [tags, setTags] = useState([{id: 0, name:"General"}]);
    const postTag = (tag)=>{
        const newTag = {
            id:idTag,
            name: tag
        }
        setIdTag(idTag + 1);
        setTags([...tags, newTag ])
        console.log(tags);
    }
    const putTag = (pId,value)=>{
        const newTags = tags.map( tag => {
            if(tag.id === pId){
                return {
                    ...tag,
                    name: value
                }
            }
            return tag
        })
    }
    const deleteTag = (pId)=>{
        const newTags= tags.filter(tag => tag.id !== pId);
        setTags(newTags);
    }
    return(
        <dataContext.Provider value={{tags, postTag}}>
           {children}
        </dataContext.Provider>
    )
}
export default StateData;