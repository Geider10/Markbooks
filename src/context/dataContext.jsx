import { createContext,useState,useEffect} from "react";
import tagModel from '../models/tag.model.json';
import linkModel from '../models/link.model.json';
//Este es el que tenemos que consumir
export const FilterContext = createContext();

//Este es el que nos provee de acceso al contexto
export const  FilterProvider= ({children})=>{
    const tagStorage = ()=>{
        return JSON.parse(window.localStorage.getItem("tags")) ||  tagModel;
    }  
    const [tags, setTags] = useState(tagStorage());
    useEffect(()=>{
        console.log("hola");
    },[])
    const creatId = ()=>{
        let newId = window.crypto.randomUUID()
        return newId
    }  
    const postTag = (tagName)=>{
        const newTag = {
            id:creatId(),
            name: tagName
        }
        localStorage.setItem("tags",JSON.stringify([...tags, newTag ]));
        setTags([...tags, newTag ])
    }
    const putTag = (tId,tagName)=>{
        const newTags = tags.map(tag =>{
            if(tag.id == tId){
                return{
                    ...tag,
                    name: tagName
                }
            }
            return tag;
        })
        localStorage.setItem("tags",JSON.stringify(newTags));
        setTags(tagStorage());
    }
    const deleteTag = (pId)=>{
        const newTags= tags.filter(tag => tag.id != pId);
        setTags(newTags);
        localStorage.setItem("tags",JSON.stringify(newTags));
        console.log(tags);
    }
    //paginas 
    const linkStorage = JSON.parse(window.localStorage.getItem("links"))|| linkModel;
    const [links, setLinks] = useState(linkStorage);
    const [linksTag, setLinksTag] = useState("General");
    const [typeFilter, setTypeFilter] = useState("category")
    const postLink = (link,url,category,description)=>{
        const newLink = {
            id: creatId(),
            name: link,
            url: url,
            category: category,
            description : description
        }
        localStorage.setItem("links",JSON.stringify([...links,newLink]));
        setLinks([...links,newLink]);
    }
    const putLink=(lId,name,url,category,description)=>{
        const newLinks = links.map(link =>{
            if(link.id == lId){
                return{
                    ...link,
                    name: name,
                    url: url,
                    category: category,
                    description: description
                }
            }
            return link;
        })
        localStorage.setItem("links",JSON.stringify(newLinks));
        setLinks(newLinks);
    }
    const deleteLink=(pId)=>{
        const newLinks = links.filter(link =>link.id != pId);
        localStorage.setItem("links",JSON.stringify(newLinks));
        setLinks(newLinks);
    }
    const changeTagLinks = (tagName) => {
        setLinksTag(tagName);
    }
    const changeTypeFilter=(filterName)=>{
        setTypeFilter(filterName)
        console.log(filterName);
    }
    const changeStar = (sid, starValue)=>{
        const link = links.find(l => l.id == sid)
        const newLink = {...link,star : starValue}
        const filterLink = links.filter(l => l.id != sid)
        filterLink.push(newLink)
        localStorage.setItem("links",JSON.stringify(filterLink));
        setLinks(filterLink)
    }
    return(
        <FilterContext.Provider value={{
            tags, postTag,putTag,deleteTag,
            links,postLink,putLink,deleteLink,changeStar,
            linksTag,changeTagLinks,typeFilter,changeTypeFilter}}>
           {children}
        </FilterContext.Provider>
    )
}
