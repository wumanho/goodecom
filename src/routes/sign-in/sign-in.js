import {sighInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.util'
import SighUpForm from "../../components/sign-up-form/sigh-up-form";

/**
 * Google 账号注册
 * @returns {JSX.Element}
 * @constructor
 */
const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await sighInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>通过 Google 账号登陆</button>
      <SighUpForm/>
    </div>
  )
}

export default SignIn
