import React from 'react'
import * as styles from './header.module.scss'
import useSiteQuery from '../../hooks'
import { Link } from 'gatsby'

const Header = () => {

  const {header} = useSiteQuery()

  
  const scrollTo = (id) => {
    window.scrollTo({
        top: document.getElementById(`${id}`)?.offsetTop - 80,
        behavior: "smooth",
    })
}
  
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={`${styles.wrapper}`}>
        <div className={styles.logo}><Link to = '/'> Mango Jobs </Link></div>
        <ul className={styles.nav}>
          {header.map((item, id) =>{
            const {title, slug} = item
            return(
              <li  key={id} className={styles.navItem} onClick={() => scrollTo(slug.replace('#', ''))}>{title}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Header