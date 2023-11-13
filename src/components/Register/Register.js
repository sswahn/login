import { useState } from 'react'
import SubmitButton from '../SubmitButton/SubmitButton.js'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.js'
import styles from './styles.module.css'

const Register = ({ className }) => {
  const [message, setMessage] = useState(undefined)
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(false)
  
  return (
    <form className={`${styles.register} ${className || ''}`} onSubmit={handleSubmit} aria-label="registration form">
      <div>
        <input type="text" onChange={handleOnChange} placeholder="Username" />
        <UserIcon />
      </div>
      <div>
        <input type="email" onChange={handleOnChange} placeholder="Email" />
        <EmailIcon />
      </div>
      <div>
        <input type="password" onChange={handleOnChange} placeholder="Password" />
        <PasswordIcon />
      </div>
      <div>
        <input type="password" onChange={handleOnChange} placeholder="Confirm Password" />
        <PasswordIcon />
      </div>
      <details className="auth-details" aria-label="password requirements">
        <summary>Password requirements</summary>
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
