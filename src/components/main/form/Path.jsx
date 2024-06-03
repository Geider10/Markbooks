import { Link,NavLink } from "react-router-dom";
function Path ({name, path, tipo, style}){
    return <Link to={path} className={style} target={tipo}> {name}</Link>
}
export default Path;