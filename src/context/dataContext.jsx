import { createContext,useState,useEffect} from "react";
import tagModel from '../models/tag.model.json';
import linkModel from '../models/link.model.json';
import coloresList from '../models/colores.json';
//Este es el que tenemos que consumir
export const FilterContext = createContext();

//Este es el que nos provee de acceso al contexto
export const  FilterProvider= ({children})=>{
    const tagStorage = JSON.parse(window.localStorage.getItem("tags")) ||  tagModel  
    const [tags, setTags] = useState(tagStorage);

    const creatId = ()=>{
        let newId = window.crypto.randomUUID()
        return newId
    }  
    const postTag = (tagName)=>{
        const newTag = {
            id:creatId(),
            name: tagName
        }
        setTags([...tags, newTag ])
        localStorage.setItem("tags",JSON.stringify([...tags, newTag ]));
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
        setTags(newTags);
        localStorage.setItem("tags",JSON.stringify(newTags));
    }
    const deleteTag = (pId)=>{
        const newTags= tags.filter(tag => tag.id != pId);
        setTags(newTags);
        localStorage.setItem("tags",JSON.stringify(newTags));
    }
    //enlaces controller
    const linkStorage = JSON.parse(window.localStorage.getItem("links"))|| linkModel;
    const [links, setLinks] = useState(linkStorage);
    const [linksTag, setLinksTag] = useState("General");
    const [typeFilter, setTypeFilter] = useState("category")

    const createColor = ()=>{
        const lengthColores = coloresList.length
        const random = Math.floor(Math.random() * lengthColores)
        const newColor = coloresList[random].color
        return newColor
    }
    const createDate = ()=>{
        const date = new Date()
        const dateLocal =  date.toLocaleDateString()
        return dateLocal
    }
    const postLink = (link,url,category,description)=>{
        const newLink = {
            id: creatId(),
            name: link,
            url: url,
            category: category,
            description : description,
            color : createColor(),
            img : "",
            date : createDate()
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
    }
    const changeStar = (sid, starValue)=>{
        const link = links.find(l => l.id == sid)
        const updateLink = {...link,star : starValue}
        const filterLinks = links.filter(l => l.id != sid)
        filterLinks.push(updateLink)
        localStorage.setItem("links",JSON.stringify(filterLinks));
        setLinks(filterLinks)
    }
    const changeImage = (imgId, imgValue)=>{
        const link = links.find(l => l.id == imgId)
        const updateLink = {...link, img : imgValue}
        const filterLinks = links.filter(l => l.id != imgId)
        filterLinks.push(updateLink)
        console.log(filterLinks)
        //localstorage solo soport 5mb, se recomienda almacenar las imagenes en un servidor
        // localStorage.setItem('links',JSON.stringify(filterLinks))
        // setLinks(filterLinks)
    }
    return(
        <FilterContext.Provider value={{
            tags, postTag,putTag,deleteTag,
            links,postLink,putLink,deleteLink,changeStar,
            linksTag,changeTagLinks,
            typeFilter,changeTypeFilter,
            changeImage
            }}>
           {children}
        </FilterContext.Provider>
    )
}
