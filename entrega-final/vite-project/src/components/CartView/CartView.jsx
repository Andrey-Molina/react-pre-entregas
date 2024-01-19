import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../Button/Button.jsx";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart.jsx";
import deleteIcon from "../../assets/delete.png";


const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);

    if (cart.length === 0) return <EmptyCart />

    return (
        <section className="container m-auto mt-8">
            <p>Welcome</p>
            <h2 className="text-4xl font-semibold">Your Order</h2>
            <hr />

            <ul>
                {cart.map((item) => (
                    <li key={item.id} className="flex gap-3 border-b my-4">
                        <img src={item.img} alt="Cart img" className="w-32" />
                        <div>
                            <h3 className="text-2xl">{item.name}</h3>
                            <p className="text-2xl font-bold">$ {item.price * item.cantidad}</p>
                            <p>Quantity: {item.cantidad}</p>
                            <Button onClick={() => removeItem(item.id)}>
                                <img src={deleteIcon} alt="trashIcon"/>
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>

            <h4 className="text-4xl font-semibold">TOTAL: ${totalCart()}</h4>
            <Button onClick={clearCart}>Empty cart</Button>
            <Button><Link to="/checkout">Proceed to checkout</Link></Button>
        </section>
    );
};

export default CartView;
