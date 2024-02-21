import React from 'react';
import './search.css'
const TourSearch = () => {
  return (
    <section className="tour-search">
      <div className="container">
        <form action="" className="tour-search-form">
          <div className="input-wrapper">
            <label htmlFor="destination" className="input-label">
              Search Destination*
            </label>
            <input
              type="text"
              name="destination"
              id="destination"
              required
              placeholder="Enter Destination"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="Payment" className="input-label">
              Budget*
            </label>
            <input
              type="text"
              name="amount"
              id="amount"
              required
              placeholder="Spending Money"
              className="input-field"
            />
          </div>
          <button type="submit" className="search-but-no">
            Search Now
          </button>
        </form>
      </div>
    </section>
  );
};
export default TourSearch;