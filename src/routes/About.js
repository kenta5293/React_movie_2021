import React from 'react';
import './About.css';

function About(props) {
  console.log(props);
  return (
    <div className="about-box">
      <span>
        It is <strong>About</strong> Page
      </span>
      <div>
        <span>안녕하세요!</span>
        <span>
          노마드코더 강의를 따라 만든 <strong>React</strong>를 이용한 영화 웹서비스 입니다!
        </span>
      </div>
    </div>
  );
}

export default About;
