import { useState, useContext } from "react";
import { FilterContext } from "../../../context/dataContext";
import Button from "../form/Button";
import Modal from "../form/Modal";
import TableLink from "../board/TableLink";
import TableCategory from "./TableCategory";
function Board() {
    const { tags, postLink, putLink } = useContext(FilterContext);
    const [modal, setModal] = useState(false);
    const handleModalOn = () => {
        setModal(true);
        setMetodo("post");
        setCategory("General");
    }
    const handleModalOff = () => {
        setModal(false);
        setButton(false);
        setValue("");
        setUrl("");
        setMetodo("");
        setCategory("");
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
            handleModalOff();
        }
        else if (typeMetodo == "put") {
            putLink(id, value, url, category);
            handleModalOff();
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
        setModal(true);
        setButton(true);
    }

    const [tableLink, setTableLink] = useState(true);
    const navLink=(e)=>{
        window.document.querySelector(".tableLinkActive")?.classList.remove("tableLinkActive");
        e.target.classList.add("tableLinkActive");
      }
    const handleLinks =(e)=>{
        navLink(e)
        setTableLink(true)
    }
    const handleCategorys =(e)=>{
        navLink(e)
        setTableLink(false)
    }
    return (
        <div className="centerBoard">
            <div className="flex items-center gap-48 mb-4">
                <div className="flex items-center gap-2">
                    <span onClick={handleLinks} className="tableLink tableLinkActive">Links</span>
                    <span>|</span>
                    <span onClick={handleCategorys} className="tableLink">Categorias</span>
                </div>
                <Button name="Agregar" click={handleModalOn} style="bg-green-400" />
            </div>
            {modal &&
                <Modal url={true} name="Pagina" btnName={button ? "Editar" : "Crear"} text={value} nameUrl={url} change={handleGetValue} changeUrl={handleGetUrl} close={handleModalOff} submit={handleEventLink}>
                    <select onChange={handleCategory} value={category} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {tags && tags.map(t => (
                            <option key={t.id} value={t.name}>{t.name}</option>
                        ))}
                    </select>
                </Modal>}
            {tableLink ? <TableLink handlePutLinks={handlePutLink} /> : <TableCategory/> }

        </div>
    )
}
export default Board