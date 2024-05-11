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
    const handleModalOn =()=>{
        setModal(true);
        setMetodo("post");
    };
    const handleModalOff =()=>{
        setModal(false);
        setButtons(false);
        setTxt("");
    };

    //get && post of tag
    const [txt, setTxt] = useState("");
    const [tagId, setTagId] = useState(0);
    const [metodo, setMetodo] = useState("");
    const [buttons,setButtons] = useState(false);
    const handleGetTxt=(e)=>{
        setTxt(e.target.value);
    }
    const handleTagEvent=()=>{
        let typeMetod = metodo;
        console.log("Tipo de metodo: "+typeMetod);
        if(typeMetod == "post"){
            postTag(txt);
            setModal(false);
        }
        else if(typeMetod == "put"){
            putTag(tagId,txt);
            setModal(false);
            setButtons(false);

        }
        setTxt("");
        console.log(tags);
    }
    //put &&delete
    const handleTag = (e)=>{
        if(edit){
            setTxt(e.target.innerText);
            setTagId(e.target.id);  
            setMetodo("put");
            setButtons(true);
            setModal(true);
        }
    }
    const handleDeleteTag = ()=>{
        if(txt!==""){
            deleteTag(tagId);
            setModal(false);
            setButtons(false);
            setTxt("");
            
        }
    }
    return (
        <section className="flex justify-between items-center mx-8">
            <div className="flex gap-2">
            {tags&& tags.map(t =>(
                <Tag key={t.id} name={t.name} pId={t.id} click={handleTag} />
            ))}
            </div>
            <div className="flex gap-2">
            {edit && <Button name="+" style="bg-green-400" click={handleModalOn} read={false}/>}
                <Button name={!edit?"Abrir":"Cerrar"} style="bg-blue-400" click={!edit?handleEditOn:handleEditOff} read={false} />
          
            </div>
            {
                modal && 
                <Modal  name="Etiqueta" close={handleModalOff} change={handleGetTxt} submit={handleTagEvent} text={txt} btnName={buttons?"Editar":"Crear"}>
                  {buttons && <Button name="Eiminar" style="bg-red-400" click={handleDeleteTag} read={false}/>}
                </Modal>
            }
        
        </section>
    )
}
export default RenderTag;