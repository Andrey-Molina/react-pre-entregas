import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config.js"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
      setLoading(true)

      //a- Armar referencia
      const productosRef = collection(db, 'products')
      const docsRef  = categoryId
                                ? query(productosRef, where('category', '==', categoryId))
                                : productosRef
      //b- Llamar la referencia
      getDocs(docsRef)
          .then((resp)=> {
              const docs = resp.docs.map(doc => {
                  return{
                      ...doc.data(),
                      id: doc.id
                  }
              })
              console.log(docs)
              setProductos(docs)
          })
          .finally(()=> setLoading(false))


  }, [categoryId])

      return (
            <>
              {loading ? (
                <Loader />
              ) : (
                <ItemList productos={productos} />
              )}
            </>
      );
};

export default ItemListContainer;
