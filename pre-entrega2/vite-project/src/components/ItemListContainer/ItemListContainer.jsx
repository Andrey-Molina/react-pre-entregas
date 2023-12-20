import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList.jsx";
import { pedirDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
      setLoading(true)

      pedirDatos() // <= Promise
          .then((data) => {
              const items = categoryId 
                              ? data.filter(prod => prod.category === categoryId)
                              : data
              setProductos(items)
          })
          .finally(() => setLoading( false ))
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
