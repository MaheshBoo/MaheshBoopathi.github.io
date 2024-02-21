import React from 'react'
import './App.css';
import Read , {Write} from './components/data.js'
import Destination from './pages/Destination.js';
import Home from './pages/Home.js';
import About from './pages/about.js';
import Indo from './pages/packs/Indonesia.js';
import Mal from './pages/packs/mal.js';
import Mad from './pages/packs/mad.js';
import Dub from './pages/packs/dub.js';
import It from './pages/packs/it.js';
import Chi from './pages/packs/chi.js';
import Kor from './pages/packs/kor.js';
import Cub from './pages/packs/cub.js';
import Swit from './pages/packs/swit.js';
import Fin from './pages/packs/fin.js';
import Scot from './pages/packs/scot.js';
import Mex from './pages/packs/mex.js';
import Lon from './pages/packs/lon.js';
import New from './pages/packs/new.js';
import Neth from './pages/packs/neth.js';
import Fra from './pages/packs/fra.js';
import Ire from './pages/packs/ire.js';
import {N2,N3,N4,N5,N6,N7,N8,N9,N10,N11,N12,N13,N14,N15,N16,N17,N18,N19,N20,N21,N22,N23,N24,N25,N26,N27,N28,N29,N30} from './pages/details/n1.js';
import {N31,N32,N33,N34,N35,N36,N37,N38,N39,N40,N41,N42,N43,N44,N45,N46,N47,N48,N49,N50,N51} from './pages/details/n1.js';
import { Route,  Routes } from 'react-router-dom';

import {Demo} from './pages/demo.js';
import Kc from './pages/details/det.js';
import LoginPage from './pages/login/Login.js';
import SignupPage from './pages/login/Signup.js';
import TourBookingForm from './pages/Booking.js'
import Cart from './book/bdata.js';

function App() {
  return (
    <Routes>
      <Route path='/read' element={<Read/>}/>
      <Route path='/write' element={<Write/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Destination' element={<Destination/>}/>
      <Route path='/tours' element={<Demo/>}/>
      <Route path='/booking' element={<TourBookingForm/>}/>
      <Route path='/Log' element={<LoginPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Indonesia' element={<Indo/>}/>
      <Route path='/mal' element={<Mal/>}/>
      <Route path='/mad' element={<Mad/>}/>
      <Route path='/dub' element={<Dub/>}/>
      <Route path='/it' element={<It/>}/>
      <Route path='/chi' element={<Chi/>}/>
      <Route path='/kor' element={<Kor/>}/>
      <Route path='/cub' element={<Cub/>}/>
      <Route path='/swit' element={<Swit/>}/>
      <Route path='/fin' element={<Fin/>}/>
      <Route path='/scot' element={<Scot/>}/>
      <Route path='/mex' element={<Mex/>}/>
      <Route path='/lon' element={<Lon/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/neth' element={<Neth/>}/>
      <Route path='/fra' element={<Fra/>}/>
      <Route path='/ire' element={<Ire/>}/>
      <Route path='/n1' element={<Kc/>}/>
      <Route path='/n2' element={<N2/>}/>
      <Route path='/n3' element={<N3/>}/>
      <Route path='/n4' element={<N4/>}/>
      <Route path='/n5' element={<N5/>}/>
      <Route path='/n6' element={<N6/>}/>
      <Route path='/n7' element={<N7/>}/>
      <Route path='/n8' element={<N8/>}/>
      <Route path='/n9' element={<N9/>}/>
      <Route path='/n10' element={<N10/>}/>
      <Route path='/n11' element={<N11/>}/>
      <Route path='/n12' element={<N12/>}/>
      <Route path='/n13' element={<N13/>}/>
      <Route path='/n14' element={<N14/>}/>
      <Route path='/n15' element={<N15/>}/>
      <Route path='/n16' element={<N16/>}/>
      <Route path='/n17' element={<N17/>}/>
      <Route path='/n18' element={<N18/>}/>
      <Route path='/n19' element={<N19/>}/>
      <Route path='/n20' element={<N20/>}/>
      <Route path='/n21' element={<N21/>}/>
      <Route path='/n22' element={<N22/>}/>
      <Route path='/n23' element={<N23/>}/>
      <Route path='/n24' element={<N24/>}/>
      <Route path='/n25' element={<N25/>}/>
      <Route path='/n26' element={<N26/>}/>
      <Route path='/n27' element={<N27/>}/>
      <Route path='/n28' element={<N28/>}/>
      <Route path='/n29' element={<N29/>}/>
      <Route path='/n30' element={<N30/>}/>
      <Route path='/n31' element={<N31/>}/>
      <Route path='/n32' element={<N32/>}/>
      <Route path='/n33' element={<N33/>}/>
      <Route path='/n34' element={<N34/>}/>
      <Route path='/n35' element={<N35/>}/>
      <Route path='/n36' element={<N36/>}/>
      <Route path='/n37' element={<N37/>}/>
      <Route path='/n38' element={<N38/>}/>
      <Route path='/n39' element={<N39/>}/>
      <Route path='/n40' element={<N40/>}/>
      <Route path='/n41' element={<N41/>}/>
      <Route path='/n42' element={<N42/>}/>
      <Route path='/n43' element={<N43/>}/>
      <Route path='/n44' element={<N44/>}/>
      <Route path='/n45' element={<N45/>}/>
      <Route path='/n46' element={<N46/>}/>
      <Route path='/n47' element={<N47/>}/>
      <Route path='/n48' element={<N48/>}/>
      <Route path='/n49' element={<N49/>}/>
      <Route path='/n50' element={<N50/>}/>
      <Route path='/n51' element={<N51/>}/>

      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>  
  )
}

export default App