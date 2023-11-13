import { useState } from 'react'
import SubmitButton from '../SubmitButton/SubmitButton.js'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.js'
import UserIcon from './UserIcon.js'
import EmailIcon from './EmailIcon.js'
import PasswordIcon from './PasswordIcon.js'
import styles from './styles.module.css'

const Register = ({ className, onSubmit }) => {
  const [state, setState] = useState({ 
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    hidden_field: '',
    timer: undefined,
  })
  const [message, setMessage] = useState(undefined)
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(false)
  
  const handleOnChange = ({ target }) => {
    setState({ ...state, [target.id]: target.value, timer: state.timer ?? Date.now() })
  }

   const securityCheck = () => {
    return new Promise((resolve, reject) => {
      if (Date.now() - state.timer < 4000) {
        reject('Form filled out too quickly. Bot secuirty triggered.')
      }
      if (state.hidden_field.length) {
        reject('Unauthorized request.')
      }
      resolve()
    })
  }
  
  const validatePassword = () => {
    return new Promise((resolve, reject) =>
      state.password !== state.confirm_password
        ? reject('Passwords do not match.')
        : resolve()
    )
  }

  const submitRequest = async () => {
    const request = {
      username: state.username,
      email: state.email,
      password: state.password
    }
    return onSubmit(request)
  }

  const handleResponse = response => {
    setLoading(false)
    response.error !== undefined
      ? setError(response.error.message)
      : setMessage(response.message)
  }
  
  const handleOnSubmit = async event => {
    event.preventDefault()
    try {
      await securityCheck()
      await validatePassword()
      setLoading(true) 
      setError(undefined)
      const response = await submitRequest()
      handleResponse(response)
    } catch (err) {
      setError(err)
    }
  }
  
  return (
    <form className={`${styles.register} ${className || ''}`} onSubmit={handleOnSubmit} aria-label="registration form">
      <h2>Create an account</h2>
      <div>
        <input type="text" onChange={handleOnChange} placeholder="Username" required minLength={2} maxLength={50} pattern="^(?!_)[a-zA-Z0-9_]{1,48}(?<!_)$" aria-label="username" aria-required="true" />
        <UserIcon />
      </div>
      <div>
        <input type="email" onChange={handleOnChange} placeholder="Email" required minLength={7} maxLength={254} aria-label="email" aria-required="true"/>
        <EmailIcon />
      </div>
      <div>
        <input type="password" onChange={handleOnChange} placeholder="Password" required minLength={8} maxLength={130} pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,}$" aria-label="password" aria-required="true" />
        <PasswordIcon />
      </div>
      <div>
        <input type="password" onChange={handleOnChange} required minLength={8} maxLength={130} placeholder="Confirm Password" aria-label="confirm password" aria-required="true" />
        <PasswordIcon />
      </div>
      <div>
        <input id="hidden_field" type="hidden" onChange={handleOnChange} />
      </div>
      <details className="auth-details" aria-label="password requirements">
        <summary aria-haspopup="true">Password requirements</summary>
        <ul>
          <li>Minimum length 8 characters.</li> 
          <li>Contains at least 1 number.</li>
          <li>Contains at least 1 special character.</li>
          <li>Contains at least 1 uppercase letter.</li>
          <li>Contains at least 1 lowercase letter.</li>
        </ul>
      </details>
      {loading && <LoadingSpinner />}
      {!loading && <SubmitButton text="Sign Up" message={message} error={error} />}
    </form>
  )
}

export default Register
