import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Itemlistcontainer from './componentes/Itemlistcontainer/Itemlistcontainer'
import Contenedor from './componentes/contenedor/Contenedor'


function App() {

  return (
    <>
    <Navbar/>
    <Itemlistcontainer greeting= "buenas a todos"/> 
    <Contenedor titulo={"Lavigne"} texto={"soy francisco"} />
    </>
  )
}
export default App
