import { FilterContext } from "../../../context/dataContext";
import { useContext} from "react";
import Edit from '../../../icons/Edit';
import Trash from '../../../icons/Trash';
import BtnPdf from './BtnPdf';
import NoCard from '../enlaces/NoCard';
function TableLink ({handlePutLinks,handleDeleteLinks}){
    const {links} = useContext(FilterContext); 
    return(
        <div>
            {links.length == 0 ?
            <NoCard title={'¡Oops! la lista esta vacia.'} subtititle={'Agregue un enlace y vuelva a intentarlo.'} img={'/book_3.webp'}/> 
            :<div className="flex flex-col gap-4">
                <table className="text-center border-2 h-full ">
                    <thead  className=" bg-gray-500 ">
                        <tr >
                            <th className="p-1">Nombre</th>
                            <th className="p-1 sm:hidden">Categoria</th>
                            <th className="p-1">Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {links && links.map(link=>(
                            <tr key={link.id} className="border-2">
                                <td>{link.name}</td>
                                <td className="sm:hidden">{link.category}</td>
                                <td className="p-0 flex justify-center items-center h-full py-1 gap-2">
                                <span className="bg-sky-500  rounded-md p-1 cursor-pointer inline-block ">
                                    <Edit tId={link.id} tClick={handlePutLinks}/>
                                </span>
                                <span className="bg-red-500  rounded-md p-1 cursor-pointer inline-block">
                                    <Trash tId={link.id} tClick={handleDeleteLinks}/>
                                </span>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                {links.length >= 1 &&  <BtnPdf/>}
            </div>
            }
        </div>
    )
}
export default TableLink;