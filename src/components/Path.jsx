import { Link } from "react-router-dom";
function Path ({name, path, style,tipo}){
    return <Link to={path} className={style} target={tipo}> {name}</Link>
}
export default Path;