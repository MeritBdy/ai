import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'   
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PopularVenues from '../components/PopularVenues'
function Home() {
  return (

   <div>
      <Navbar/>
      <Header />
      <PopularVenues />
      <h1>Home</h1>
      <Footer />
    </div>
    
  )
}

export default Home