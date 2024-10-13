import React from 'react'
import * as styles from './form.module.scss'
const Form = () => {
  return (
    <div className={styles.formContainer}>
        <div className={styles.inputBox}>
            <label> Name *</label>
            <input type='text' required/>
        </div>
        <div className={styles.inputBox}>
            <label> Email *</label>
            <input type='email' required/>
        </div>
        <div className={styles.inputBox}>
            <label> Phone Number *</label>
            <input type='number' required/>
        </div>
        <button type='submit' className={styles.btn}> Submit </button>
    </div>
  )
}

export default Form