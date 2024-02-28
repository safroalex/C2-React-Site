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

const HomePage = () => {
  return (
    <>
        <div className="all-content">
            
        <Header />
        
        <Main />

        <Section1 />

        <Section2 />

        <Section3 />

        <Section4 />

        <div className="bottom-sections">
          <Section5 />
          
          <Footer />
        </div>
        
      </div>
    </>
  );
}

export default HomePage;
