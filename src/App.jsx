import { BrowserRouter ,Routes, Route  } from "react-router-dom";
import StateData from "./context/StateData";
import Header from "./components/Header";
import Home from "./components/Home"
import Board from "./components/Board"

function App (){
    return(
        <StateData>
            <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Board" element={<Board/>}></Route>
            </Routes>
            </BrowserRouter>
        </StateData>
    )
}
export default App