import { dataContext } from "../context/dataContext";
import { useContext} from "react";
import Button from "./Button";
function Table ({handlePutLinks}){
    const {links, deleteLink} = useContext(dataContext); 
    const handleDeleteLink=(e)=>{
        let id = e.target.id;
        let cate = e.target.attributes.url.value;
        console.log(id);
        // console.log(cate);
        deleteLink(id);
    }
    return(
        <table className="text-center">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Link</th>
                    <th>Categoria</th>
                    <th>Modificar</th>
                </tr>
            </thead>
            <tbody>
                {links&& links.map(l=>(
                    <tr key={l.id}>
                        <td>{l.name}</td>
                        <td>{l.url}</td>
                        <td>{l.category}</td>
                        <td className="flex gap-2">
                            <Button name={"Editar"} style={"bg-green-400"} click={handlePutLinks} read={false} pId={l.id} pValue={l.name} pUrl={l.url} pCategory={l.category}/>
                            <Button name={"Eliminar"} style={"bg-red-400"} click={handleDeleteLink} read={false} pId={l.id} pValue={l.name} pUrl={l.url} pCategory={l.category} />
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}
export default Table;