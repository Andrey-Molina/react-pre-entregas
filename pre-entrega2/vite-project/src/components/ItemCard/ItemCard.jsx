import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";

const ItemCard = ({item}) => {

  return (
    <article className="w-60">
      <img src={item.img} alt={item.name} />
      <h3 className="text-2xl font-semibold">{item.name}</h3>
      <hr/>
      <p>{item.description}</p>
      <p className="text-xl font-bold">Price: ${item.price}</p>
      <Button>
        <Link to={`/item/${item.id}`}>Expand</Link>
      </Button>
    </article>
  );
};

export default ItemCard;
