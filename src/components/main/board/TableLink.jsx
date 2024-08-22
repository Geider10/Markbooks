import { FilterContext } from "../../../context/dataContext";
import { useContext} from "react";
import Edit from '../../../icons/Edit';
import Trash from '../../../icons/Trash';
import BtnPdf from './BtnPdf';
function TableLink ({handlePutLinks,handleDeleteLinks}){
    const {links} = useContext(FilterContext); 

    return(
        <div className="flex flex-col gap-4">
            <table className="text-center border-2">
                <thead className=" bg-gray-500">
                    <tr>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    {links && links.map(link=>(
                        <tr key={link.id}>
                            <td>{link.name}</td>
                            <td>{link.category}</td>
                            <td className="flex gap-2 justify-center">
                            <span className="bg-sky-500  rounded-md p-1">
                                <Edit tId={link.id} tClick={handlePutLinks}/>
                            </span>
                            <span className="bg-red-500  rounded-md p-1">
                                <Trash tId={link.id} tClick={handleDeleteLinks}/>
                            </span>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <BtnPdf/>
        </div>
    )
}
export default TableLink;