import { useState,useContext, useEffect} from "react";
import {useParams} from 'react-router-dom';
import DetailCard from './DetailCard';
import {FilterContext} from '../../../context/dataContext';
function ContentDetail(){
    const [ link, setLink] = useState(null)
    const {links} = useContext(FilterContext)
    const id = useParams().id
    useEffect(()=>{
        const filterLink = links.find(l => l.id == id)
        setLink(filterLink)
    },[id])
    return (
        <div>
           {link && <DetailCard link={link}/>}
        </div>
    )
}
export default ContentDetail