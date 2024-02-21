import React, { useState } from 'react';
import axios from 'axios';
import './book.css';

const TourBookingForm = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [numberOfPeople, setNumberOfPeople] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [departureDate, setDepartureDate] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/bookings',{email,name,numberOfPeople,phoneNumber,age,gender,departureDate})
    .then(result=>{console.log(result)
    alert("Succesfully Registered")})
    .catch(err=>console.log(err))
  };

  return (
    <div className='booking-back'>
    <div className="booking-form-container">
      <form onSubmit={handleSubmit} className='booking-form-form'>
        <div>
          <label htmlFor="name" className='booking-form-label'>Name:</label>
          <input className='booking-form-input'
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="age"  className='booking-form-label'>Age:</label>
          <input className='booking-form-input'
            type="number"
            id="age"
            name="age"
            onChange={(e) => setAge(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="numberOfPeople"  className='booking-form-label'>Number of People:</label>
          <input className='booking-form-input'
            type="number"
            id="numberOfPeople"
            name="numberOfPeople"
            onChange={(e) => setNumberOfPeople(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="departureDate"  className='booking-form-label'>Departure Date:</label>
          <input className='booking-form-input'
            type="date"
            id="departureDate"
            name="departureDate"
            onChange={(e) => setDepartureDate(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="email"  className='booking-form-label'>Email:</label>
          <input className='booking-form-input'
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="phoneNumber"  className='booking-form-label'>Phone Number:</label>
          <input className='booking-form-input'
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="gender"  className='booking-form-label'>Gender:</label>
          <select className='booking-form-input'
            id="gender"
            name="gender"
            onChange={(e) => setGender(e.target.value)} 
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className='booking-form-button'>Book Now</button>
      </form>
    </div>
    </div>
  );
};

export default TourBookingForm;
