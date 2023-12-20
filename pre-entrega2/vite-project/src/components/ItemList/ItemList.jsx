import ItemCard from "../ItemCard/ItemCard.jsx";


const ItemList = ({productos}) => {

  return (
    <section className="container m-auto mt-8">
      <h2 className="text-4xl  pt-15 pb-5 font-bold">Products</h2>
        <div className="flex flex-wrap justify-start gap-10 items-stretch">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>
    </section>
  );
};

export default ItemList;
