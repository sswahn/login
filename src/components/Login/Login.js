import { useState } from 'react'

const Login = ({ className, onSubmit }) => {
  
  const handleOnChange = ({ target }) => {
    setState({ ...state, [target.id]: target.value })
  }

  const handleOnSubmit = event => {
    
  }
  
  return (
    <form className={`${styles.login} ${className || ''}`} onSubmit={handleOnSubmit} aria-label="login form">
      <div>
        <input id="username" type="text" onChange={handleOnChange} required minLength={2} maxLength={50} autoComplete="off" aria-label="username" />
        <UserIcon />
      </div>
      <div>
        <input id="password" type="password" onChange={handleOnChange} required minLength={8} maxLength={130} autoComplete="off" aria-label="password" />
        <PasswordIcon />
      </div>
    </form>
  )
}
