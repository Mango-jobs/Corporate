import React from 'react'
import * as styles from './footer.module.scss'
import useSiteQuery from '../../hooks'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const {logo, address, phone, emailId} = useSiteQuery()
  return (
    <div className='conatainer'>
        <div className={styles.box}>
            <div className={styles.text}>
                <p className={styles.legal}>MangoJobs @2025</p> 
            </div>
            <div className={styles.text}>
              <div className={styles.item}><FaAddressCard fontSize='1.5rem'/> {address}</div>
              <div className={styles.item}><FaPhoneAlt fontSize='1.5rem'/> +91-{phone}</div>
              <div className={styles.item}><MdMarkEmailRead fontSize='1.5rem'/> {emailId}</div>
              <div className={styles.item}><FaLinkedin fontSize='1.5rem'/> <a href="https://www.linkedin.com/company/mangojobs-private-limited/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BsuVUdq1RRYaw23%2FzYEcWWw%3D%3D" target="_blank" rel="noreferrer">MangoJobs</a></div>
            </div>
        </div>
    </div>
  )
}

export default Footer