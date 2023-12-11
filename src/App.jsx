import './App.css'
//import './styles/styles.scss'
import Navbar from './componentes/Navbar/Navbar'
import Itemlistcontainer from './componentes/Itemlistcontainer/Itemlistcontainer'
import Contenedor from './componentes/contenedor/Contenedor'
import Boton from './componentes/Boton/Boton'


function App() {

  return (
    <>
    <Navbar/>
    <Itemlistcontainer greeting= "buenas a todos"/> 
    <Contenedor titulo={"Lavigne"} texto={"soy francisco"} />
    <Boton onClick={()=> alert("Se agrego pedido al carrito")}>
    Agregar al Carrito <img src='/src/assets/carrito.svg'/>
    </Boton>
    </>
  )
}
export default App
