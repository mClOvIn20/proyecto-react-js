
import './counter.css'
import { Boton } from "../botones/Boton"
import { useState } from 'react'



export const Counter = () => {

    const [counter, setCounter] = useState(1)

    const sumar = () => {
        setCounter(counter + 1)
        
        
    }

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
            
        }
    }

    return (
        <>
            <div className="flex flex-row mt-4 px-5">
                <Boton texto="-" onClick={restar}></Boton>
                <div>
                    <p className="parrafo flex justify-center py-1 px-3 gap-2">Cantidad: {counter} </p>
                </div>
                <Boton texto="+" onClick={sumar}></Boton>
            </div>
        </>
    )
}