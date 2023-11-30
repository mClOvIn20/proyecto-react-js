//import './Navbar.scss'
import logo from '../../assets/logo.svg'
import Navlink from './Navlink'



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
          </nav>
        </div>
    </header>
  )
}

export default Navbar

