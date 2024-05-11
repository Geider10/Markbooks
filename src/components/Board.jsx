import Button from "./Button"
import Modal from "./Modal";
import { useState, useContext,useEffect} from "react";
import { dataContext } from "../context/dataContext";
function Board (){
    const {tags,postLink} = useContext(dataContext);
    const [modal,setModal] = useState(false)
    const handleModalOn = ()=> { setModal(true)}
    const handleModalOff = ()=> { setModal(false)}

    
    const [value, setValue] = useState("")
    const [url, setUrl] = useState("")
    // const [category, setCategory] = useState("");
    const handleGetValue =(e)=>{
        setValue(e.target.value);
        console.log(value);
    }
    const handleGetUrl =(e)=>{
        setUrl(e.target.value);
        console.log(url);
    }
    const handleCategory = ()=>{
        // setCategory(e.target.innerText);
        // const cate = e.target;
        // console.log("cate: "+cate);
    }
    const handlePostLink = ()=>{
        postLink(value,url,"General");
        handleModalOff();
    }
    return(
        <>
        <Button name="Agregar" click={handleModalOn} style="bg-green-400" read={false}/>
        {modal && 
            <Modal name="Pagina" btnName="Crear" change={handleGetValue} changeUrl={handleGetUrl} close={handleModalOff} submit={handlePostLink} url={true} >
                <select>
                    {tags&& tags.map(t=>(
                        <option key={t.id}>{t.name}</option>
                    ))}
                </select>
            </Modal>}
        {/* titulo
        button "para abrir modal"
        modal "nombre, url, img, category" formulario
        tablero "nombre bEdit, bDelete" CRUD */}
        
        </>
    )
}
export default Board