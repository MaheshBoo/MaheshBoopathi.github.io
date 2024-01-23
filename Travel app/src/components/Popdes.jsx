import React from 'react'
import '../pages/destination.css'
import maldivs from'../pages/images/maldivs1.jpg';
import netherlands from'../pages/images/nethetlands.jpg';
import finland from "../pages/images/finland.jpg"
function Popdes() {
  return (
    <div className="App"> 
        <p className='pop-line' style={{marginTop:"30px"}}/>
        <h2 className="h2 section-title">Popular Destinations</h2>
        <p className='pop-line'/>
    <main className="App-main">
        <section className="tour-section">
          <img className="tour-image" src={maldivs} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Maldives</h2>
          </div>
        </section>
        <section className="tour-section">
          <img className="tour-image" src={finland} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Finland</h2>
          </div>
        </section>
        <section className="tour-section">
          <img className="tour-image" src={netherlands} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Nether Land</h2>
          </div>
        </section>
    </main>
    </div>
  )
}

export default Popdes