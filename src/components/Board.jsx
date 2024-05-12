import Button from "./Button";
import Modal from "./Modal";
import Table from "./Table";
import { useState, useContext} from "react";
import { dataContext } from "../context/dataContext";
function Board() {
    const {tags, postLink,putLink} = useContext(dataContext);
    const [url, setUrl] = useState("")
    const [modal, setModal] = useState(false);

    const [copy,setCopy] = useState("");
    const handleModalOn = () => {
        setModal(true);
        setMetodo("post");
    }
    const handleModalOff = () => {
        setModal(false);
        setButton(false);
        setValue("");
        setUrl("");
    }

    const [value, setValue] = useState("")
    const [button, setButton] = useState(false);
    const [metodo, setMetodo] = useState("");
    const [id, setId] = useState(1);
    // const [category, setCategory] = useState("");
    const handleGetValue = (e) => {
        setValue(e.target.value);
        console.log(value);
    }
    const handleGetUrl = (e) => {
        setUrl(e.target.value);
        console.log(url);
    }
    const handleCategory = () => {
        // setCategory(e.target.innerText);
        // const cate = e.target;
        // console.log("cate: "+cate);
    }
    const handleEventLink = () => {
        const typeMetodo = metodo;
        if (typeMetodo == "post") {
            postLink(value, url, "General");
            
            setCopy(url);
            console.log("modo-post")
            const cop = copy;
            console.log(cop);
            handleModalOff();
           
        }
        else if (typeMetodo == "put") {
            putLink(id,value,url,"Cursos");
            handleModalOff();
            console.log("modo-put id:", id);
        }
        setValue("");
        setUrl("");
    }
    const handlePutLink = (e) => {
        const pid = e.target.id;
        const pname = e.target.value;
        const pp = e.target.url;
        setId(e.target.id);
        setValue(e.target.value);
        setUrl(e.target.url);
        setMetodo("put");
        setModal(true);
        setButton(true);
        
        console.log("modo-put id:", pid)
        console.log("modo-put name:", pname)
        console.log("modo-put url:", pp)
    }
    return (
        <>
            <Button name="Agregar" click={handleModalOn} style="bg-green-400" read={false} />
            {modal &&
                <Modal url={true} name="Pagina" btnName={button?"Editar":"Crear"} text={value}  nameUrl={url} change={handleGetValue} changeUrl={handleGetUrl} close={handleModalOff} submit={handleEventLink}>
                    <select>
                        {tags && tags.map(t => (
                            <option key={t.id}>{t.name}</option>
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