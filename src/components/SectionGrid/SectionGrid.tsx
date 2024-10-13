import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from './sectionGrid.module.scss'
import { RichText } from '../RichText/RichText'


const SectionGrid = ({data}) =>{
    const {type , isAlternate, title, cards} = data
    
      return (
        <div className='container' id='our-values'>
            <div className={styles.box}>
            <div className='title'>
                <h2>{title}</h2>
            </div>
            <div className={styles.cardBox}>
                {cards.map((item, id) =>{
                    const {title, description, image} = item
                    return(
                        <div className={styles.card}>
                            <GatsbyImage image={image.gatsbyImageData} alt={title} className={styles.cardImg} objectFit='cover'/>
                            <div className={styles.desc}>
                                <h4 className={` gradient-text ${styles.title}`}>{title}</h4>
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


export default SectionGrid