import React from 'react'
import './Header.css'
import Search from './Search'
import Head from './Head'
import Navbar from './Navbar'

const Header = ({cartItem}) => {
  return (
    <>
        <Head/>
        <Search cartItem={cartItem}/>
        <Navbar/>
    </>
  )
}

export default Header