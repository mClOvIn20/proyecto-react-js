import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Itemlistcontainer from './componentes/Itemlistcontainer/Itemlistcontainer'
import Contenedor from './componentes/contenedor/Contenedor'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './componentes/ItemDetail/ItemDetail'

function App() {

  return (
    <BrowserRouter>
  
    <Navbar/>
    <Routes>
      <Route path='/' element={<Itemlistcontainer/>}/>
      <Route path='/productos/:categoryId' element={<Itemlistcontainer/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

      <Route path='/not/found' element={<h2>Not found</h2>}/>
      <Route path='*' element= {<Navigate to={"/not-found"}/>}/>
    </Routes>

    <Itemlistcontainer greeting= "buenas a todos"/> 
    <Contenedor titulo={"Lavigne"} texto={"soy francisco"} />
    
    </BrowserRouter>
  )
}
export default App
