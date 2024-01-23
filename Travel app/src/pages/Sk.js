import React from 'react'
import '../components/populer.css'
import './sk.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faUsers ,faClock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
function Sk() {
  return (
    <div>
      <h1 className='mah-header'>Tour Packages</h1>
    <h2 className='mah-cho'>Choose Your Destination</h2>
    <p className='mah-line2'style={{width:"1000px"}}/>
    <p className='mah-line2' style={{width:"700px" , marginLeft:"400px"}}/>
    <div class="mah-pill-nav">
      <Link to="/">Home</Link>
      <a class="active">All</a>
      <Link to="/Indonesia">Indonesia</Link>
      <Link to="/mad">Maldivs</Link>
      <Link to="/dub">Dubai</Link>
      <Link to="/it">Italy</Link>
      <Link to="/mal">Malaysia</Link>
      <Link to="/chi">China</Link>
      <Link to="/kor">Korea</Link>
      <Link to="/cub">Cuba</Link>
      <Link to="/swit">Switzerland</Link>
      <Link to="/fin">Finland</Link>
      <Link to="/scot">Scotland</Link>
      <Link to="/mex">Mexico</Link>
      <Link to="/lon">London</Link>
      <Link to="/new">New Zeland</Link>
      <Link to="/neth">NetherLand</Link>
      <Link to="/fra">France</Link>
      <Link to="/ire">Ireland</Link>
    </div>
        <section className="pop" id="destination">
      <div className="container">
        <ul className="pop-list">

{/*=======================================================
----------------------Dubai----------------------------
=========================================================
*/}

          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/d1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>30,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">BurjKalifa</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 32</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Abudabi,Dubai</p>
                <button className='det'><Link to="/n1">Details</Link></button>
              </div>
            </div>
          </li>


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/d2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>32,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Seven Star Hotel</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 40</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Abudabi,Dubai</p>
                <button className='det'><Link to="/n2">Details</Link></button>
              </div>
            </div>
          </li>


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/d3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>23,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Desert Ride</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 20</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Abudabi,Dubai</p>
                <button className='det'><Link to="/n3">Details</Link></button>
              </div>
            </div>
          </li>

{/*=====================================================
-----------------------China-----------------------------
==========================================================
*/}

          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/c1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>32,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Masive Town</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 26</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Honk Kong,China</p>
                <button className='det'><Link to="/n16">Details</Link></button>
              </div>
            </div>
          </li>



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/c2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>28,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Sholin Temple</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 3D/2N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 20</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Kiyoto,China</p>
                <button className='det'><Link to="/n17">Details</Link></button>
              </div>
            </div>
          </li>



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/c3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>34,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">bampoo forest</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 40</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Shankai,China</p>
                <button className='det'><Link to="/n18">Details</Link></button>
              </div>
            </div>
          </li>

{/*====================================================
-----------------------Cuba-----------------------------
========================================================
*/}

          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/cu1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>40,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Vintage Town</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 34</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Relipan,Cuba</p>
                <button className='det'><Link to="/n22">Details</Link></button>
              </div>
            </div>
          </li>



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/cu2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>32,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Siri chatigeral</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 3D/2N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Cukava,Cuba</p>
                <button className='det'><Link to="/n23">Details</Link></button>
              </div>
            </div>
          </li>



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/cu3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>24,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Netural ride</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 3D/2N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 20</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Lavaka,Cuba</p>
                <button className='det'><Link to="/n24">Details</Link></button>
              </div>
            </div>
          </li>

{/*=======================================================
-----------------------France-----------------------------
==========================================================
*/}

          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/f1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>76,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Natinal Musiam</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 34</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />niedan,France</p>
                <button className='det'><Link to="/n46">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/f2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>67,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">lake castle</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 35</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />vendi,France</p>
                <button className='det'><Link to="/n47">Details</Link></button>
              </div>
            </div>
          </li>





          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/f3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>73,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">laku cathegeral</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/>40</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />fica,France</p>
                <button className='det'><Link to="/n48">Details</Link></button>
              </div>
            </div>
          </li>


{/*========================================================
-----------------------Finland-----------------------------
==============================================================
*/}


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/fi1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>73,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">skiing</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 34</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />duka,Finland</p>
                <button className='det'><Link to="/n28">Details</Link></button>
              </div>
            </div>
          </li>





          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/fi2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>60,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Fog cape</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 45</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />vency,Finland</p>
                <button className='det'><Link to="/n29">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/fi3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>65,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">fronzon town</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />lasi,Finland</p>
                <button className='det'><Link to="/n30">Details</Link></button>
              </div>
            </div>
          </li>

{/*======================================================
-----------------------Italy-----------------------------
=========================================================
*/}


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/i1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>78,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">love lake</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 6D/5N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 34</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />ranco,Italy</p>
                <button className='det'><Link to="/n10">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/i2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>72,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">vente kastel</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 43</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />masco,Italy</p>
                <button className='det'><Link to="/n11">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/i3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>62,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">scant tower</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />alasca,Italy</p>
                <button className='det'><Link to="/n12">Details</Link></button>
              </div>
            </div>
          </li>

{/*==========================================================
-----------------------Indonesia-----------------------------
==============================================================
*/}


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/in1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>35,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Kiwi temple</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 42</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />kiwi,Indonesia</p>
                <button className='det'><Link to="/n4">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/in2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>35,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Paradise land</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 50</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />racon,Indonesia</p>
                <button className='det'><Link to="/n5">Details</Link></button>
              </div>
            </div>
          </li>



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/in3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>32,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">versa temple</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 40</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />sampi,Indonesia</p>
                <button className='det'><Link to="/n6">Details</Link></button>
              </div>
            </div>
          </li>


{/*========================================================
-----------------------Ireland-----------------------------
===========================================================
*/}


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/ir1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>60,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">vally flow</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 34</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />endi,IreLand</p>
                <button className='det'><Link to="/n49">Details</Link></button>
              </div>
            </div>
          </li>


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/ir2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>52,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">lake town</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />zeka,IreLand</p>
                <button className='det'><Link to="/n50">Details</Link></button>
              </div>
            </div>
          </li>



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/ir3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>45,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">frozon lake</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 25</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />ensiv,IreLand</p>
                <button className='det'><Link to="/n51">Details</Link></button>
              </div>
            </div>
          </li>


{/*======================================================
-----------------------Korea-----------------------------
=========================================================
*/}


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/k1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>38,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">buddha temple</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 35</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />lovasa,Korea</p>
                <button className='det'><Link to="/n19">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/k2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>50,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Sikai Scap</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 46</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />licovo,Korea</p>
                <button className='det'><Link to="/n20">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/k3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>43,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">massy falls</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 45</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />karaku,Korea</p>
                <button className='det'><Link to="/n21">Details</Link></button>
              </div>
            </div>
          </li>


{/*=========================================================
-----------------------Malaysia-----------------------------
============================================================
*/}


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/kl1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>36,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">twin tower</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/>40</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />kola lunbur,Malaysia</p>
                <button className='det'><Link to="/n13">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/kl2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>30,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Murugan temple</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 40</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Kola lumbur,Malaysia</p>
                <button className='det'><Link to="/n14">Details</Link></button>
              </div>
            </div>
          </li>



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/kl3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>24,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">budda vas</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />kilvan,Malaysia</p>
                <button className='det'><Link to="/n15">Details</Link></button>
              </div>
            </div>
          </li>


{/*=======================================================
-----------------------London-----------------------------
=========================================================
*/}


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/l1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>62,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Town Square</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 42</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />luka,London</p>
                <button className='det'><Link to="/n37">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/l2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>58,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">castle town</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 40</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />skinpa,London</p>
                <button className='det'><Link to="/n38">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/l3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>73,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Kenapa Musiam</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 50</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />san fransico,London</p>
                <button className='det'><Link to="/n39">Details</Link></button>
              </div>
            </div>
          </li>


{/*========================================================
-----------------------Mexico-----------------------------
===========================================================
*/}


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/m1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>55,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">vins Musiam</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />rica,Mexico</p>
                <button className='det'><Link to="/n34">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/m2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>43,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Caba</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 42</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} /> taka,Mexico</p>
                <button className='det'><Link to="/n35">Details</Link></button>
              </div>
            </div>
          </li>





          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/m3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>55,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">hilf river</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 50</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />vali,Mexico</p>
                <button className='det'><Link to="/n36">Details</Link></button>
              </div>
            </div>
          </li>


{/*========================================================
-----------------------Maldivs-----------------------------
=============================================================
*/}


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/ma1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>63,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">down town</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} /> Maldivs,Berumuda</p>
                <button className='det'><Link to="/n7">Details</Link></button>
              </div>
            </div>
          </li>

          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/ma2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>35,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">ocean resort</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 22</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} /> Maldivs,Berumuda</p>
                <button className='det'><Link to="/n8">Details</Link></button>
              </div>
            </div>
          </li>


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/ma3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>45,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Snake Land</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} /> Maldivs,Berumuda</p>
                <button className='det'><Link to="/n9">Details</Link></button>
              </div>
            </div>
          </li>


