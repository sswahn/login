import { useRef } from 'react'
import CheckedIcon from './CheckedIcon.js'
import UncheckedIcon from './UncheckedIcon.js'
import styles from './styles.module.css'

const Checkbox = ({ className, label, checked, onChange }) => {
  const checkboxRef = useRef(null)

  const handleClick = event => {
    checkboxRef.current.click()
  }
  
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <label className={styles.label} onClick={handleClick}>{label}</label>
      <input className={styles.checkbox} ref={checkboxRef} type="checkbox" checked={checked} onChange={onChange} />
      {checked ? <CheckedIcon className={styles.icon} onClick={handleClick} /> : <UncheckedIcon className={styles.icon} onClick={handleClick} />}
    </div>
  )
}

export default Checkbox
