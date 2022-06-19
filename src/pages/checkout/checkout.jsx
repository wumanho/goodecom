import './checkout.scss'
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const Checkout = () => {
  const {cartItems,totalPrice} = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'><span>商品</span></div>
        <div className='header-block'><span>名称</span></div>
        <div className='header-block'><span>数量</span></div>
        <div className='header-block'><span>单价</span></div>
        <div className='header-block'><span>移除</span></div>
      </div>
      {
        cartItems.map(item => {
          return <CheckoutItem key={item.id} checkoutItem={item}/>
        })
      }
      <span className='total'>合计：{totalPrice} 元</span>
    </div>
  )
}

export default Checkout
