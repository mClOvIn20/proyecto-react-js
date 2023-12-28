import { useNavigate } from "react-router-dom"





export const BotonAtras = () => {

    const navigate = useNavigate()

    const handleAtras = () =>{
        navigate(-1)
    }
    return (

        <button onClick={handleAtras} className="bg-yellow-200 font-mono text-black mt-10 shadow-black px-3 py-1 m-4 rounded">
            Atras...
        </button>
    )
}


