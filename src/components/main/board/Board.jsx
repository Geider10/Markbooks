import { useState, useContext } from "react";
import { FilterContext } from "../../../context/dataContext";
import Button from "../form/Button";
import Modal from "../form/Modal";
import TableLink from "../board/TableLink";
import TableCategory from "./TableCategory";
import { Link } from "react-router-dom";
function Board() {
    const { tags, postLink, putLink } = useContext(FilterContext);
    //attributes of link
    const handleModalOn = () => {
        if(tableLink == "link"){
            setModalType("link")
            setMetodo("post");
            setCategory("General");
        }
        else if(tableLink == "tag"){
            setModalType("tag");
            setMetodo("post");
        }
    }
    const handleModalOff = () => {
        if(tableLink == "link"){
            setButton(false);
            setValue("");
            setUrl("");
            setMetodo("");
            setCategory("");
        }
        else if(tableLink == "tag"){
            setTxt("");
        }
        setModalType("");
    }
    const [value, setValue] = useState("")
    const [button, setButton] = useState(false);
    const [metodo, setMetodo] = useState("");
    const [id, setId] = useState(1);
    const [category, setCategory] = useState("");
    const [url, setUrl] = useState("")
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
        const typeMetodo = metodo;
        if (typeMetodo == "post" && value !== "" && url !== "") {
            postLink(value, url, category);
            handleModalOffLink();
        }
        else if (typeMetodo == "put") {
            putLink(id, value, url, category);
            handleModalOffLink();
        }
    }
    const handlePutLink = (e) => {
        setId(e.target.id);
        setValue(e.target.value);
        let urlValue = e.target.attributes.url.value;
        let categoryValue = e.target.attributes.category.value;
        setCategory(categoryValue);
        setUrl(urlValue);
        setMetodo("put");
        setModalLink(true);
        setButton(true);
    }
    //controller render the tables
    const [tableLink, setTableLink] = useState("link");
    const [modalType, setModalType] = useState("")
    const navLink = (e) => {
        window.document.querySelector(".tableLinkActive")?.classList.remove("tableLinkActive");
        e.target.classList.add("tableLinkActive");
    }
    const handleLinks = (e) => {
        navLink(e)
        setTableLink("link")
        // setModalType("link")
    }
    const handleCategorys = (e) => {
        navLink(e)
        setTableLink("tag")
        // setModalType("tag")
    }
    //attributes of category
    const [txt, setTxt] = useState("");
    const [tagId, setTagId] = useState(0);
    const [metodoTag, setMetodoTag] = useState("");
    const [buttons, setButtons] = useState(false);
    const handleGetTxt = (e) => {
        setTxt(e.target.value);
    }
    const handleTagEvent = () => {
        let typeMetod = metodoTag;
        if (typeMetod == "post" && txt !== "") {
            postTag(txt);
            setModal(false);
        }
        else if (typeMetod == "put") {
            putTag(tagId, txt);
            setButtons(false);
            setModal(false);
        }
        setTxt("");
    }
    //put &&delete
    const handlePutTag = (e) => {
        const general = e.target.innerText;
        if (edit && general != "General") {
            setTxt(e.target.innerText);
            setTagId(e.target.id);
            setMetodoTag("put");
            setButtons(true);
            setModal(true);
        }
        if (!edit) {
            const val = e.target.innerText;
            filterLink(val);
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
                <Modal url={true} name="Nuevo Link" btnName={button ? "Editar" : "Crear"} text={value} nameUrl={url} change={handleGetValue} changeUrl={handleGetUrl} close={handleModalOff} submit={handleEventLink}>
                    <select onChange={handleCategory} value={category} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {tags && tags.map(t => (
                            <option key={t.id} value={t.name}>{t.name}</option>
                        ))}
                    </select></Modal>
            }
            {modalType == "tag" &&
                <Modal name="Nueva Etiqueta" close={handleModalOff} change={handleGetTxt} submit={handleTagEvent} text={txt} btnName={buttons ? "Editar" : "Crear"} url={false}>
                </Modal>
            }
            {tableLink == "link" ? <TableLink handlePutLinks={handlePutLink} /> : <TableCategory handlePutTags={handlePutTag} />}
        </div>
    )
}
export default Board