
import './ItemListConteiner.css'
import Item from '../Item/Item'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../utilidades/utilidades.js'




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

                <div className="bg-white"></div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h3 className='text-2xl font-bold tracking-tight text-gray-900'>Menu god</h3>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"></div>
                        
                        {
                        loading
                            ? ("") : (<Item productos={productos} />
                            )}
                </div>
            
        </>
    )
}