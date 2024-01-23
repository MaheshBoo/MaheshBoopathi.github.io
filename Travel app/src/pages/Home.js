import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Main'
import Search from '../components/Search'
import Navbar from '../components/Navbar'
import PopularDestination from '../components/Populer'
import Slogan from '../components/slogan'
import Vel from '../components/vel'
import Gallery from '../components/gallery'
import Popdes from '../components/Popdes'
function Home() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Hero/>
        <Search/>
        <Popdes/>
        <PopularDestination/>
        <Vel/>
        <Gallery/>
        <Slogan/>
        <Footer/>
    </div>
  )
}

export default Home