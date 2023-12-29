import "./inicio.css"
import { Link } from "react-router-dom"
import { Banner } from "./Banner"



export const Inicio = () => {

    return (
        <div className="px-5 ">
            <h1 className="font-extrabold  text-center p-5">Buenassss</h1>
            <div className="flex gap-8">
                <div className="w-2/3 gap-4 grid grid-cols-2 mb-3">
                    <Link to={"/menu/patys"} className="p-6 col-span-1 px-2 bg-red-700 font-semibold  text-[18px] flex justify-center items-center hover:bg-gray-200 h-5">Patys</Link>
                    <Link to={"/menu/cervezas"} className="p-6 col-span-1 px-2 bg-red-700  font-semibold  text-[18px] flex justify-center items-center hover:bg-gray-200 h-5">Cervezas</Link>
                </div>
                <div className="bg-700 mb-3">
                   
                </div>
            </div>
        </div>
    )
}