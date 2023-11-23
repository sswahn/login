import { memo } from 'react'
import SuccessIcon from './SuccessIcon.js'
import ErrorIcon from './ErrorIcon.js'
import styles from './styles.module.css'

const SubmitButton = memo(({ text, message, error, disabled }) => {
  return (
    <div>
      {message && (
        <div className={styles.success}>
          <SuccessIcon />
          <span>{message}</span>
        </div>
      )}
      {error && (
        <div className={styles.error}>
          <ErrorIcon />
          <span>{error}</span>
        </div>
      )}
      <button className={styles.submit} type="submit" disabled={disabled}>{text}</button>
    </div>
  )
})

export default SubmitButton
