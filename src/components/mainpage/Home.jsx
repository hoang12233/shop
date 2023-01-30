import React from 'react'
import Categories from './Categories'
import Slider from './Slider'

const Home = () => {
  return (
    <>
        <section className="">
            <div className="container d_flex">
                <Categories/>
                <Slider/>
            </div>
        </section>
    </>
  )
}

export default Home