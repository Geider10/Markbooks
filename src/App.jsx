import { BrowserRouter, Routes, Route } from "react-router-dom";
// import StateData from "./context/StateData";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import Home from "./components/main/home/Home"
import Board from "./components/main/board/Board"
import ContentDetail from './components/main/enlaces/detallesLink/ContentDetail';
import Enlaces from './components/main/enlaces/Enlaces';
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/panel" element={<Board />}></Route>
                <Route path="/enlaces" element={<Enlaces/>}></Route>
                {/* controla que cartDetail se renderiza */}
                <Route path="/enlace/:id" element={<ContentDetail />}></Route> 
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default App