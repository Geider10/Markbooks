import { FilterContext } from "../../../context/dataContext";
import { useContext } from "react";
import Button from "../form/Button";

function TableCategory (){
    const {} = useContext(FilterContext);
    
    return(
        <h1>Table Category</h1>

    )
}
export default TableCategory