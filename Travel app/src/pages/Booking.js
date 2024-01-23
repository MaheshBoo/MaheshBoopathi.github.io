import React, { useState } from 'react';
import './book.css'
const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    persons: '',
    departureDate: '',
    returnDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission, e.g., send data to the server
    console.log('Form submitted:', formData);
  };

  return (
    <div className='bg-img'>
    <div className='centered-container'>
    <div className='book-form'>
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input className='book-input'
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input className='book-input'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        No.Of Persons:
        <input className='book-input'
          type="number"
          name="no.of persons"
          value={formData.persons}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Departure Date:
        <input className='book-input'
          type="date"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Return Date:
        <input className='book-input'
          type="date"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
    </div>
  );
};

export default BookingForm;
