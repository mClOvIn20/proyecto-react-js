
import { Link } from "react-router-dom"

import './ItemCard.css'
import { BotonAtras } from "../botones/BotonAtras"



export const ItemCard = ({ item }) => {
    return (
        
        <article className="w-80 border rounded-xl overflow-hidden shadow-lg mb-4">
            <h3 className="font-bold text-xl mb-2 text-center mt-2">{item.name}</h3>
            <div className="">
                <img className="object-contain h-32 w-96" src={item.img} alt="foto de plato" />
            </div>
            <div className="m-4">
                <hr className="border-t" />
            </div>
            <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to={`/item/${item.id}`}> VER MAS</Link>
                </button>
                <BotonAtras />
            </div>
        </article>
    )
}

export default ItemCard