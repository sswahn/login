import { useState } from 'react'
import UserIcon from '../Icons/UserIcon.js'
import SubmitButton from '../SubmitButton/SubmitButton.js'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.js'
import styles from './styles.module.css'

const ForgotPassword = ({ className, onSubmit }) => {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState(undefined)
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(false)
  
  const handleOnChange = ({ target }) => {
    setUsername(target.value)
  }

  const submitRequest = () => {
    const request = { username }
    return onSubmit(request)
  }

  const handleResponse = response => {
    return new Promise((resolve, reject) => {
      if (!response) {
        reject(response)
      }
      if (response.error !== undefined) { 
        reject(response.error) 
      }
      resolve(response.message)
    })
  }

  const displayMessage = message => {
    if (message) {
      setMessage(message)
    }
  }
  
  const handleOnSubmit = async () => {
    event.preventDefault()
    try {
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
    <form className={`${styles.forgot} ${className || ''}`} onSubmit={handleOnSubmit} aria-label="forgot password form">
      <h2>Forgot password</h2>
      <div>
        <input id="username" type="text" onChange={handleOnChange} placeholder="Username" required minLength={2} maxLength={50} pattern="^(?!_)[a-zA-Z0-9_]{1,48}(?<!_)$" autoComplete="off" aria-label="username" />
        <UserIcon />
      </div>
      {loading && <LoadingSpinner />}
      {!loading && <SubmitButton text="Reset Password" message={message} error={error} />}
    </form>
  )
}

export default ForgotPassword
