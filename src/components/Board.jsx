import Title from "./Title"
import Button from "./Button"
import Modal from "./Modal";
import { useState } from "react";
function Board (){
    const handleAdd= ()=>{
        alert("agregue pagina");
    }
    const [open,setOpen] = useState(false)
    const handleOpen = ()=> { setOpen(true)}
    const handleClose = ()=> { setOpen(false)}

    return(
        <>
        <Title name = "Board"/>
        <Button name="Agregar" event={handleOpen} style="bg-green-400"/>
        {open && <Modal event={handleClose}/>}
        {/* titulo
        button "para abrir modal"
        modal "nombre, url, img, category" formulario
        tablero "nombre bEdit, bDelete" CRUD */}
        </>
    )
}
export default Board