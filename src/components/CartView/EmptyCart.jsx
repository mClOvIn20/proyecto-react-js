import { Link } from "react-router-dom"
import { Boton } from "../botones/Boton"

const EmptyCart = () => {
     return(
        <section className="container m-auto mt-8">
        <h2 className="text-4xl font-semibold">Tu carrito esta vacio</h2>
        <hr />
        <p>Agrega algun pedido a tu carrito</p>
        <button className="flex justify-center text-white rounded font-mono hover:bg-slate-600 py-3 px-6 bg-slate-500">
            <Link to={"/"}>Volver</Link>
        </button>
    </section>
     )
}
 export default EmptyCart