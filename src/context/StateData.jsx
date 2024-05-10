import { dataContext } from "./dataContext";
import { useState } from "react";

function StateData ({children}){
    const [tags, setTags] = useState([{id: 1, name:"General"}]);
    const handleAddTag = (tag)=>{
        setTags([...tags, tag ])
    }
    return(
        <dataContext.Provider value={{tags, handleAddTag}}>
           {children}
        </dataContext.Provider>
    )
}
export default StateData;