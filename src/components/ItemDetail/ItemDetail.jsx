import "./itemDetail.css"
import { useContext, useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";






const ItemDetail = ({ item }) => {
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    const handleAtras = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const itemToCart = {
            ...item, 
            cantidad,
        }
        addToCart(itemToCart)
    }



    return (
        <>
            <div className="w-screen container-itemDetail px-9 py-9">
                <button className="flex justify-center text-white rounded font-mono hover:bg-slate-600 py-2 px-5 bg-slate-500 ml-4" onClick={handleAtras}>Atras</button>
                <h3 className="text-2xl font-semibold py-5 px-5">{item.name}</h3>
                <hr />
                <div className="flex w-60 h-60 py-5 px-5 gap-6">
                    <img src={item.img} alt={item.name} />
                    <div className="w-screen">
                        <p className="w-screen py-5 px-5 font-extrabold">{item.description} </p>
                        <p className="text-xl font-bold px-5 pt-2 mb-5"> Precio: ${item.price}</p>
                        {
                            isInCart(item.id)
                                ? <button className="mt-4 flex justify-center text-white rounded font-mono hover:bg-slate-600 py-3 px-6 bg-slate-500">
                                    Terminar mi compra
                                </button>
                                : <>
                                    <QuantitySelector
                                        cantidad={cantidad}
                                        setCantidad={setCantidad}
                                    />
                                    <button
                                        className=" mt-4 flex justify-center text-white rounded font-mono hover:bg-slate-600 py-3 px-6 bg-slate-500"
                                        onClick={handleAgregar}>
                                        Agregar al carrito
                                    </button>
                                </>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemDetail;
