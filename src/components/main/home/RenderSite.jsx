import { FilterContext } from "../../../context/dataContext";
import { useContext, useEffect, useState } from "react";
import Site from "./Site"
function RenderSite (){
    const {typeLink,links} = useContext(FilterContext);
    const [link,setLink]= useState([]);
    useEffect(()=>{
        const filter = links.filter(l => l.category === "General")
        typeLink != null? setLink(typeLink): setLink(filter); 
    },[typeLink])
    return(
        <section className="cardCenter" >
            {link && link.map((l)=>(
                <Site key={l.id} value={l.name} url={l.url} category={l.category} id={l.id} star={l.star}/>
            ))}
        </section>
    )
}
export default RenderSite;