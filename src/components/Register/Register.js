
const Register = () => {

  return (
    <form>
      <input type="text" />
      <input type="email" />
      <input type="password" />
      <input type="password" />
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
      <button type="submit">Sign up</button>
    </form>
  )
}
