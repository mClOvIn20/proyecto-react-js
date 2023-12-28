
import './ItemListConteiner.css'
import Item from '../Item/Item'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../utils/utils'
import { Loader } from '../Loader/Loader'



export const ItemListConteiner = () => {


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((data) => {
                const items = categoryId
                    ? data.filter(prod => prod.category === categoryId)
                    : data
                setProductos(items)

            })
            .finally(() => setLoading(false));

    }, [categoryId])


    return (
        <>
            
                <h3 className='font-extrabold font-mono text-4xl py-4 text-center'>Menu del Oso</h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 place-items-center">
                    {
                        loading
                            ? (<Loader />
                            ) : (<Item productos={productos} />
                            )}
                </div>
            
        </>
    )
}