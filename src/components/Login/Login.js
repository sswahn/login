import { useState } from 'react'
import UserIcon from '../Icons/UserIcon.js'
import PasswordIcon from '../Icons/PasswordIcon.js'
import Checkbox from '../Checkbox/Checkbox.js'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.js'

const Login = ({ className, onSubmit }) => {
  const [state, setState] = useState({ 
    username: '',
    password: ''
  })
  const [checked, setChecked] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  
  const handleOnChange = ({ target }) => {
    setState({ ...state, [target.id]: target.value })
  }

  const handleCheckbox = event => {
    setChecked(!checked)
  }

  const handleResponse = response => {
    setLoading(false)
    if (responses.error !== undefined) {
      setError(response.error.message)
    }
  }

  const handleOnSubmit = event => {
    try {
      setLoading(true)
      const request = {
        username: state.username,
        password: state.password,
        remember: state.checked
      }
      const response = await onSubmit(request)
      handleResponse(response)
    } catch (err) {
      setError(err)
    }
  }
  
  return (
    <form className={`${styles.login} ${className || ''}`} onSubmit={handleOnSubmit} aria-label="login form">
      <h2>Sign In</h2>
      <div>
        <input id="username" type="text" onChange={handleOnChange} required minLength={2} maxLength={50} autoComplete="off" aria-label="username" />
        <UserIcon />
      </div>
      <div>
        <input id="password" type="password" onChange={handleOnChange} required minLength={8} maxLength={130} autoComplete="off" aria-label="password" />
        <PasswordIcon />
      </div>
      <Checkbox label="Remember me" checked={checked} onChange={handleCheckbox} />
      {loading && <LoadingSpinner />}
      {!loading && <SubmitButton text="Sign In" error={error} />}
      <div className="auth-actions">
        <button className="auth-button" type="button" onClick={handleForgotPassword} aria-haspopup="dialog">Forgot password?</button>
        <button className="auth-button" type="button" onClick={handleRegisterAccount} aria-haspopup="dialog">Create an account</button>
      </div>
    </form>
  )
}
