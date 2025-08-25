import React from 'react'
import * as styles from './form.module.scss'
import useSiteQuery from '../../hooks'
import { Link } from 'gatsby'
const Form = () => {
    const {logo, address, phone, emailId} = useSiteQuery()
  return (
    <div className={styles.formContainer}>
        {/* <div className={styles.inputBox}>
            <label> Name *</label>
            <input type='text' required/>
        </div> */}
        <div className={styles.inputBox}>
            <label> Email </label>
            <p>{emailId}</p>
        </div>
        <div className={styles.inputBox}>
            <label> Phone Number </label>
            <p>{phone}</p>
        </div>
        <button className={styles.btn}><a target='blank' href = 'https://docs.google.com/forms/d/e/1FAIpQLSdzeUX47xvOPqbBT_1wOg3u43v82bofCDAwiWABiXl1nx2unw/viewform?pli=1'>Register Here</a>  </button>
    </div>
  )
}

export default Form