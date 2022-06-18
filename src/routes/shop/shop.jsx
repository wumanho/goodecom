import {useContext} from "react";
import {ProductsContext} from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card";
import './shop.scss'
const Shop = () => {
  const {products} = useContext(ProductsContext)
  return (
    <div className='products-container'>
      {
        products.map(p => {
          return <ProductCard key={p.id} product={p}/>
        })
      }
    </div>
  )
}

export default Shop
