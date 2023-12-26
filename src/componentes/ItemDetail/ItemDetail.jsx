

import Boton from '../Boton/Boton'

const ItemDetail=
(item)=> {
  return (
    <div className='container m-auto mt-8 '>
    <h3 className="text-2x1 font-semibold">{item.name}</h3>
    <hr/>
    <div className='flex gap-7 pt-5'>
    </div>
    <img src={item.img} alt={ImageBitmapRenderingContext.name} className="flex-auto"/>
    <div>   
    <p>{item.description}</p>
    <p className="text-xl font-mono">Precio: ${item.price}</p>
    </div>
    <Boton className="bg-blue-900 ">Agregar al carrito</Boton>
    </div>
  );
  };

export default ItemDetail;
