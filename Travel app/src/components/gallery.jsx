import React from 'react'
import './gallery.css';
import cuba1 from '../pages/images/cuba1.jpg';
import dubai1 from '../pages/images/dubai1.jpg';
import australia from '../pages/images/australia.jpg';
import ireland1 from '../pages/images/ireland1.jpg';
import korea1 from '../pages/images/korea1.jpg';
import scotland1 from '../pages/images/scotland1.jpg';
import africa1 from '../pages/images/africa1.jpg';
import korea from '../pages/images/korea.jpg';
import italy from '../pages/images/italy.jpg';
import maldivs from '../pages/images/maldivs.jpg';
import mexico from '../pages/images/mexico.jpg';

function Gallery() {
  return (
    <div>
      <p className='gal-line' />
      <h1 className='gal-text'>Gallery</h1>
      <p className='gal-line2' />
    <div className='gal-row' style={{marginTop:"30px"}}>
        <div className='gal-column'>
          <div class="gal-container">
            <img src={cuba1} alt='' style={{width:'100%'}}/>
            <div class="gal-text-block">
              <h4 style={{fontSize:"30px"}}>Cuba</h4>
            </div>
          </div>
          <div class="gal-container">
            <img src={dubai1} alt='' style={{width:'100%'}}/>
            <div class="gal-text-block">
              <h4 style={{fontSize:"30px"}}>Dubai</h4>
            </div>
          </div>
          <div class="gal-container">
            <img src={australia} alt='' style={{width:'100%'}}/>
            <div class="gal-text-block">
              <h4 style={{fontSize:"30px"}}>australia</h4>
            </div>
          </div>
        </div>


        <div className='gal-column'>
        <div class="gal-container">
            <img src={ireland1} alt='' style={{width:'100%'}}/>
            <div class="gal-text-block">
              <h4 style={{fontSize:"30px"}}>Ireland</h4>
            </div>
          </div>
          <div class="gal-container">
            <img src={korea1} alt='' style={{width:'100%'}}/>
            <div class="gal-text-block">
              <h4 style={{fontSize:"30px"}}>Korea</h4>
            </div>
          </div>
          <div class="gal-container">
            <img src={scotland1} alt='' style={{width:'100%'}}/>
            <div class="gal-text-block">
              <h4 style={{fontSize:"30px"}}>Scotland</h4>
            </div>
          </div>
        </div>


        <div className='gal-column'>
        <div class="gal-container">
            <img src={africa1} alt='' style={{width:'100%'}}/>
            <div class="gal-text-block">
              <h4 style={{fontSize:"30px"}}>Africa</h4>
            </div>
          </div>
          <div class="gal-container">
            <img src={korea} alt='' style={{width:'100%'}}/>
            <div class="gal-text-block">
              <h4 style={{fontSize:"30px"}}>Jhapan</h4>
            </div>
          </div>
        </div>


        <div className='gal-column'>
        <div class="gal-container">
            <img src={maldivs} alt='' style={{width:'100%'}}/>
            <div class="gal-text-block">
              <h4 style={{fontSize:"30px"}}>Maldivs</h4>
            </div>
          </div>
          <div class="gal-container">
            <img src={mexico} alt='' style={{width:'100%'}}/>
            <div class="gal-text-block">
              <h4 style={{fontSize:"30px"}}>Mexico</h4>
            </div>
          </div>
          <div class="gal-container">
            <img src={italy} alt='' style={{width:'100%'}}/>
            <div class="gal-text-block">
              <h4 style={{fontSize:"30px"}}>italy</h4>
            </div>
          </div>
        </div>


    </div>
    </div>
  )
}

export default Gallery

