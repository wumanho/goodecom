import {Outlet, Link} from 'react-router-dom'
import {Fragment, useContext} from "react";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase/firebase.util";
import './navigation.scss'
import {UserContext} from "../../context/user.context";

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext)

  const handleSignOut = async () => {
    await signOutUser()
    setCurrentUser(null)
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
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation
