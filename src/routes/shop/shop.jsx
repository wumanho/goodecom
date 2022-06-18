import {useContext} from "react";
import {ProductsContext} from "../../context/products.context";

const Shop = () => {
  const {products} = useContext(ProductsContext)
  return (
    <div>
      {
        products.map(p => {
          return <h1 key={p.id}>{p.name}</h1>
        })
      }
    </div>
  )
}

export default Shop
