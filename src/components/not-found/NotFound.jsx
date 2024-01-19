import { Boton } from "../botones/Boton"
import { Link } from "react-router-dom"


export const NotFound = () => {
    return (
        <>
            <img className="object-cover w-full p-05" src="https://media.istockphoto.com/id/1059407138/es/foto/buck-de-venado-cola-blanca.jpg?s=2048x2048&w=is&k=20&c=Ng17hFQdjTfL0Oy5rVeiKrX4dYSdR4WjfxexDbpTYR0=" />
            <div className="flex text-center flex-col bg-gray-400">
                <h2 className="m-6">ACA NO ENCONTRARAS NATI</h2>
                <button className="flex justify-center text-white rounded font-mono hover:bg-slate-600 py-3 px-6 bg-slate-500">
                <Link to={"/"}>Volver</Link>
        </button>
            </div>
        </>
    )
}

export default NotFound