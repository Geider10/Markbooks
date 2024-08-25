import {FilterContext} from '../../../../context/dataContext';
import {useState,useContext, useEffect} from "react";
import {useParams} from 'react-router-dom';
import DetailCard from './DetailCard';

function ContentDetail(){
    const [ link, setLink] = useState(null)
    const {links} = useContext(FilterContext)
    const id = useParams().id//obtiene id dinamico del router app
    useEffect(()=>{
        const filterLink = links.find(l => l.id == id)
        setLink(filterLink)
    },[id])
    return (
        <div className="centerContent">
        {link && <DetailCard link={link}/>}
       </div>
    )
}
export default ContentDetail