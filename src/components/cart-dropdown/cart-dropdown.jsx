import './cart-dropdown.scss'
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import {useContext} from "react";
import {useNavigate} from "react-router-dom"
import {CartContext} from "../../context/cart.context";

const CartDropdown = ({toggle}) => {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
    toggle()
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map(item => {
            return <CartItem key={item.id} cartItem={item}/>
          })
        }
      </div>
      <Button btnProps={{onClick: goToCheckoutHandler}}>去结账</Button>
    </div>
  )
}

export default CartDropdown
