
import {ProductItem} from "./ProductItem.jsx";
export const ItemListContainer = () => {
  return (
      <section className="grid grid-cols-3 justify-items-center">
          <ProductItem n={0}/>
          <ProductItem n={1}/>
          <ProductItem n={2}/>
      </section>
  )
}