import React from 'react';
import './main.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h2 className="h1 hero-title">IT'S TIME TO EXPLORE THE WORLD</h2>

        <p className="hero-text">
          Don't Watch Life Go By - Get Out There And Live It!
        </p>
        <div className="btn-group">
          <Link to='/tours'>
            <button className="main-but">Book now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
