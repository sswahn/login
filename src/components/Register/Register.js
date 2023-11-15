import { useState } from 'react'
import UserIcon from '../Icons/UserIcon.js'
import EmailIcon from '../Icons/EmailIcon.js'
import PasswordIcon from '../Icons/PasswordIcon.js'
import SubmitButton from '../SubmitButton/SubmitButton.js'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.js'
import styles from './styles.module.css'

const Register = ({ className, onSubmit }) => {
  const [state, setState] = useState({ 
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })
  const [message, setMessage] = useState(undefined)
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(false)
  
  const handleOnChange = ({ target }) => {
    setState({ ...state, [target.id]: target.value })
  }
  
  const validatePassword = () => {
    return new Promise((resolve, reject) => {
      state.password !== state.confirm_password
        ? reject('Passwords do not match.')
        : resolve()
    })
  }

  const submitRequest = () => {
    const request = {
      username: state.username,
      email: state.email,
      password: state.password
    }
    return onSubmit(request)
  }

  const handleResponse = response => {
    return new Promise((resolve, reject) => {
      if (!response) {
        reject(response)
      }
      if (response.error !== undefined) { 
        reject(response.error) 
      } else {
        resolve(response.message)
      }
    })
  }

  const displayMessage = message => {
    if (message) {
      setMessage(message)
    }
  }
  
  const handleOnSubmit = async event => {
    event.preventDefault()
    try {
      await validatePassword()
      setLoading(true) 
      setError(undefined)
      const response = await submitRequest()
      setLoading(false)
      const data = await handleResponse(response)
      displayMessage(data)
    } catch (err) {
      setError(err)
    }
  }
  
  return (
    <form className={`${styles.register} ${className || ''}`} onSubmit={handleOnSubmit} aria-label="registration form">
      <h2>Create an account</h2>
      <div>
        <input id="username" type="text" onChange={handleOnChange} placeholder="Username" required minLength={2} maxLength={50} pattern="^(?!_)[a-zA-Z0-9_]{1,48}(?<!_)$" autoComplete="off" aria-label="username" />
        <UserIcon />
      </div>
      <div>
        <input id="email" type="email" onChange={handleOnChange} placeholder="Email" required minLength={7} maxLength={254} autoComplete="off" aria-label="email" />
        <EmailIcon />
      </div>
      <div>
        <input id="password" type="password" onChange={handleOnChange} placeholder="Password" required minLength={8} maxLength={130} pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,}$" autoComplete="off" aria-label="password" />
        <PasswordIcon />
      </div>
      <div>
        <input id="confirm_password" type="password" onChange={handleOnChange} required minLength={8} maxLength={130} placeholder="Confirm Password" autoComplete="off" aria-label="confirm password" />
        <PasswordIcon />
      </div>
      <details aria-label="password requirements">
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
