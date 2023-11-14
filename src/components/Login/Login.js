import { useState } from 'react'
import UserIcon from '../Icons/UserIcon.js'
import PasswordIcon from '../Icons/PasswordIcon.js'
import Checkbox from '../Checkbox/Checkbox.js'
import SubmitButton from '../SubmitButton/SubmitButton.js'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.js'
import styles from './styles.module.css'

const Login = ({ className, onSubmit, forgotPassword, registerUser }) => {
  const [state, setState] = useState({ 
    username: '',
    password: ''
  })
  const [checked, setChecked] = useState(true)
  const [message, setMessage] = useState(undefined)
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(false)
  
  const handleOnChange = ({ target }) => {
    setState({ ...state, [target.id]: target.value })
  }

  const handleCheckbox = event => {
    setChecked(!checked)
  }

  const submitRequest = () => {
    const request = {
      username: state.username,
      password: state.password,
      remember: checked
    }
    return onSubmit(request)
  }
  
  const handleResponse = response => {
    return new Promise((resolve, reject) => {
      response.error !== undefined
        ? reject(response.error)
        : resolve(response.message)
    })
  }

  const handleOnSubmit = async event => {
    try {
      setLoading(true)
      setError(undefined)
      const response = await submitRequest()
      setLoading(false)
      const data = await handleResponse(response)
      setMessage(data)
    } catch (err) {
      setError(err)
    }
  }
  
  return (
    <form className={`${styles.login} ${className || ''}`} onSubmit={handleOnSubmit} aria-label="login form">
      <h2>Sign In</h2>
      <div>
        <input id="username" type="text" onChange={handleOnChange} placeholder="Username" required minLength={2} maxLength={50} autoComplete="off" aria-label="username" />
        <UserIcon />
      </div>
      <div>
        <input id="password" type="password" onChange={handleOnChange} placeholder="Password" required minLength={8} maxLength={130} autoComplete="off" aria-label="password" />
        <PasswordIcon />
      </div>
      <Checkbox label="Remember me" checked={checked} onChange={handleCheckbox} />
      {loading && <LoadingSpinner />}
      {!loading && <SubmitButton text="Sign In" message={message} error={error} />}
      <div>
        <button className="auth-button" type="button" onClick={forgotPassword}>Forgot password?</button>
        <button className="auth-button" type="button" onClick={registerUser}>Create an account</button>
      </div>
    </form>
  )
}

export default Login
