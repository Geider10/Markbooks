import { useState, useContext} from "react";
import { FilterContext } from "../../../context/dataContext";
import Modal from "../form/Modal";
import SelectTable from './SelectTable';
import TableLink from "../board/TableLink";
import TableCategory from "./TableCategory";
import CategoryList from '../filters/CategoryList';
function Board() {
    const {links,tags, postLink, putLink, deleteLink, postTag, putTag,deleteTag } = useContext(FilterContext);
    //controller render the tables and activate modal
    const [tableType, setTableType] = useState("link");//segun su valor render x table
    const [modalType, setModalType] = useState("")//segun su valor activa x modal
    const addStyleLink = (e) => {
        window.document.querySelector(".tableLinkActive")?.classList.remove("tableLinkActive");
        e.target.classList.add("tableLinkActive");
    }
    const handleTableTypeLin = (e) => {
        addStyleLink(e)
        setTableType("link")
    }
    const handleTableTypeCat = (e) => {
        addStyleLink(e)
        setTableType("tag")
    }
    //open x modal for create element
    const handleModalOn = () => {
        if(tableType == "link"){
            setModalType("link")
            setMetodoLink("post");
            setCategory(tags[0].name)
        }
        else if(tableType == "tag"){
            setModalType("tag");
            setMetodoTag("post");
        }
    }
    const handleModalOff = () => {
        if(tableType == "link"){
            setEditLink(false);
            setValueLink("");
            setUrl("");
            setCategory("");
        }
        else if(tableType == "tag"){
            setEditTag(false);
            setValueTag("");
        }
        setModalType("");//desactiva x modal
    }
     //attributes && method the links
    const [linkId, setLinkId] = useState(0);
    const [valueLink, setValueLink] = useState("")
    const [url, setUrl] = useState("")
    const [category, setCategory] = useState("");
    const [metodoLink, setMetodoLink] = useState("");
    const [editLink, setEditLink] = useState(false);//permite modificar el modal link
    const handleGetValueL = (e) => {
        setValueLink(e.target.value);
    }
    const handleGetUrlL = (e) => {
        setUrl(e.target.value);
    }
    const handleGetCategL = (e) => {
        setCategory(e.target.value);
    }
    //utiliza el context para guardar los elementos en el localstorage
    const handleSendModalLink = () => {
        const typeMetodo = metodoLink;
        if (typeMetodo == "post" && valueLink != "" && url != "" && category != "") {
            postLink(valueLink, url, category);
            handleModalOff();
        }
        else if (typeMetodo == "put" && valueLink != "" && url != "" && category != "") {
            putLink(linkId, valueLink, url, category);
            handleModalOff();
        }
       
    }
    //open modal for edit
    const handleEditTableLink = (e) => {
        setModalType("link");
        setMetodoLink("put");
        setEditLink(true);
        //get values link from buttton edit
        const idEdit = e.target.id ||  e.currentTarget.id
        const linkFind = links.find(l => l.id == idEdit)
        // console.log(linkFind);
        setLinkId(linkFind.id);
        setValueLink(linkFind.name);
        setCategory(linkFind.category);
        setUrl(linkFind.url);
    }
    const handleDeleteTableLink=(e)=>{
        const id = e.currentTarget.id || e.target.id
        deleteLink(id);
    }
    //attributes && method the tags
    const [tagId, setTagId] = useState(0);
    const [valueTag, setValueTag] = useState("");
    const [metodoTag, setMetodoTag] = useState("");
    const [editTag, setEditTag] = useState(false);//permite modificar el modal tag
    const handleGetValueTag = (e) => {
        setValueTag(e.target.value);
    }
    const handleSendModalTag = () => {
        let typeMetod = metodoTag;
        if (typeMetod == "post" && valueTag != "") {
            postTag(valueTag);
            handleModalOff();
        }
        else if (typeMetod == "put" && valueTag != "") {
            putTag(tagId, valueTag);
            handleModalOff();
        }
    }
    const handleEditTableTag = (e) => {
        const idTag = e.currentTarget.id || e.target.id
        const tagFind = tags.find(t => t.id == idTag)
        if (tagFind.name != "General") {
            setModalType("tag")
            setMetodoTag("put");
            setEditTag(true);
            setTagId(tagFind.id);
            setValueTag(tagFind.name);
        }
    }
    const handleDeleteTableTag = (e)=>{
        const idTag = e.currentTarget.id || e.target.id
        const tagFind = tags.find(t => t.id == idTag)
        tagFind.name != "General" &&  deleteTag(tagFind.id);
    }
    return (
       <div className="flex justify-center">
         <div className="centerBoard  p-2">
            <SelectTable hLinks = {handleTableTypeLin} hCategorys={handleTableTypeCat} hModalOn={handleModalOn}/>
            {modalType == "link" &&
                <Modal url={true} name={!editLink ? "Crear link" : "Editar Link"} btnName={"Confirmar"}text={valueLink}  change={handleGetValueL} submit={handleSendModalLink} close={handleModalOff} nameUrl={url}  changeUrl={handleGetUrlL}>
                    <CategoryList tagsList={tags} defaultCategory={category} hCategorySelect={handleGetCategL}/>
                </Modal>
            }
            {modalType == "tag" &&
                <Modal url={false} name={!editTag ?"Crear categoria" : "Editar categoria"} btnName={"Confirmar"} text={valueTag}  change={handleGetValueTag} submit={handleSendModalTag}  close={handleModalOff} > </Modal>
            }
            {tableType == "link" ? <TableLink handlePutLinks={(e)=>handleEditTableLink(e)} handleDeleteLinks={(e)=>handleDeleteTableLink(e)} /> : <TableCategory handlePutTags={(e)=>handleEditTableTag(e)} handleDeleteTags={(e)=>handleDeleteTableTag(e)} />}
            {/* descargar todos los enlaces como pdf */}
        </div>
       </div>
    )
}
export default Board