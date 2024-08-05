import React from 'react'
import { RichText } from '../RichText/RichText'
import * as styles from './serviceGrid.module.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
const ServiceGrid = ({data}) => {
    const {title, cards} = data
  return (
    <div className='container' id='services'>
        <div className={styles.box}>
        <div >
            <p className='title'>{title}</p>
        </div>
        <div className={styles.cardContainer}>
            {cards.map((item, id) =>{
                const {title,description, image} = item
                return(
                    <div className={id % 2 === 0 ? styles.card : styles.cardRev}>
                        <div className={styles.imgBox}>
                            <GatsbyImage 
                                image={image.gatsbyImageData}
                                alt={title}
                                className={styles.img}
                                objectFit='contain'
                            />
                        </div>
                        <div className={styles.desc}>
                            <RichText content={description}/>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default ServiceGrid