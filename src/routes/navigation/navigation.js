import {Outlet, Link} from 'react-router-dom'
import {Fragment} from "react";

const navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo' to='/'>
          <div>Logo</div>
        </Link>
        <div className='links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default navigation
