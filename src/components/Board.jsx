import Button from "./Button";
import Modal from "./Modal";
import Table from "./Table";
import { useState, useContext } from "react";
import { dataContext } from "../context/dataContext";
function Board() {
    const { tags, postLink, putLink } = useContext(dataContext);
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
    return (
        <>
            <Button name="Agregar" click={handleModalOn} style="bg-green-400" />
            {modal &&
                <Modal url={true} name="Pagina" btnName={button ? "Editar" : "Crear"} text={value} nameUrl={url} change={handleGetValue} changeUrl={handleGetUrl} close={handleModalOff} submit={handleEventLink}>
                    <select onChange={handleCategory} value={category}>
                        {tags && tags.map(t => (
                            <option key={t.id} value={t.name}>{t.name}</option>
                        ))}
                    </select>
                </Modal>}
            <section className="flex justify-center">
                <Table handlePutLinks={handlePutLink} />
            </section>
        </>
    )
}
export default Board