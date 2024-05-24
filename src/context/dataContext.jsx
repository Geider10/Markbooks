import { createContext,useEffect,useState } from "react";
import { json } from "react-router-dom";
//Este es el que tenemos que consumir
export const FilterContext = createContext();

//Este es el que nos provee de acceso al contexto
export const  FilterProvider= ({children})=>{
    const categorias = [
        {id: 0, name: "General"},
        {id: 1, name: "Video"},
        {id: 2, name: "Red Social"}
    ];
    //tags
    const t =  JSON.parse(window.localStorage.getItem("tags")) || [];
    const gen = [{id: 0, name:"General"}]
    const [tags, setTags] = useState(t);
    const length = tags.length;
    const [idTag, setIdTag] = useState(length);
    const postTag = (tag)=>{
        const newTag = {
            id:idTag,
            name: tag
        }
        setIdTag(idTag + 1);
        setTags([...tags, newTag ])
        localStorage.setItem("tags",JSON.stringify([...tags, newTag ]));
    }

    const putTag = (pId,value)=>{
        const newTags = tags.map(tag =>{
            if(tag.id == pId){
                return{
                    ...tag,
                    name: value
                }
            }
            return tag;
        })
        console.log(newTags);
        setTags(newTags);
        localStorage.setItem("tags",JSON.stringify(newTags));
    }
    const deleteTag = (pId)=>{
        const newTags= tags.filter(tag => tag.id != pId);
        setTags(newTags);
        localStorage.setItem("tags",JSON.stringify(newTags));
    }
    //paginas
    const paginasWeb = [
        {id: 0, name: "Google", url: "https://google.com", category: "General", star: false},
        {id: 1, name: "YouTube", url: "https://youtube.com", category: "Video", star: false},
        {id: 3, name: "Facebook", url: "https://facebook.com", category: "Red Social", star: false},
        {id: 4, name: "Google", url: "https://google.com", category: "General", star: false},
        {id: 5, name: "YouTube", url: "https://youtube.com", category: "Video", star: false},
        {id: 6, name: "Facebook", url: "https://facebook.com", category: "Red Social", star: false},
    ];    
    const [idLink, setIdLink] = useState(1);
    const [links, setLinks] = useState(paginasWeb);
    const [typeLink, setTypeLinks] = useState();
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
    const filterLink = (pCategory) => {
        const newLinks = links.filter(link => link.category === pCategory);
        setTypeLinks(newLinks);
    }
    const changeStar = (pid, value)=>{
        links.map(link => {
            if(link.id == pid){
                link.star = value;
                // console.log(link);
            }
        })
        console.log(links)
    }
    return(
        <FilterContext.Provider value={{tags, postTag,putTag,deleteTag,links,postLink,putLink,deleteLink,typeLink,filterLink,changeStar}}>
           {children}
        </FilterContext.Provider>
    )
}
