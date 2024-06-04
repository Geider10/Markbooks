import { useContext, useState } from "react";
import { FilterContext } from "../../../context/dataContext";
import Tag from "./Tag"
function RenderTag() {
    const { tags} = useContext(FilterContext);
    // const [edit, setEdit] = useState(false);
    // const [modal, setModal] = useState(false);
    // const handleEditOn = () => { setEdit(true); }
    // const handleEditOff = () => { !modal && setEdit(false); };
    // const handleModalOn = () => {
    //     setModal(true);
    //     setMetodo("post");
    // };
    // const handleModalOff = () => {
    //     setModal(false);
    //     setButtons(false);
    //     setTxt("");
    // };

    //get && post of tag
    // const [txt, setTxt] = useState("");
    // const [tagId, setTagId] = useState(0);
    // const [metodo, setMetodo] = useState("");
    // const [buttons, setButtons] = useState(false);
    // const handleGetTxt = (e) => {
    //     setTxt(e.target.value);
    // }
    // const handleTagEvent = () => {
    //     let typeMetod = metodo;
    //     if (typeMetod == "post" && txt !== "") {
    //         postTag(txt);
    //         setModal(false);
    //     }
    //     else if (typeMetod == "put") {
    //         putTag(tagId, txt);
    //         setButtons(false);
    //         setModal(false);
    //     }
    //     setTxt("");
    // }
    // //put &&delete
    // const handleTag = (e) => {
    //     const general = e.target.innerText;
    //     if (edit && general != "General") {
    //         setTxt(e.target.innerText);
    //         setTagId(e.target.id);
    //         setMetodo("put");
    //         setButtons(true);
    //         setModal(true);
    //     }
    //     if(!edit){
    //         const val = e.target.innerText;
    //         filterLink(val);
    //     }
    // }
    // const handleDeleteTag = () => {
    //     if (txt !== "") {
    //         deleteTag(tagId);
    //         setModal(false);
    //         setButtons(false);
    //         setTxt("");
    //     }
    // }
    return (
        <section className="flex justify-center items-center mx-8">
            <div className="flex gap-2 items-center">
                {tags && tags.map(t => (
                    <Tag key={t.id} name={t.name} pId={t.id}/>
                ))}
            </div>
        </section>
    )
}
export default RenderTag;