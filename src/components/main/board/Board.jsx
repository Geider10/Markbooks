import { useState, useContext} from "react";
import { FilterContext } from "../../../context/dataContext";
import Button from "../form/Button";
import Modal from "../form/Modal";
import TableLink from "../board/TableLink";
import TableCategory from "./TableCategory";

function Board() {
    const {tags, postLink, putLink, postTag, putTag } = useContext(FilterContext);
    //attributes && method htto the links
    const handleModalOn = () => {
        if(tableType == "link"){
            setModalType("link")
            setMetodoLink("post");
            setCategory("General");
        }
        else if(tableType == "tag"){
            setModalType("tag");
            setMetodoTag("post");
        }
    }
    const handleModalOff = () => {
        if(tableType == "link"){
            setEditLink(false);
            setValue("");
            setUrl("");
            setCategory("");
        }
        else if(tableType == "tag"){
            setEditTag(false);
            setTxt("");
        }
        setModalType("");
    }
    const [linkId, setLinkId] = useState(0);
    const [value, setValue] = useState("")
    const [url, setUrl] = useState("")
    const [category, setCategory] = useState("");
    const [metodoLink, setMetodoLink] = useState("");
    const [editLink, setEditLink] = useState(false);
    const handleGetValue = (e) => {
        setValue(e.target.value);
    }
    const handleGetUrl = (e) => {
        setUrl(e.target.value);
    }
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    const handleEventLink = () => {
        const typeMetodo = metodoLink;
        if (typeMetodo == "post" && value !== "" && url !== "") {
            postLink(value, url, category);
            handleModalOff();
        }
        else if (typeMetodo == "put") {
            putLink(linkId, value, url, category);
            handleModalOff();
        }
       
    }
    const handlePutLink = (e) => {
        setModalType("link");
        setMetodoLink("put");
        setEditLink(true);
        setLinkId(e.target.id);
        setValue(e.target.value);
        let urlValue = e.target.attributes.url.value;
        let categoryValue = e.target.attributes.category.value;
        setCategory(categoryValue);
        setUrl(urlValue);
        
    }

    //controller render the tables
    const [tableType, setTableType] = useState("link");
    const [modalType, setModalType] = useState("")
    const navLink = (e) => {
        window.document.querySelector(".tableLinkActive")?.classList.remove("tableLinkActive");
        e.target.classList.add("tableLinkActive");
    }
    const handleLinks = (e) => {
        navLink(e)
        setTableType("link")
    }
    const handleCategorys = (e) => {
        navLink(e)
        setTableType("tag")
    }

    //attributes && method htto the tags
    const [tagId, setTagId] = useState(0);
    const [txt, setTxt] = useState("");
    const [metodoTag, setMetodoTag] = useState("");
    const [editTag, setEditTag] = useState(false);
    const handleGetTxt = (e) => {
        setTxt(e.target.value);
    }
    const handleTagEvent = () => {
        let typeMetod = metodoTag;
        if (typeMetod == "post" && txt !== "") {
            postTag(txt);
            handleModalOff();
        }
        else if (typeMetod == "put") {
            putTag(tagId, txt);
            handleModalOff();
        }
    }
    const handlePutTag = (e) => {
        const general = e.target.value;
        if (general != "General") {
            setModalType("tag")
            setMetodoTag("put");
            setEditTag(true);
            setTxt(e.target.value);
            setTagId(e.target.id);
        }
    }
    return (
        <div className="centerBoard">
            <div className="flex items-center gap-48 my-4">
                <div className="flex items-center gap-2">
                    <span onClick={handleLinks} className="tableLink tableLinkActive">Links</span>
                    <span>|</span>
                    <span onClick={handleCategorys} className="tableLink">Categorias</span>
                </div>
                <Button name="Agregar" click={handleModalOn} style="bg-green-400" />
            </div>
            {modalType == "link" &&
                <Modal url={true} name={!editLink ? "Nuevo Link" : "Link"} btnName={!editLink ? "Crear" : "Editar"} text={value}  change={handleGetValue} submit={handleEventLink} close={handleModalOff} nameUrl={url}  changeUrl={handleGetUrl}>
                    <select onChange={handleCategory} value={category} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {tags && tags.map(t => (
                            <option key={t.id} value={t.name}>{t.name}</option>
                        ))}
                    </select></Modal>
            }
            {modalType == "tag" &&
                <Modal url={false} name={!editTag ?"Nueva Etiqueta": "Etiqueta"} btnName={!editTag ? "Crear" : "Editar"} text={txt}  change={handleGetTxt} submit={handleTagEvent}  close={handleModalOff} > </Modal>
            }
            {tableType == "link" ? <TableLink handlePutLinks={handlePutLink} /> : <TableCategory handlePutTags={handlePutTag} />}
             {/* descargar todos los enlaces como pdf */}
        </div>
    )
}
export default Board