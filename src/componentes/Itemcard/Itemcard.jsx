import Boton from "../Boton/Boton"

const Itemcard = ({item}) => {
  
    return (
    <article key={item.id} className="w-50">
    <img src={item.img} alt={ImageBitmapRenderingContext.name} className="flex-auto"/>
    <h3 className="text-2x1 font-semibold">{item.name}</h3>
    <hr/>
    <p>{item.description}</p>
    <p className="text-xl font-mono">Precio: ${item.price}</p>
    <Boton>Ver mas</Boton>
</article>
  )
}


export default Itemcard