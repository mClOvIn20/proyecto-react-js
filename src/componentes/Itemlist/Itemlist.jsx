import Itemcard from "../Itemcard/Itemcard";

const Itemlist=({productos})=> {
  return (
        <section className="container m-auto mt-8">
        <h2 className="text-4xl font-serif">Catalogo</h2>
        <hr />

        <div className="flex flex-wrap justify-start gap-8 items-center">
      { productos.map((item) => <Itemcard key={item.id} item={item}/>)}
    </div>
      </section>
  );
};
export default Itemlist; 
