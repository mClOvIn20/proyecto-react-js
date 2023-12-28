import "./inicio.css"
import { Link } from "react-router-dom"
import { Banner } from "./Banner"


export const Inicio = () => {

    return (
        <div className="px-5 bg-slate-200">
            <h1 className="font-mono text-center p-5">Welcome to the forest</h1>
            <div className="flex gap-8">
                <div className="w-2/3 gap-4 grid grid-cols-2 mb-3">
                    <Link to={"/menu/pizzas"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Pizzas</Link>
                    <Link to={"/menu/burguers"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Burguers</Link>
                    <Link to={"/menu/cervezas"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Cervezas</Link>
                </div>
                <div className="bg--700 mb-3">
                    <img src="ciervo.jpg" alt="imagen de fondo" />
                </div>
            </div>
        </div>
    )
}