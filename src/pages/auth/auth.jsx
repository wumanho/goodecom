import SighUpForm from "../../components/sign-up-form/sigh-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import './auth.scss'
/**
 * Google 账号注册
 * @returns {JSX.Element}
 * @constructor
 */
const Auth = () => {

  return (
    <div className='authentication-container '>
      <SignInForm/>
      <SighUpForm/>
    </div>
  )
}

export default Auth
