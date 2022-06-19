import {Outlet, Link} from 'react-router-dom'
import {Fragment, useContext, useState} from "react";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase/firebase.util";
import './navigation.scss'
import {UserContext} from "../../context/user.context";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  const [showDropdown, setShowDropdown] = useState(false)

  const handleSignOut = async () => {
    await signOutUser()
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            商城
          </Link>
          {
            currentUser ?
              <span className='nav-link' onClick={handleSignOut}>退出登陆</span> :
              <Link className='nav-link' to='/auth'>
                登陆
              </Link>
          }
          <CartIcon toggle={toggleDropdown}/>
        </div>
        {showDropdown && <CartDropdown toggle={toggleDropdown}/>}
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation
