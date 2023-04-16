import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/main.css'
import ToTop from './ToTop'

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
      <ToTop/>
    </>
  )
}

export default Layout