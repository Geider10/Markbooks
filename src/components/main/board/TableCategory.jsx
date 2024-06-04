import { FilterContext } from "../../../context/dataContext";
import { useContext } from "react";
import Button from "../form/Button";

function TableCategory ({handlePutTags}){
    const {tags, deleteTag} = useContext(FilterContext);
    const handleDeleteTag = (e)=>{
        deleteTag(e.target.id);
    }
    
    return(
        <table className="text-center">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Modificar</th>
            </tr>
        </thead>
        <tbody>
            {tags && tags.map(tag=>(
                <tr key={tag.id}>
                    <td>{tag.name}</td>
                    <td className="flex gap-2">
                        <Button name={"Editar"} style={"bg-green-400"} click={handlePutTags} pId={tag.id} pValue={tag.name} />
                        <Button name={"Eliminar"} style={"bg-red-400"} click={handleDeleteTag} pId={tag.id} />
                    </td>
                </tr>
            ))
            }
        </tbody>
    </table>

    )
}
export default TableCategory