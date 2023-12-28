
import { ItemCard } from "../ItemCard/ItemCard";

const Item = ({ productos }) => {

    return (
        <section className="grid grid-cols-1 sm:grid-cols-4 gap-5">
            {productos.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </section>
    );
};
export default Item