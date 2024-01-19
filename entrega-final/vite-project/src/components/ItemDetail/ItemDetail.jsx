import {useContext, useState} from "react";
import Button from "../Button/Button.jsx";
import QuantitySelector from "./QuantitySelector.jsx";
import { Link, useNavigate } from "react-router-dom";
import {CartContext} from "../../context/CartContext.jsx";


const ItemDetail = ({ item }) => {
  const navigate = useNavigate()
  const [cantidad, setCantidad] = useState(1)
  const {addToCart, isInCart}= useContext(CartContext)

  const handleAdd = () => {
    const itemToCart = {
      ...item,
      cantidad
    }
    addToCart(itemToCart)
  }

  const handleVolver = () => {
    navigate(-1)
  }

  return (
    <div className="container m-auto mt-8">
      <Button onClick={handleVolver}>Back</Button>
      <h3 className="mt-4 text-2xl font-semibold">{item.name}</h3>
      <hr/>
      <div className="flex gap-8 pt-4">
        <img src={item.img} alt={item.name} />
        <div>
          <p>{item.description}</p>
          <p className="text-xl font-bold">Price: ${item.price}</p>
          {
            isInCart( item.id )
                ? <Button><Link to="/cart">Proceed to checkout</Link></Button>
                : <>
                  <QuantitySelector
                      cantidad={cantidad}
                      stock={item.stock}
                      setCantidad={ setCantidad }
                  />
                  <Button onClick={handleAdd} disabled={item.stock === 0}>Add to cart</Button>
                </>
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
