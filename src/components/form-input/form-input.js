import './form-input.scss'

/**
 * 输入框
 * @param label
 * @param inputProps
 * @returns {JSX.Element}
 * @constructor
 */
const FormInput = ({label, inputProps}) => {
  return (
    <div className='group'>
      <input className='form-input' {...inputProps}/>
      {
        label
        &&
        <label
          className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`}
        >{label}</label>
      }
    </div>
  )
}

export default FormInput
