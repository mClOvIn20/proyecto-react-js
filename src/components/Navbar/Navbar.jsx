
import { Carwidget } from './Carwidget';
import './NavBar.css'
import { NavLink } from "react-router-dom";



export const NavBar = () => {

    return (
        
            <div className="flex items-center justify-between gap-5 px-5 ">
                <div className="">
                    <img src="/src/assets/LogoCiervo.svg" alt="logo del ciervo" />
                </div>
                <ul className=" flex gap-5">
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            `flex space-x-4  ${isActive ? "text-blue-400 font-semibold " : "text-black font-bold"}`
                        }>Inicio
                    </NavLink>
                    <NavLink
                        to={"/Menu"}
                        className={({ isActive }) =>
                            `flex space-x-4 ${isActive ? "text-blue-400 font-semibold " : "text-black font-bold"}`
                        }>Menu de Nashe
                    </NavLink>

                </ul>
                <div className="cursor-pointer text-[16px]">
                    <Carwidget />
                </div>
            </div>
        
    )
}

