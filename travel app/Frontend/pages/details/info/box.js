import React, { useState,useEffect } from 'react';
import './box.css'; 
import axios from 'axios';

const Dub1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=dubai-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(dub1=>(
        <div>
          <p>{dub1.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{dub1.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{dub1.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{dub1.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{dub1.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export default Dub1;


const Dub2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=dubai-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(dub2=>(
        <div>
          <p>{dub2.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{dub2.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{dub2.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{dub2.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{dub2.d4}</p>
          <p className='details-head'> Day-5</p>
          <p className='details-text'>{dub2.d5}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Dub2};


const Dub3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=dubai-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(dub3=>(
        <div>
          <p>{dub3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{dub3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{dub3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{dub3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{dub3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Dub3};



const Ino1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=indonesia-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(ino1=>(
        <div>
          <p>{Ino1.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{ino1.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{ino1.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{ino1.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{ino1.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Ino1};





const Ino2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=indonesia-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(ino2=>(
        <div>
          <p>{Ino2.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{ino2.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{ino2.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{ino2.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{ino2.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Ino2};




const Ino3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=indonesia-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(ino3=>(
        <div>
          <p>{Ino3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{ino3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{ino3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{ino3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{ino3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Ino3};





const Mal1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=maldivs-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(mal1=>(
        <div>
          <p>{mal1.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{mal1.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{mal1.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{mal1.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{mal1.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Mal1};



const Mal2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=maldivs-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(mal2=>(
        <div>
          <p>{mal2.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{mal2.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{mal2.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{mal2.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{mal2.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Mal2};


const Mal3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=maldivs-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(mal3=>(
        <div>
          <p>{mal3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{mal3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{mal3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{mal3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{mal3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Mal3};



const Chi1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=china-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi1=>(
        <div>
          <p>{chi1.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi1.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi1.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi1.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi1.d4}</p>
          <p className='details-head'> Day-5</p>
          <p className='details-text'>{chi1.d5}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Chi1};



const Chi2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=china-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi2=>(
        <div>
          <p>{chi2.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi2.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi2.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi2.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi2.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Chi2};




const Chi3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=china-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
          <p className='details-head'> Day-5</p>
          <p className='details-text'>{chi3.d5}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Chi3};


const Eur1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=europe-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
          <p className='details-head'> Day-5</p>
          <p className='details-text'>{chi3.d5}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Eur1};


const Eur2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=europe-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Eur2};




const Eur3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=europe-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Eur3};




const Mex1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=mexico-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
          <p className='details-head'> Day-5</p>
          <p className='details-text'>{chi3.d5}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Mex1};



const Mex2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=mexico-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Mex2};



const Mex3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=mexico-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
          <p className='details-head'> Day-5</p>
          <p className='details-text'>{chi3.d5}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Mex3};



const Cu1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=cuba-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Cu1};



const Cu2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=cuba-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Cu2};



const Cu3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=cuba-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Cu3};



const Ire1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=ireland-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Ire1};



const Ire2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=ireland-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Ire2};


const Ire3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=ireland-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Ire3};


const Mala1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=malaysia-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Mala1};



const Mala2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=malaysia-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Mala2};


const Mala3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=malaysia-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Mala3};


const Ko1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=korea-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Ko1};


const Ko2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=korea-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Ko2};



const Ko3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=korea-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Ko3};



const Swt1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=switzerland-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
          <p className='details-head'> Day-5</p>
          <p className='details-text'>{chi3.d5}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Swt1};



const Swt2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=switzerland-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Swt2};



const Swt3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=switzerland-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Swt3};


const Sco1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=scotland-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Sco1};


const Sco2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=scotland-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Sco2};



const Sco3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=scotland-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
          <p className='details-head'> Day-5</p>
          <p className='details-text'>{chi3.d5}</p>
          <p className='details-head'> Day-6</p>
          <p className='details-text'>{chi3.d6}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Sco3};


const Fin1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=finland-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
          <p className='details-head'> Day-5</p>
          <p className='details-text'>{chi3.d5}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Fin1};


const Fin2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=finland-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Fin2};



const Fin3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=finland-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Fin3};




const Lon1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=london-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Lon1};




const Lon2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=london-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Lon2};


const Lon3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=london-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Lon3};


const New1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=newzealand-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
          <p className='details-head'> Day-5</p>
          <p className='details-text'>{chi3.d5}</p>
          <p className='details-head'> Day-6</p>
          <p className='details-text'>{chi3.d6}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {New1};



const New2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=newzealand-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {New2};



const New3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=newzealand-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {New3};



const Net1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=netherland-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Net1};



const Net2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=netherland-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Net2};



const Net3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=netherland-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Net3};



const Fra1=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=france-1')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
          <p className='details-head'> Day-5</p>
          <p className='details-text'>{chi3.d5}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Fra1};


const Fra2=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=france-2')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(chi3=>(
        <div>
          <p>{chi3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{chi3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{chi3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{chi3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{chi3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Fra2};



const Fra3=()=> {

  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getDetails?catogory=france-3')
        .then(details => setDetails(details.data))
        .catch(err => console.log(err))
}, [])

  return (
   <div className='details-card'>
    <div className='details-text'>
    {details.map(fra3=>(
        <div>
          <p>{fra3.info}</p>
          <p className='details-head'> Day-1</p>
          <p className='details-text'>{fra3.d1}</p>
          <p className='details-head'> Day-2</p>
          <p className='details-text'>{fra3.d2}</p>
          <p className='details-head'> Day-3</p>
          <p className='details-text'>{fra3.d3}</p>
          <p className='details-head'> Day-4</p>
          <p className='details-text'>{fra3.d4}</p>
        </div>
    ))}
    </div>
   </div>
  );
};

export {Fra3};
