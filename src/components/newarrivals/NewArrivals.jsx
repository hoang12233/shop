import React from 'react'
import Cart from './Cart.jsx'
import './Style.css'


const NewArrivals = () => {
    return (
        <>
            <section className='newarrivals background'>
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                            <h2>new arrivals</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className='fa fa-caret-right'></i>
                        </div>
                    </div>
                    <Cart/>
                </div>
            </section>
        </>
    )
}

export default NewArrivals