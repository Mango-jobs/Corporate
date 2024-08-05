import React from "react"
import * as styles from './teamGrid.module.scss'
import { GatsbyImage } from "gatsby-plugin-image"
import { RichText } from "../RichText/RichText"


const TeamGrid = ({data}) =>{
    const {type , isAlternate, title, cards} = data

    return (
        <div className='container'>
            <div className={styles.box}>
            <div className='title'>
                <h2>{title}</h2>
            </div>
            <div className={styles.cardBox}>
                {cards.map((item, id) =>{
                    const {title, description, image} = item
                    return(
                        <div className={ styles.card }>
                            
                            <div className={styles.cardImgBox}>
                                <GatsbyImage 
                                    image={image.gatsbyImageData} 
                                    alt={title} 
                                    //className={styles.cardImg} 
                                    objectFit="contain"
                                />
                            </div>
                            <div className={styles.desc}>
                                <div className={styles.name}> <RichText content={description} /> </div>
                                <p>{title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
      )
}
export default TeamGrid