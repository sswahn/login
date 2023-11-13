import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export default function SubmitButton({ text, message, error }) {
  return (
    <div>
      {message && (
        <div className="submit-button-message">
          <FontAwesomeIcon icon={faCircleCheck} />
          <span>{message}</span>
        </div>
      )}
      {error && (
        <div className="submit-button-error">
          <FontAwesomeIcon icon={faCircleExclamation} />
          <span>{error}</span>
        </div>
      )}
      <button className="submit-button" type="submit">{text}</button>
    </div>
  )
}
