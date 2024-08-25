import {FilterContext} from '../../../../context/dataContext';
import {useState,useContext, useEffect} from "react";
import {useParams} from 'react-router-dom';
import DetailCard from './DetailCard';
import Path from '../../form/Path';
import ArrowLeft from '../../../../icons/ArrowLeft';
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
        {/* <Path path={"/enlaces"} name={<ArrowLeft/>} style={"py-1 px-2 rounded-md relative right-64  bottom-4 backOne text-gray-700"}/> */}
        {link && <DetailCard link={link}/>}
       </div>
    )
}
export default ContentDetail