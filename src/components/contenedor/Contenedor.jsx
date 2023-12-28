import { useRef } from "react"


export const Contenedor = ({ texto, titulo, children }) => {
    
    const today = useRef( new Date())

    return (
        
        <div className="flex-col text-center my-1 py-2 bg-gray-400">
            {children}
            <h2 className="text-4xl">{titulo}</h2>
            <p>{texto}</p>
            <p className="font-mono text-white font-extrabold">Fecha y hora: {today.current.toLocaleString()}</p>
        </div>
    )
}