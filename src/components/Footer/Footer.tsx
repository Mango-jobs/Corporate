import React from 'react'
import * as styles from './footer.module.scss'

const Footer = () => {
  return (
    <div >
        <div className={styles.box}>
            <div className={styles.text}>
                <p>All Rights Reserved</p> <br />
                <p>Mango Jobs @2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer