
import './ItemListConteiner.css'
import Item from '../Item/Item'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader.jsx'
import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../../firebase/config"


export const ItemListConteiner = () => {


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const docsRef = categoryId
        ? query (productosRef, where("category", "==", categoryId))
        : productosRef


        getDocs( docsRef )
        .then ((querySnapshot) => {
            const docs = querySnapshot.docs.map(doc => {
                return{
                    ...doc.data(),
                    id: doc.id
                }
            })
            setProductos (docs)
        })
        .finally (()=> setLoading(false))

    }, [categoryId])


    return (
        <>

                <div className="bg-white"></div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h3 className='text-2xl font-bold tracking-tight text-gray-900'>Menu god</h3>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"></div>
                        
                        {loading ? (<Loader/>) : (<Item productos={productos} />
                            )}
                </div>
            
        </>
    )
}