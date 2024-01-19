import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import Loader from "../Loader/Loader.jsx";
import { db } from "../../firebase/config.js"
import { doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, 'products', itemId)

    getDoc(docRef)
        .then((resp) => {
          const doc = {
            ...resp.data(),
            id: resp.id
          }
          console.log(doc.data)
          setItem(doc)
        })
        .finally(()=> setLoading(false))

  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ItemDetail item={item}/>
      )}
    </>
  );
};

export default ItemDetailContainer;
