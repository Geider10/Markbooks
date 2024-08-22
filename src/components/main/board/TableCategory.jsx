import { FilterContext } from "../../../context/dataContext";
import { useContext } from "react";
import Edit from '../../../icons/Edit';
import Trash from '../../../icons/Trash';
function TableCategory ({handlePutTags,handleDeleteTags}){
    const {tags} = useContext(FilterContext);

    return(
        <table className="text-center rounded-lg border-2">
            <thead className=" bg-gray-500">
                <tr className="">
                    <th>Nombre</th>
                    <th>Modificar</th>
                </tr>
            </thead>
            <tbody>
                {tags && tags.map(tag=>(
                    <tr key={tag.id}>
                        <td>{tag.name}</td>
                        <td className="flex gap-2 justify-center">
                            <span className={
                                tag.name == "General"? "bg-sky-900 p-1 rounded-md": " bg-sky-500 p-1 rounded-md cursor-pointer"
                            }>
                                <Edit tId={tag.id} tClick={handlePutTags}/>
                            </span>
                            <span className={
                                tag.name == "General"? "bg-red-900 p-1 rounded-md": "bg-red-500 p-1 rounded-md cursor-pointer"
                            }>   
                                <Trash tId={tag.id} tClick={handleDeleteTags}/>
                            </span>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}
export default TableCategory