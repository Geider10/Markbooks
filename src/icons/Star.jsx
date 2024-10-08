import { useState, useContext } from "react";
import { FilterContext } from "../context/dataContext";
function Star({ sId, starValue}) {
    const { changeStar } = useContext(FilterContext);
    const [color, setColor] = useState(starValue? true: false);
    const handleClick = () => {
        setColor(!color)
        if(color){
            changeStar(sId,false);
        }
        else {
            changeStar(sId,true);
        }
    }
    return (
        <svg onClick={handleClick}xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={color? "#ffee00" : "none"} stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-star" >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
    )
}
export default Star;