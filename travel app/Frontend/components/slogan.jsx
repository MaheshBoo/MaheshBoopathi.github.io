import React from 'react';
import './slogan.css'
const Slogan= () => {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-content">
          <p className="section-subtitle">Call To Action</p>
          <h2 className="h2 section-title">Ready For Unforgettable Travel. Remember Us!</h2>
          <p className="section-text">
            No matter where in the world you want to go, We can grt you there.
          </p>
        </div>
        <button className="btn btn-secondary">Contact Us !</button>
      </div>
    </section>
  );
};

export default Slogan;
