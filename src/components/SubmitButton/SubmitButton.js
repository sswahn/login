import SuccessIcon from './SuccessIcon.js'
import ErrorIcon from './ErrorIcon.js'
import styles from './styles.module.css'

export default function SubmitButton({ text, message, error }) {
  return (
    <div>
      {message && (
        <div className="submit-button-message">
          <SuccessIcon />
          <span>{message}</span>
        </div>
      )}
      {error && (
        <div className="submit-button-error">
          <ErrorIcon />
          <span>{error}</span>
        </div>
      )}
      <button className="submit-button" type="submit">{text}</button>
    </div>
  )
}
