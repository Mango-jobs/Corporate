import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from './contactUs.module.scss'
import Form from '../Form/Form'

const ContactUs = ({data}) => {
  const {title, image} = data
  return (
    <div className='container' id='contact-us'>
        <div><h3 className='title gradient-text'>{title}</h3></div>
        <div className={styles.box}>
          <div className={styles.boxImg}>
            <GatsbyImage 
              image={image.gatsbyImageData}
              alt={title}
              objectFit='contain'
              className={styles.img}
              />
          </div>
          <div className={styles.boxImg}>
            <Form />
          </div>
        </div>
    </div>
  )
}

export default ContactUs