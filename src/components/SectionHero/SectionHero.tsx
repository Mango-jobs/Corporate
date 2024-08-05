import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './sectionHero.module.scss'

const SectionHero = ({data}) => {
    const {title, desktopImage} = data
    console.log(desktopImage);
    
  return (
    <div className={styles.container}>
        <div className={styles.text}>
            <p>{title}</p>
        </div>
        <div >
            <GatsbyImage image={desktopImage.gatsbyImageData} alt = {title} className={styles.hero}/>
        </div>
    </div>
  )
}

export default SectionHero