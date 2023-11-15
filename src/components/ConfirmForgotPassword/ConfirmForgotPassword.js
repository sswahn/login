import { useState } from 'react'
import OpenEmailIcon from './OpenEmailIcon.js'
import UserIcon from '../Icons/UserIcon.js'
import PasswordIcon from '../Icons/PasswordIcon.js'
import SubmitButton from '../SubmitButton/SubmitButton.js'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.js'
import styles from './styles.module.css'

const ConfirmForgotPassword = ({ className, onSubmit }) => {
  const [state, setState] = useState({
    confirmation_code: '',
    username: '',
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
      confirmation_code: state.confirmation_code,
      username: state.username,
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
    <form className={`${styles.confirm} ${className || ''}`} onSubmit={handleOnSubmit} aria-label="create new password form">
      <h2>Create a new password</h2>
      <div>
        <input id="confirmation_code" type="text" onChange={handleOnChange} placeholder="Confirmation code." required minLength={1} maxLength={255} autoComplete="off" aria-label="confirmation code" />
        <OpenEmailIcon />
      </div>
      <div>
        <input id="username" type="text" onChange={handleOnChange} placeholder="Username" required minLength={2} maxLength={50} pattern="^(?!_)[a-zA-Z0-9_]{1,48}(?<!_)$" autoComplete="off" aria-label="username" />
        <UserIcon />
      </div>
      <div>
        <input id="password" type="password" onChange={handleOnChange} placeholder="Password" required minLength={8} maxLength={130} pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,}$" autoComplete="off" aria-label="password" />
        <PasswordIcon />
      </div>
      <div>
        <input id="confirm_password" type="password" onChange={handleOnChange} required minLength={8} maxLength={130} placeholder="Confirm Password" autoComplete="off" aria-label="confirm password" />
        <PasswordIcon />
      </div>
      {loading && <LoadingSpinner />}
      {!loading && <SubmitButton text="Reset Password" message={message} error={error} />}
    </form>
  )
}

export default ConfirmForgotPassword
