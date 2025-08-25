import React from 'react'
import * as styles from './header.module.scss'
import useSiteQuery from '../../hooks'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Header = () => {

  const {header, logo} = useSiteQuery()

  
  const scrollTo = (id) => {
    window.scrollTo({
        top: document.getElementById(`${id}`)?.offsetTop - 80,
        behavior: "smooth",
    })
}
  
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={`${styles.box}`}>
      <div className={`${styles.logoImg}`}><Link className='gradient-text' to = '/'> <GatsbyImage image={logo.gatsbyImageData} alt={logo.title}/> </Link></div>
        <div className={`${styles.logo}`}><Link className='gradient-text' to = '/'> Mango Jobs </Link></div>
        <ul className={styles.nav}>
          {header.map((item, id) =>{
            const {title, slug} = item
            return(
              header.length -1 != id ? <li key={id} className={ styles.navItem} onClick={() => scrollTo(slug.replace('#', ''))}>{title}</li> :
              <li key={id} className={ ' color-nav'} onClick={() => scrollTo(slug.replace('#', ''))}><button className='color-nav'>{title}</button></li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Header