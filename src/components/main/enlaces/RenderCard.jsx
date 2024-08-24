import { FilterContext } from "../../../context/dataContext";
import { useContext, useEffect, useState } from "react";
import Card from "./Card"
import NoCard from './NoCard';
function RenderSite (){
    const {typeFilter,linksTag,links} = useContext(FilterContext);
    const [link,setLink]= useState([]);
    useEffect(()=>{
        if(typeFilter == "category"){
            const filterGeneral = links.filter(l => l.category == "General")
            const filterCategory = links.filter(l => l.category == linksTag)
            !linksTag? setLink(filterGeneral): setLink(filterCategory); 
        }
        else if(typeFilter == "search"){
            const filterKeyword = links.filter(l => l.name.toLowerCase().includes(linksTag.toLowerCase()))
            setLink(filterKeyword)
        }
    },[typeFilter,linksTag])
    return(
      <div className="flex justify-center mb-12 sm:mb-8">
            <section className=" max-w-[800px] flex flex-wrap justify-center gap-4  " >
            {link && link.map((l)=>(
                <Card key={l.id} value={l.name} url={l.url} category={l.category} id={l.id} star={l.star} img={l.img} color={l.color}/>
            ))}
            {link.length <= 0 && <NoCard/> }
            </section>
      </div>
    )
}
export default RenderSite;