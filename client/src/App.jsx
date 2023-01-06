import { Route, Routes, Navigate } from "react-router-dom"
import ClothingDetail from "./components/ClothingDetail/ClothingDetail"
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import NewProduct from "./components/NewProuct/NewProduct"

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/searchResults" element={<div>Resultados de la busqueda</div>}></Route>
        <Route path="/:id" element={<ClothingDetail/>}></Route>
        <Route path="/newProduct" element={<NewProduct/>}/>
        <Route path="*" element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  )
}

export default App
