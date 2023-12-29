
import { Link } from "react-router-dom"

import './ItemCard.css'
import { BotonAtras } from "../botones/BotonAtras"



export const ItemCard = ({ item }) => {
    return (
        
        <article className="w-100 border rounded-xl overflow-hidden shadow-lg mb-4">
            <h3 className="font-bold text-xl mb-2 text-center mt-2">{item.name}</h3>
            <div className="">
                <img className="object-contain h-32 w-96" src={item.img} alt="foto" />
            </div>
            <div className="m-4">
                <hr className="border-t" />
            </div>
            <div className="flex justify-between">
                <button className="rounded-md bg-orange-900   px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    <Link to={`/item/${item.id}`}> Ver Mas</Link>
                </button>
                <BotonAtras />
            </div>
        </article>
    )
}

export default ItemCard

