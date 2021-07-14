import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about__container">
        <span className="idiom">
            "Freedom is the freedom to say that two plus two make four. 
            If that is granted, all else follows." - George Orwell, 1984
        </span>
        <span className="intro">
            이 영화 앱 페이지는 React 연습용으로 만든 것입니다.
            추가되었으면 하는 기능이나 아이디어가 있다면 자유롭게 알려주세요.
            최대한 반영하여 만들어보겠습니다.
            감사합니다.
        </span>
        <span className="contact">
            소스코드:
            <a href="https://github.com/KwonWonpyo/movie_app_2021">https://github.com/KwonWonpyo/movie_app_2021</a>
        </span>
    </div>
  );
}

export default About;