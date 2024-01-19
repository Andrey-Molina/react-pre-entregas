import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, setDoc, doc, updateDoc, getDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, totalCart, clearCart } = useContext(CartContext);

  const [values, setValues] = useState({
    name: "",
    address: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      cliente: values,
      items: cart,
      total: totalCart(),
      fecha: new Date(),
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order).then((doc) => {
        setOrderId(doc.id)
        clearCart()
    });
  };

  if (orderId) {
    return (
      <div className="container m-auto mt-10">
        <h2 className="text-4xl font-semibold">Thank you for your purchase.</h2>
        <hr />
        <p>Your order code is: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="container m-auto mt-10">
      <h2 className="text-4xl font-semibold">Checkout</h2>
      <hr />

      <h4>Enter your details:</h4>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mt-4"
      >
        <input
          className="border p-2"
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleInputChange}
          name="name"
        />

        <input
          className="border p-2"
          type="text"
          placeholder="Address"
          value={values.address}
          onChange={handleInputChange}
          name="address"
        />
        <input
          className="border p-2"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputChange}
          name="email"
        />
        <button type="submit" className="bg-blue-500 text-white py-2">
            Send
        </button>
      </form>
    </div>
  );
};

export default Checkout;
