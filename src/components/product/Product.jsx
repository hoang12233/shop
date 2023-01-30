import React, { useState } from "react"
import Catg from "../shops/Catg"
import Apple from "./Apple"
import './Style.css'


const Product = ({ pItems, addToCart }) => {
    return (
        <>
            <section className='shop background'>
                <div className='container d_flex'>
                    <Catg />
                    <div className='contentWidth'>
                        <div className='heading d_flex'>
                            <div className='heading-left row  f_flex'>
                                <h2>Apple</h2>
                            </div>
                            
                        </div>
                        <div className='product-content  grid1'>
                            <Apple pItems={pItems} addToCart={addToCart} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product