{/*=============================================================
-----------------------New Zealand-----------------------------
================================================================
*/}


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/n1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>53,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Sky Park</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 50</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />kaku,New zealand</p>
                <button className='det'><Link to="/n40">Details</Link></button>
              </div>
            </div>
          </li>

          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/n2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>62,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Silent River</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 56</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Raps,New zealand</p>
                <button className='det'><Link to="/n41">Details</Link></button>
              </div>
            </div>
          </li>


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/n3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>54,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Gigan Lake</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 42</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />kidu,New zealand</p>
                <button className='det'><Link to="/n42">Details</Link></button>
              </div>
            </div>
          </li>


{/*===========================================================
-----------------------Netherland-----------------------------
==============================================================
*/}


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/ne1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>52,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Flower Garden</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />indku,Netherlands</p>
                <button className='det'><Link to="/n43">Details</Link></button>
              </div>
            </div>
          </li>


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/ne2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>46,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Parfi</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 40</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />kichica,Netherlands</p>
                <button className='det'><Link to="/n44">Details</Link></button>
              </div>
            </div>
          </li>


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/ne3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>52,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">River City</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 20</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />kanpu,Netherland</p>
                <button className='det'><Link to="/n45">Details</Link></button>
              </div>
            </div>
          </li>


