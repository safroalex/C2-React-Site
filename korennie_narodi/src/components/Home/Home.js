// HomePage.js
import React from 'react';
import Footer from "./../Footer/footer";
import Header from "./../Header/header";
import Main from "./../Main/main";
import Section1 from "./../Home/Section1/section1";
import Section2 from "./../Home/Section2/section2";
import Section3 from "./../Home/Section3/section3";
import Section4 from "./../Home/Section4/section4";
import Section5 from "./../Home/Section5/section5";
import SliderAndQuiz from './../SliderAndQuiz/SliderAndQuiz';

const HomePage = () => {
  return (
    <>
        <div className="all-content">
            
          <Header />
          
          <Main />

          <Section1 />

          <Section2 />

          <Section3 />

        </div>
        <div className="bottom-sections">

          <SliderAndQuiz/>

          <Section4 />

          <Section5 />
          
          <Footer />
        </div>
      
    </>
  );
}

export default HomePage;
