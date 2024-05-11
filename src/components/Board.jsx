import Button from "./Button"
import Modal from "./Modal";
import { useState, useContext,useEffect} from "react";
import { dataContext } from "../context/dataContext";
function Board (){
    const {tags} = useContext(dataContext);
    const [ta, setTa] = useState([]);
    const [open,setOpen] = useState(false)
    const handleOpen = ()=> { setOpen(true)}
    const handleClose = ()=> { setOpen(false)}

    useEffect(()=>{
        setTa(tags);
    },[tags])
    return(
        <>
        <Button name="Agregar" click={handleOpen} style="bg-green-400" read={false}/>
        {open && 
            <Modal name="Pagina" btnName="Crear" close={handleClose} url={true}>
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