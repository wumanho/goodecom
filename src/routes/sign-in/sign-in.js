import {sighInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.util'

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await sighInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with google popup
      </button>
    </div>
  )
}

export default SignIn
