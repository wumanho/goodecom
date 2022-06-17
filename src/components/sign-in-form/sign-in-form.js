import FormInput from "../form-input/form-input";
import {useState, useContext} from "react";
import Button from "../button/button";
import './sign-in-form.scss'
import {UserContext} from "../../context/user.context";
import {
  createUserDocumentFromAuth,
  sighInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.util";

const defaultFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [signInFields, setSignInFields] = useState(defaultFields)
  const {email, password} = signInFields
  const {setCurrentUser} = useContext(UserContext)

  const handleChange = (e) => {
    const {name, value} = e.target
    setSignInFields({...signInFields, [name]: value})
  }

  const signInWithGoogle = async () => {
    const {user} = await sighInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  const resetFormFields = () => {
    setSignInFields(defaultFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password)
      setCurrentUser(user)
      resetFormFields()
    } catch (e) {
      switch (e.code) {
        case 'auth/wrong-password':
          alert('密码错误')
          break
        case 'auth/user-not-found':
          alert('用户不存在')
          break
        default:
          alert('登陆失败,请检查用户名密码')
      }
    }
  }

  return (
    <div className='sign-in-container'>
      <h2>已有账户</h2>
      <span>使用账号和密码登陆</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='邮箱'
          inputProps={{
            type: 'text',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email
          }}></FormInput>
        <FormInput
          label='密码'
          inputProps={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password
          }}></FormInput>
        <div className='buttons-container'>
          <Button btnProps={{type: 'submit'}}>登陆</Button>
          <Button
            buttonType={'google'}
            btnProps={{onClick: signInWithGoogle, type: 'button'}}>Google 账号登陆</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
