import { Link,NavLink } from "react-router-dom";
function Path ({name, path, tipo}){
    return <NavLink to={path} className={({isActive})=> isActive ? "link": "active"} target={tipo}> {name}</NavLink>
}
export default Path;