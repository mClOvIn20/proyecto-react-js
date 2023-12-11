//import './Navbar.scss'
import logo from '../../assets/logo.svg'
import Navlink from './Navlink'
import Boton from '../Boton/Boton'


const Navbar = ()=> {
  return (
    <header className="bg-sky-400">
        <div className="container m-auto py-7 flex justify-between items-center">
          <img src={logo} alt="Logo" />
          
            <nav className="flex gap-6">
            <Navlink  href={"#"} text={"Productos"}/>
            <Navlink  href={"#"} text={"Promociones"}/> 
            <Navlink  href={"#"} text={"Nosotros"}/> 
            <Navlink  href={"#"} text={"Informacion"}/>  
            <Boton onClick={()=> alert("Se agrego pedido al carrito")}>
    Agregar al Carrito <img src='/src/assets/carrito.svg'/>
    </Boton>
          </nav>
        </div>
    </header>
  )
}

export default Navbar

