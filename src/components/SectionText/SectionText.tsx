import React from 'react'
import * as styles from './sectionText.module.scss'
import { RichText } from '../RichText/RichText'
const SectionText = ({data}) => {
    const {title, description} = data
  return (
    <div className={`container`} id='about'>
        <div className={styles.box}>
          <div>
              <h2 className='title'> {title}</h2>
          </div>
          <div className={styles.desc}>
              <RichText content={description} />
          </div>
        </div>
    </div>
  )
}

export default SectionText