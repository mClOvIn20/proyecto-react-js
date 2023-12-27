import Boton from "../Boton/Boton"
import { Link } from "react-router-dom"
const Itemcard = ({item}) => {
  
    return (
    <article  className="w-50">
    <img src={item.img} alt={item.name} className="flex-auto"/>
    <h3 className="text-2x1 font-semibold">{item.name}</h3>
    <hr/>
    <p>{item.description}</p>
    <p className="text-xl font-mono">Precio: ${item.price}</p>
    <Boton>
   <Link to={'/item/${}'}> ver mas</Link>
    </Boton>
</article>
  )
}


export default Itemcard