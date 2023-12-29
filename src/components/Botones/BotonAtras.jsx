import { useNavigate } from "react-router-dom"



export const BotonAtras = () => {

    const navigate = useNavigate()

    const handleAtras = () =>{
        navigate(-1)
    }
    return (

        <button onClick={handleAtras} className="flex justify-center text-white rounded font-mono hover:bg-slate-600 py-3 px-6 bg-slate-500">
            Atras
        </button>
    )
}


