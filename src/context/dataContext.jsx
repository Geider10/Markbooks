import { createContext,useState } from "react";
//Este es el que tenemos que consumir
export const FilterContext = createContext();

//Este es el que nos provee de acceso al contexto
export const  FilterProvider= ({children})=>{
    const categorias = [
        {id: 0, name: "General"},
        {id: 1, name: "Video"},
        {id: 2, name: "Red Social"},
        {id: 3, name: "Enciclopedia"},
        {id: 4, name: "Compras"}
    ];
    //tags
    const gen = [{id: 0, name:"General"}]
    const [idTag, setIdTag] = useState(1);
    const [tags, setTags] = useState(categorias);
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
    const paginasWeb = [
        {id: 0, name: "Google", url: "https://google.com", category: "General"},
        {id: 1, name: "YouTube", url: "https://youtube.com", category: "Video"},
        {id: 2, name: "Facebook", url: "https://facebook.com", category: "Red Social"},
        {id: 3, name: "Wikipedia", url: "https://wikipedia.org", category: "Enciclopedia"},
        {id: 4, name: "Amazon", url: "https://amazon.com", category: "Compras"},
        {id: 5, name: "Google", url: "https://google.com", category: "General"},
        {id: 6, name: "YouTube", url: "https://youtube.com", category: "Video"},
        {id: 7, name: "Facebook", url: "https://facebook.com", category: "Red Social"},
        {id: 8, name: "Wikipedia", url: "https://wikipedia.org", category: "Enciclopedia"},
        {id: 9, name: "Amazon", url: "https://amazon.com", category: "Compras"}
    ];    
    const [idLink, setIdLink] = useState(1);
    const [links, setLinks] = useState(paginasWeb);
    const [typeLink, setTypeLinks] = useState("");
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
        // setTypeLinks(newLinks);
        console.log(newLinks);
    }
    return(
        <FilterContext.Provider value={{tags, postTag,putTag,deleteTag,links,postLink,putLink,deleteLink,typeLink,filterLink}}>
           {children}
        </FilterContext.Provider>
    )
}
