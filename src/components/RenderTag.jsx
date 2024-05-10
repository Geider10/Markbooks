import { useContext,useState } from "react";
import { dataContext } from "../context/dataContext";
import Tag from "./Tag"
import Button from "./Button";
import Modal from "./Modal";
function RenderTag (){
    const {tags,postTag,putTag} = useContext(dataContext);
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
        postTag(txt);
    }
    //put &&delete
    const [putOn, setPutOn] = useState(false);
    const [deleteOn,setDeleteOn] = useState(false);
    const [tagValue, setTagValue] = useState("");
    const [tagId, setTagId] = useState(0);

    const handleTag = (e)=>{
        const value = e.target.innerText;
        const id = e.target.id;
        setTagValue(value);
        setTagId(id);  
        setPutOn(true);
        console.log(tagValue,tagId);
    }
    const handlePutTag = () =>{
        setModal(true);
        console.log("Open modal")
    }
   
    return (
        <>
            {tags&& tags.map(t =>(
                <Tag key={t.id} name={t.name} event={handleTag} id={t.id}/>
            ))}
                <Button name={!edit?"Abrir":"Cerrar"} style="bg-blue-400" click={!edit?handleEditOn:handleEditOff} read={false} />
                <Button name="Editar" style="bg-green-400" click={handlePutTag} read={!putOn}/>

            {
                modal && <Modal name="Etiqueta" close={handleModalOff} change={handleGetTxt} submit={handleAddTags} text={putOn?"hola":""}/>
            }
        </>
    )
}
export default RenderTag;