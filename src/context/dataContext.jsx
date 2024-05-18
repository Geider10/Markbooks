import { createContext,useState } from "react";
//Este es el que tenemos que consumir
export const FilterContext = createContext();

//Este es el que nos provee de acceso al contexto
export const  FilterProvider= ({children})=>{
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
        tags.map( (tag) =>{
            if(tag.id == pId){
                tag.name = value;
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
    }
    const putLink=(pId,link,url,category)=>{
        links.map(l =>{
            if(l.id == pId){
                l.name = link;
                l.url = url;
                l.category = category;
            }
        })
    }
    const deleteLink=(pId)=>{
        const newLinks = links.filter(link =>link.id != pId);
        setLinks(newLinks);
    }
    return(
        <FilterContext.Provider value={{tags, postTag,putTag,deleteTag,links,postLink,putLink,deleteLink}}>
           {children}
        </FilterContext.Provider>
    )
}
