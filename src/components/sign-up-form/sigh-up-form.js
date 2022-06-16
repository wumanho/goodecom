import {Fragment} from "react";
import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.util'
import FormInput from "../form-input/form-input";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

/**
 * 本地邮箱注册
 * @returns {JSX.Element}
 * @constructor
 */
const SighUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormFields({...formFields, [name]: value})
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('两次输入的密码不匹配')
      return
    }
    const {user} = await createAuthUserWithEmailAndPassword(email, password)
    if (user) {
      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields()
    }
  }

  return (
    <Fragment>
      <h1>使用邮箱注册</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='昵称'
          inputProps={{
            type: 'text',
            required: true,
            onChange: handleChange,
            name: 'displayName',
            value: displayName
          }}
        />
        <FormInput
          label='电子邮件'
          inputProps={{
            type: 'email',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email
          }}/>
        <FormInput
          label='密码'
          inputProps={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password
          }}/>
        <FormInput
          label='确认密码'
          inputProps={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'confirmPassword',
            value: confirmPassword
          }}/>
        <button type='submit'>提交</button>
      </form>
    </Fragment>
  )
}

export default SighUpForm
