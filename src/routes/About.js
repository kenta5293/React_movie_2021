import React from 'react';
import './About.css';

function About(props) {
  console.log(props);
  return (
    <div className="about-box">
      <span>This page is About Page : </span>
      <span>I built it because I love Movie</span>
    </div>
  );
}

export default About;
