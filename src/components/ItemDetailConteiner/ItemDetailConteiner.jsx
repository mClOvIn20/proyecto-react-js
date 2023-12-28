import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import { useParams } from "react-router-dom"
import  ItemDetail from "../itemDetail/ItemDetail"
import { Loader } from "../Loader/Loader"



export const ItemDetailConteiner = () => {

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()
    

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((data) => {
                setItem(data.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => setLoading(false));
    }, [])

    return (
        <>
            {
                loading
                    ? (<Loader />)
                    : (<ItemDetail item={item} />
            )}
        </>
    )
}