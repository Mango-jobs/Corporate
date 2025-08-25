import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from './contactUs.module.scss'
import Form from '../Form/Form'
import { RichText } from '../RichText/RichText'

const ContactUs = ({data}) => {
  const {title, image, description} = data
  return (
    <div className='container' id='contact-us'>
        <div><h3 className='title gradient'>{title}</h3></div>
        <div className={styles.box}>
          <div className={styles.boxImg}>
            <GatsbyImage 
              image={image.gatsbyImageData}
              alt={title}
              objectFit='contain'
              className={styles.img}
              />
          </div>
          <div className={styles.boxText}>
           <RichText content={description}/>
           <button className={styles.btn}><a target='blank' href = 'https://docs.google.com/forms/d/e/1FAIpQLSdzeUX47xvOPqbBT_1wOg3u43v82bofCDAwiWABiXl1nx2unw/viewform?pli=1'>Drop Your Resume Here</a>  </button>
          </div>
        </div>
    </div>
  )
}

export default ContactUs