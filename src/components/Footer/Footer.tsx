import React from 'react'
import * as styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className='conatainer'>
        <div className={styles.box}>
            <div className={styles.text}>
                <p>All Rights Reserved</p> 
                <p>Mango Jobs @2024</p>
                
            </div>
            <div className={styles.text}>
              <p>Address: Noida sector 5, UP</p>
              <p>Phone No. 7*********</p>
              <p>Find us on map</p>
            </div>
        </div>
    </div>
  )
}

export default Footer