{/*=========================================================
-----------------------Scotland-----------------------------
============================================================
*/}



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/s1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>72,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Ice Peak</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 20</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Memaid,Scotland</p>
                <button className='det'><Link to="/n31">Details</Link></button>
              </div>
            </div>
          </li>



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/s2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>45,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Vintage cas</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />kangus,Scotland</p>
                <button className='det'><Link to="/n32">Details</Link></button>
              </div>
            </div>
          </li>



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/s3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>52,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Castle</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 50</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Nerg,Scotland</p>
                <button className='det'><Link to="/33">Details</Link></button>
              </div>
            </div>
          </li>


{/*==============================================================
-----------------------Switcherland------------------------------
=================================================================
*/}


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/sw1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>42,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Cloud View</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Kelpas,Switzerland</p>
                <button className='det'><Link to="/n25">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/sw2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>50,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Ice World</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 32</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Kenpa,Switzerland</p>
                <button className='det'><Link to="/n26">Details</Link></button>
              </div>
            </div>
          </li>



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('./tour/sw3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>76,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Leher Town</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 6D/5N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Rozo,Switzerland</p>
                <button className='det'><Link to="/n27">Details</Link></button>
              </div>
            </div>
          </li>


        </ul>
      </div>
    </section>
    </div>
  )
}

export default Sk