import React from 'react'
import * as styles from './footer.module.scss'
import useSiteQuery from '../../hooks'
import { GatsbyImage } from 'gatsby-plugin-image'

const Footer = () => {
  const {logo, address, phone, emailId} = useSiteQuery()
  return (
    <div className='conatainer'>
        <div className={styles.box}>
            <div className={styles.text}>
                <p>All Rights Reserved</p> 
                <p>Mango Jobs @2024</p> 
            </div>
            <div>
              <GatsbyImage image={logo.gatsbyImageData} alt={logo.title} className={styles.logo}/>
            </div>
            <div className={styles.text}>
              <p>Address: {address}</p>
              <p>Phone: +91-{phone}</p>
              <p>Email Id: {emailId}</p>
            </div>
        </div>
    </div>
  )
}

export default Footer