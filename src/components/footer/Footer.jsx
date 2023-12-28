import "./footer.css"

export const Footer = () => {
    return (
        <div className="m-auto bg-black flex justify-center h-40 contenedor-footer px-5">
            <h3 className="text-white font-extrabold flex items-center hover:text-purple-400 m-4 cursor-pointer">Quienes Somos</h3>
            <h3 className="text-white font-extrabold flex items-center hover:text-purple-400 m-4 cursor-pointer">Contactanos</h3>
        </div>
    )
}