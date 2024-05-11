import { dataContext } from "./dataContext";
import { useState } from "react";

function StateData ({children}){
    //tags
    const [idTag, setIdTag] = useState(1);
    const [tags, setTags] = useState([{id: 0, name:"General"}]);
    const postTag = (tag)=>{
        const newTag = {
            id:idTag,
            name: tag
        }
        setIdTag(idTag + 1);
        setTags([...tags, newTag ])
    }
    const putTag = (pId,value)=>{
        // const newTags = tags.find( tag => tag.id == pId)
        // newTags.name = value;
        const newTags = tags.map( (tag) =>{
            if(tag.id == pId){
                // console.log(tag);
                tag.name = value;
                console.log(tag.name);
            }
        })
    }
    const deleteTag = (pId)=>{
        const newTags= tags.filter(tag => tag.id != pId);
        setTags(newTags);
    }
    //paginas
    const [idLink, setIdLink] = useState(1);
    const [links, setLinks] = useState([]);
    const postLink = (link,url,category)=>{
        const newLink = {
            id: idLink,
            name: link,
            url: url,
            category: category
        }
        setIdLink(idLink + 1);
        setLinks([...links,newLink]);
        console.log(newLink);
        console.log(links);
    }
    return(
        <dataContext.Provider value={{tags, postTag,putTag,deleteTag,postLink}}>
           {children}
        </dataContext.Provider>
    )
}
export default StateData;