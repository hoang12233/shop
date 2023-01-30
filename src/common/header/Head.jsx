import React from 'react'
import logo1 from '../../assets/img/icons8-great-britain-48.png'

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className="container d_flex">
          <div className="left row">
            <i className='fa fa-phone'></i>
            <label htmlFor="">+123456789</label>
            <i className='fa fa-envelope'></i>
            <label htmlFor="">example@gmail.com</label>
          </div>
          <div className="right row RText">
            <label htmlFor="">Theme FAQ's</label>
            <label htmlFor="">Need Helps</label>
            <span className='logo'>
              <img src={logo1} alt="" />
            </span>
            <label htmlFor="">EN</label>
            <span className='logo'>
              <img src={logo1} alt="" />
            </span>
            <label htmlFor="">USA</label>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Head