import { FilterContext } from "../../../context/dataContext";
import { useContext } from "react";
import Edit from '../../../icons/Edit';
import Trash from '../../../icons/Trash';
function TableCategory ({handlePutTags,handleDeleteTags}){
    const {tags} = useContext(FilterContext);
    return(
       <div>
            <table className="text-center border-2 h-full">
                <thead className=" bg-gray-500">
                    <tr >
                        <th className="p-1">Nombre</th>
                        <th className="p-1">Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    {tags && tags.map(tag=>(
                        <tr key={tag.id} className="border-2">
                            <td>{tag.name}</td>
                            <td className="p-0 flex justify-center items-center h-full py-1 gap-2">
                                <span className={
                                    tag.name == "General"? "bg-sky-900 p-1 rounded-md inline-block": " bg-sky-500 p-1 rounded-md cursor-pointer inline-block"
                                }>
                                    <Edit tId={tag.id} tClick={handlePutTags}/>
                                </span>
                                <span className={
                                    tag.name == "General"? "bg-red-900 p-1 rounded-md inline-block": "bg-red-500 p-1 rounded-md cursor-pointer inline-block"
                                }>   
                                    <Trash tId={tag.id} tClick={handleDeleteTags}/>
                                </span>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
           </table>
       </div>
    )
}
export default TableCategory