import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './sectionTextImage.module.scss'
import { RichText } from '../RichText/RichText'

const SectionTextImage = ({data}) => {
 const {title, description, image} = data
  return (
    <div className={`container`} id='about'>
        <div className={styles.box}>
              <h2 className={`title gradient`}> {title}</h2>
        </div>
        <div className={styles.alternate} >
          <div className={styles.image}>
            <GatsbyImage 
                image={image.gatsbyImageData}
                alt={title}
                objectFit='cover'
                />
          </div>
          <div className={styles.desc}>
              <RichText content={description} />
          </div>
        </div>
    </div>
  )
}

export default SectionTextImage