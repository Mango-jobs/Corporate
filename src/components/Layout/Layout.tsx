import React from 'react'
import '../../styles/main.scss'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout