import React, { useState } from "react"
import Pdata from './Pdata'

const Apple = ({ pItems, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <>
            {pItems.map((pItems, index) => {
                return (
                        <div className='box' key={index}>
                            <div className='product mtop'>
                                <div className='img'>
                                    <span className='discount'>{pItems.discount}% Off</span>
                                    <img src={pItems.cover} alt='' />
                                    <div className='product-like'>
                                        <label>{count}</label> <br />
                                        <i className='fa-regular fa-heart' onClick={increment}></i>
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <h3>{pItems.name}</h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4>${pItems.price}.00 </h4>
                                        {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                                        <button onClick={() => addToCart(pItems)}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            })}
        </>
    )
}

export default Apple