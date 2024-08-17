import {FilterContext} from "../../../context/dataContext"
import {useState ,useContext,useEffect} from "react"
function Searching (){
    const {changeTagLinks,changeTypeFilter,typeFilter} = useContext(FilterContext);
    const [keyword, setKeyword] = useState("");
    useEffect(()=>{
        typeFilter == "category" &&  setKeyword("")
    },[typeFilter])
    const handleText =(e)=>{
        const word = e.target.value
        setKeyword(word)
    }
    const handleSearch =()=>{
        const filterName="search"
        changeTypeFilter(filterName)
        changeTagLinks(keyword)
    }
    return(
        <div className="w-64 flex gap-4" >
            <input type="search"
                className="inputText"
                onChange={handleText}
                value = {keyword}
                placeholder="Name the link..."
            />
            <button onClick={handleSearch} className="rounded-md p-1 cursor-pointer backOne text-gray-700">Buscar </button>
        </div>
    )
}
export default Searching;