import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../book/bd.css'

const Cart = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/getBookings')
      .then(response => setBookings(response.data))
      .catch(err => console.log(err))
  }, []);

  const removeFromCart = (index) => {
    const updatedBookings = [...bookings];
    updatedBookings.splice(index, 1);
    setBookings(updatedBookings);
  };

  const CartComponent = ({ bookings, removeFromCart }) => {
    return (
      <div className='cart'>
        {bookings.map((tour, index) => (
          <div key={index} className='cart-cont'>
            <h3>{tour.name}</h3>
            <p>{tour.email}</p>
            <p>{tour.numberOfPeople}</p>
            <p>{tour.phoneNumber}</p>
            <p>{tour.departureDate}</p>
            <p>{tour.gender}</p>
            <p>{tour.age}</p>
            <button className='cart-but' onClick={() => removeFromCart(index)}>cancle Booking</button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1>Booked Tours</h1>
      <CartComponent bookings={bookings} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Cart;
