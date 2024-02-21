import React from 'react'
import { Link } from 'react-router-dom';
import './destination.css'
import indonesia from'./images/indonesia.jpg'
import dubai from'./images/dubai.jpg';
import france from'./images/france.jpg';
import italy from'./images/italy.jpg';
import maldivs from'./images/maldivs.jpg';
import malaysia from'./images/malaysia.jpg';
import finland from "./images/finland.jpg"
import swichzerland from'./images/swichzerland.jpg';
import mexico from'./images/mexico.jpg';
import korea from'./images/korea.jpg';
import china from'./images/china.jpg';
import cuba from'./images/cuba.jpg';
import scotland from'./images/scotland.jpg';
import london from'./images/london.jpg';
import newzeland from'./images/newzeland.jpg';
import netherlands from'./images/nethetlands.jpg';

function Destination() {
  return (
    <div className="App">
      <header className="tour-header">
        <h1>ALL Destinations</h1>
      </header>
      <main className="App-main">
      <Link to='/Indonesia'><section className="tour-section">
          <img className="tour-image" src={indonesia} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Indonesia</h2>
          </div>
        </section></Link> 

      <Link to='/mad'><section className="tour-section">
          <img className="tour-image" src={maldivs} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Maldives</h2>
          </div>
        </section></Link>

      <Link to='/dub'><section className="tour-section">
          <img className="tour-image" src={dubai} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Dubai</h2>
          </div>
        </section></Link> 

      <Link to='/fra'><section className="tour-section">
          <img className="tour-image" src={france} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>France</h2>
          </div>
        </section></Link> 

      <Link to='/it'><section className="tour-section">
          <img className="tour-image" src={italy} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Italy</h2>
          </div>
        </section></Link>  

      <Link to='/mal'><section className="tour-section">
          <img className="tour-image" src={malaysia} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Malaysia</h2>
          </div>
        </section></Link>

      <Link to='/chi'><section className="tour-section">
          <img className="tour-image" src={china} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>China</h2>
          </div>
        </section></Link> 

      <Link to='/kor'><section className="tour-section">
          <img className="tour-image" src={korea} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Korea</h2>
          </div>
        </section></Link>

      <Link to='/cub'><section className="tour-section">
          <img className="tour-image" src={cuba} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Cuba</h2>
          </div>
        </section></Link> 

      <Link to='/swit'><section className="tour-section">
          <img className="tour-image" src={swichzerland} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Switcherland</h2>
          </div>
        </section></Link> 

      <Link to='/fin'><section className="tour-section">
          <img className="tour-image" src={finland} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Finland</h2>
          </div>
        </section></Link> 

      <Link to='/scot'><section className="tour-section">
          <img className="tour-image" src={scotland} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Scotland</h2>
          </div>
        </section></Link> 

      <Link to='/mex'><section className="tour-section">
          <img className="tour-image" src={mexico} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Mexico</h2>
          </div>
        </section></Link> 

      <Link to='/lon'><section className="tour-section">
          <img className="tour-image" src={london} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>London</h2>
          </div>
        </section></Link> 

      <Link to='/new'><section className="tour-section">
          <img className="tour-image" src={newzeland} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>New Zeland</h2>
          </div>
        </section></Link> 

      <Link to='/neth'><section className="tour-section">
          <img className="tour-image" src={netherlands} alt='indonesia'/>
          <div className='tour-overlay'>
            <h2 className='tour-text'>Nether Land</h2>
          </div>
        </section></Link> 

      </main>
    </div>
  )
}

export default Destination