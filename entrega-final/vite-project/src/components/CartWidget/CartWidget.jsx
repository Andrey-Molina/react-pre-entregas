import {IoIosCart} from "react-icons/io";
import {Link} from 'react-router-dom'
import {CartContext} from "../../context/CartContext.jsx";
import {useContext} from "react";
export const CartWidget = () => {

    const {itemsInCart} = useContext(CartContext);
    return (
        <>
            <Link to="/cart" className="flex px-4 border-2-cyan-500">
                <p className="text-xs">{itemsInCart()}</p>
                <IoIosCart className=""/>
            </Link>
        </>
    )
}
