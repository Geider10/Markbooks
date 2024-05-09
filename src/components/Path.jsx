import { Link } from "react-router-dom";
function Path ({name, path}){
    return <Link to={path}> {name}</Link>
}
export default Path;