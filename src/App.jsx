import { BrowserRouter ,Routes, Route  } from "react-router-dom";
import {Home} from "./components/Home"
import {Board} from "./components/Board"
import { Header } from "./components/Header";
function App (){
    return(
        <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Board" element={<Board></Board>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App