import React from "react";
import './about.css';
import AboutBackground from "./images/back.png";
import women from './images/pic/women.png'
import meals from "./images/pic/lunch.png";
import plane from "./images/pic/plane.png";
import jetski from "./images/pic/people.png";
import room from "./images/pic/hotel.png";
import couple from "./images/pic/couple.png";
import car from "./images/pic/car.png";
import game from "./images/pic/game.png";
import ski from "./images/pic/alpine.png";
import hike from "./images/pic/climbing.png";
import sky from "./images/pic/skydiving.png";
import boat from "./images/pic/yatch.png";

import john from "./images/john.png";
import { AiFillStar } from "react-icons/ai";

const About = () => {
  const workInfoData = [
    {
      image: meals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: plane,
      title: "Flights",
      text: "We give best experience and compofteble ride in the airways",
    },
    {
      image: boat,
      title: "Boat Rides",
      text: "In your pack we give water rides in multiple places",
    },
    {
      image: room,
      title: "Hotels",
      text: "We provide best hotels for you in the place that you choose with better care that your likings",
    },
    {
      image: car,
      title: "Cars for Rent",
      text: "We provide cars for rent to our coustomers in their desiered destinations",
    },
    {
      image: ski,
      title: "Skiing",
      text: "This is for one who wants to play in the snow also it contains lot of fun",
    },
    {
      image: sky,
      title: "Paragliding",
      text: "This is specificaly for the fearless one's that want's fun and moments to hold",
    },
    {
      image: couple,
      title: "Couple packs",
      text: "we provide couple packs for newly married couple and one's who want to spend time with teir loved one's",
    },
    {
      image: jetski,
      title: "Water Games",
      text: "We provide water games in the packs where everyone can paly with their combaniens",
    },
    {
      image: hike,
      title: "Adventures",
      text: "We have the thriling parts in the packs where people feel like they are in a adventure",
    },
    {
      image: game,
      title: "Fun Games",
      text: "We provide lot of fun games with the package for you and your combaniens to enjoy",
    },


  ];

  return (
    <div>
      <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={women} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        We are more than just a travel agency
        </h1>
        <p className="primary-text">
        Welcome to Explore, where the world is your destination and every journey is an adventure waiting to unfold.
        your personal gateway to a world of discovery, exploration, and unforgettable experiences.we are At Explore,
        we understand that travel is not just about reaching a destination.it's about the journey, 
        </p>
        <p className="primary-text">
        The people you  meet, and the memories you create along the way.With a passion for travel and a commitment to excellence. 
        we strive to provide you with the best possible travel experiences tailored to your preferences.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
    


    <div className="work-section-wrapper">
    <div className="work-section-top">
      <p className="primary-subheading">List</p>
      <h1 className="primary-heading">What we Provide</h1>
      <p className="primary-text">
        In the below section we give the detailed specifications of list that we
        probide to our coustomers in the tourist packs accordingly.
      </p>
    </div>
    <div className="work-section-bottom">
      {workInfoData.map((data) => (
        <div className="work-section-info" key={data.title}>
          <div className="info-boxes-img-container">
            <img src={data.image} alt="" />
          </div>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      ))}
    </div>
  </div>


  <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={john} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>


  </div>
  );

};

export default About;