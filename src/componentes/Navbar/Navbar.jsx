//import './Navbar.scss'
import logo from '../../assets/logo.svg'
import Boton from '../Boton/Boton'
import { Link } from 'react-router-dom'

const links =[
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Productos",
    href: "/productos/tvs",
  },
  {
    label: "Promociones",
    href: "/promociones/aires",
  },
  {
    label: "Nosotros",
    href: "/nosotros/heladeras",
  },
  {
    label: "Informacion",
    href: "/informacion/muebles",
  },
]
const Navbar = ()=> {
  return (
    <header className="bg-sky-400">
        <div className="container m-auto py-7 flex justify-between items-center">
          <img src={logo} alt="Logo" />
          
            <nav className="flex gap-6">
            {links.map((link)=>(
                <Link
                 key={link.href} 
                 to={link.href}
                 className="text-white hover:text-black text-lg uppercase font-extrabold">{link.label}</Link>
              ))
            }
            <Boton className='flex-auto' onClick={()=> alert("Se agrego pedido al carrito")}>
            Agregar al Carrito <img src='/src/assets/carrito.svg'/>
            </Boton>
          </nav>
        </div>
    </header>
  )
}

export default Navbar

