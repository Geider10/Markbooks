import { useContext,useState } from "react";
import { dataContext } from "../context/dataContext";
import Tag from "./Tag"
import Button from "./Button";
import Modal from "./Modal";
function RenderTag (){
    const {tags,handleAddTag} = useContext(dataContext);
    const [edit, setEdit] = useState(false);
    const [modal, setModal] = useState(false);
    const handleEditOn =()=> {
        setEdit(true);
        setModal(true)
    }
    const handleEditOff =()=>{ if(!modal) { setEdit(false);}};
    const handleModalOff =()=>{setModal(false)};
    //get && post of tag
    const [txt, setTxt] = useState("");
    const handleGetTxt=(e)=>{
        setTxt(e.target.value);
        console.log(txt);
    }
    const handleAddTags=()=>{
        handleAddTag(txt);
    }
    const handleTag = (e)=>{
        const nameTag = e.target.innerText;
        console.log(nameTag)
        if(edit){
            //sirve para filtrar las cartas
          
        }
        else{
            //sirve para editar los tag
        }
    }
   
   
    return (
        <>
            {tags&& tags.map(t =>(
                <Tag key={t.id} name={t.name} event={handleTag}/>
            ))}
            <Button name={!edit?"Agregar":"Guardar"} style="bg-green-400" click={!edit?handleEditOn:handleEditOff} />
            {
                modal && <Modal name="Etiqueta" close={handleModalOff} change={handleGetTxt} submit={handleAddTags}/>
            }
        </>
    )
}
export default RenderTag;