import { useState } from "react"
import { useEffect } from "react"
import {pedirDatos} from "../../utiliades/utilidades"
import Itemlist from "../Itemlist/Itemlist"

const Itemlistcontainer =() => {
  const [productos, setProductos]= useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)

    pedirDatos()
    .then((data) => {
      setProductos (data)
      setLoading(false)
    }
    )
  }, [])
  

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
