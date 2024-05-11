import { useContext,useState } from "react";
import { dataContext } from "../context/dataContext";
import Tag from "./Tag"
import Button from "./Button";
import Modal from "./Modal";
function RenderTag (){
    const {tags,postTag,putTag,deleteTag} = useContext(dataContext);
    const [edit, setEdit] = useState(false);
    const [modal, setModal] = useState(false);
    const handleEditOn =()=> { setEdit(true); }
    const handleEditOff =()=>{ !modal && setEdit(false);};
    const handleModalOff =()=>{setModal(false)};
    const handleModalOn =()=>{
        setModal(true);
        setMetodo("post");
    };

    //get && post of tag
    const [txt, setTxt] = useState("");
    const [metodo, setMetodo] = useState("");

    const [buttons,setButtons] = useState(false);
    const [tagId, setTagId] = useState(0);
    const handleGetTxt=(e)=>{
        const valu = e.target.value;
        console.log(valu)
        setTxt(e.target.value);
    }
    const handleTagEvent=()=>{
        let typeMetod = metodo;
        setTxt("");
        console.log("Tipo de metodo: "+typeMetod);
        if(typeMetod == "post"){
            postTag(txt);
        }
        else if(typeMetod == "put"){
            putTag(tagId,txt);
        }
        console.log(tags);
    }
    //put &&delete
  

    const handleTag = (e)=>{
        setTxt(e.target.innerText);
        setTagId(e.target.id);  
        setButtons(true);
        // console.log(txt);
        // console.log(tagId);
    }
    const handlePutTag = () =>{
        if(txt!==""){
            setMetodo("put");
            setModal(true);
            setButtons(false);
        }
    }
    const handleDeleteTag = ()=>{
        if(txt!==""){
            setButtons(false);
            deleteTag(tagId);
        }
    }
    return (
        <>
            {tags&& tags.map(t =>(
                <Tag key={t.id} name={t.name} pId={t.id} click={handleTag} />
            ))}
            {buttons && <Button name="Editar" style="bg-green-400" click={handlePutTag} read={false}/>}
            {buttons && <Button name="Eiminar" style="bg-red-400" click={handleDeleteTag} read={false}/>}
            {edit && <Button name="+" style="bg-green-400" click={handleModalOn} read={false}/>}
                <Button name={!edit?"Abrir":"Cerrar"} style="bg-blue-400" click={!edit?handleEditOn:handleEditOff} read={false} />
            {
                modal && <Modal name="Etiqueta" close={handleModalOff} change={handleGetTxt} submit={handleTagEvent} text={txt}/>
            }
        </>
    )
}
export default RenderTag;