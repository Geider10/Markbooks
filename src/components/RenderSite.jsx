import { FilterContext } from "../context/dataContext";
import { useContext, useEffect, useState } from "react";

function RenderSite (){
    const {typeLink,links} = useContext(FilterContext);
    const [link,setLink]= useState([]);
    useEffect(()=>{
        // console.log("Se actualizo la lista de links");
        const filter = links.filter(l => l.category === "General")
        typeLink != null? setLink(typeLink): setLink(filter); 
    },[typeLink])
    return(
        <section>
            {link && link.map((l)=>(
                <p key={l.id}>{l.name}</p>
            ))}
        </section>
    )
}
export default RenderSite;