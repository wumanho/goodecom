import './cart-dropdown.scss'
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map(item => {
            return <CartItem key={item.id} cartItem={item}/>
          })
        }
      </div>
      <Button>去结账</Button>
    </div>
  )
}

export default CartDropdown
