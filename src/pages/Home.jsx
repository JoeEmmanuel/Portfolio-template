import React from 'react'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <section className=' relative px-4 lg:px-0 w-full h-screen'>
      <div className="w-[20%] h-[20%] rounded-full bg-black blur-3xl fixed top-52 -z-50"></div>
       <Hero />
    </section>
  )
}

export default Home
