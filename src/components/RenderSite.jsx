import { FilterContext } from "../context/dataContext";
import { useContext, useEffect, useState } from "react";

function RenderSite (){
    const {typeLink} = useContext(FilterContext);
    const [link,setLink]= useState([]);
    useEffect(()=>{
        // console.log("Se actualizo la lista de links");
        setLink(typeLink);
    },[] )
    return(
        <section>
            {link && link.map((l)=>(
                <p key={l.id}>{l.name}</p>
            ))}
        </section>
    )
}
export default RenderSite;