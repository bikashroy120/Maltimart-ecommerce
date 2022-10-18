import React from 'react'
import Routers from '../../Routes/Routers'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = () => {
  return (
    <>
        <Header />
        <div>
            <Routers />
        </div> 
        <Footer />
    </>
  )
}

export default Layout