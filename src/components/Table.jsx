import { FilterContext } from "../context/dataContext";
import { useContext} from "react";
import Button from "./Button";
function Table ({handlePutLinks}){
    const {links, deleteLink} = useContext(FilterContext); 
    const handleDeleteLink=(e)=>{
        deleteLink( e.target.id);
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
                            <Button name={"Editar"} style={"bg-green-400"} click={handlePutLinks} pId={l.id} pValue={l.name} pUrl={l.url} pCategory={l.category}/>
                            <Button name={"Eliminar"} style={"bg-red-400"} click={handleDeleteLink} pId={l.id} />
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}
export default Table;