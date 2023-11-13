
const ConfirmForgotPassword = ({ className, onSubmit }) => {

  return (
    <form className={`${styles.confirm} ${className || ''}`} onSubmit={handleOnSubmit} aria-label="create new password form">
      <h2>Create a new password</h2>
      <div>
        <input id="confirmation_code" type="text" onChange={handleOnChange} placeholder="Confirmation code." required minLength={1} maxLength={255} autoComplete="off" aria-label="confirmation code" />
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
      {loading && <Loader />}
      {!loading && <SubmitButton text="Reset Password" message={message} error={error} />}
    </form>
  )
}
