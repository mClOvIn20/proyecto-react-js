import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import trashIcon from "../../assets/trashIcon.svg"
import { UserContext } from "../../Context/userContext"



export const CartView = () => {

    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)
    const {user} = useContext(UserContext)
    

    return (

        <section className="container m-auto mt-8">
            <p>Bienvenido {user.email}</p>
            <h2 className="text-4xl font-mono py-6">Tu compra</h2>
            <hr />

            <ul>
                {
                    cart.map((item) => (
                        <li key={item.id} className="flex gap-5 py-5 px-5">
                            <img src={item.img} alt="imagen de compra" className="w-32 h-32" />
                            <div>
                                <h3 className="text-3xl">{item.name}</h3>
                                <strong><p className="text-2xl ">$ {item.price} x unidad</p></strong>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>TOTAL: $ {item.price * item.cantidad}</p>
                                <button onClick={ () => removeItem(item.id) }>
                                    <img src={trashIcon} className="w-8 h-8 bg-teal-300" alt="trash Icon" />
                                </button>
                                <hr />
                            </div>

                        </li>
                    ))
                }
            </ul>
            <hr />
            <h4 className="font-mono text-4xl">TOTAL: ${totalCart()}</h4>
            <button className="" texto="Vaciar Carrito" onClick={clearCart}>Vaciar Carrito</button>
        </section>

    )
}