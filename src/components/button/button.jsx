import './button.scss'

const BUTTON_TYPE_CLASS = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({children, buttonType, btnProps}) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
      {...btnProps}>
      {children}
    </button>
  )
}

export default Button
