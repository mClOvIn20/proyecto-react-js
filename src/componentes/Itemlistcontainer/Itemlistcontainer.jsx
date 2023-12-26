import { useState } from "react"
import { useEffect } from "react"
import {pedirDatos} from "../../utiliades/utilidades"
import Itemlist from "../Itemlist/Itemlist"
import { data } from "autoprefixer"
import { useParams } from "react-router-dom"






const Itemlistcontainer =() => {
  const [productos, setProductos]= useState([])
  const [loading, setLoading] = useState(true)

  const {categoryId}= useParams()
  console.log()

  useEffect(() => {
    setLoading(true)





    pedirDatos()
    .then((data) => {
      const items = categoryId
      ? data.filter (prod => prod.category === categoryId)
      :data
      setProductos(items)

    }
    )
    .finally(()=> setLoading(false))
  }, [categoryId])
  

  return (
    <>
    {
      loading
      ?<h2 className="text-center text-4xl mt-6">Cargando...</h2>
      : <Itemlist productos={productos}/>
    }
        </>
  )
}
<Itemlistcontainer greeting= "buenas a todos"/> 
export default Itemlistcontainer
