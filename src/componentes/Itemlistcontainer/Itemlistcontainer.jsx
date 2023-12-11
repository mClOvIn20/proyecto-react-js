//import './Itemlistcontainer.scss'


const Itemlistcontainer =({greeting}) => {
  return (
    <section className="list_container">
        <h2 className="list_title">Catalogo</h2>
        <hr />
        <p>{greeting}</p>
    </section>
  )
}
<Itemlistcontainer greeting= "buenas a todos"/> 
export default Itemlistcontainer