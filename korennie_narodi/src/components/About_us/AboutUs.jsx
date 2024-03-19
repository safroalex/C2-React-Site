import React from 'react';
import './AboutUs.css'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import about_us from './../../images/about_us.jpg';
import line from './../../images/line.jpg';
import { useState } from 'react';




function AboutUs() {

  


  const [containerStyle5_1, setContainerStyle5_1] = useState({display: 'none'});
  // const [containerStyle5_2, setContainerStyle5_2] = useState({display: 'block'});
  
  const [containerStyle5_3, setContainerStyle5_3] = useState({display: 'none'});

  const [containerStyle5_5, setContainerStyle5_5] = useState({display: 'none'});



    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
  
    const toggleVisibility1 = () => {
      setIsVisible1(!isVisible1);
    };

    const toggleVisibility2 = () => {
      setIsVisible2(!isVisible2);
    };

    const toggleVisibility3 = () => {
      setIsVisible3(!isVisible3);
    };




  return (
    <>
      <Header/>
      <div className='AboutUs'>
        <div className='centerBlock subsection1'>
          <div>
            <h1>Наша команда</h1>
          </div>
          <div>
            <p>Мы, Арсений и Настя, студенты из Санкт-Петербурга, которые заинтересованы в теме экологии, экологических проблем и путей их решения.  Недавно мы узнали много нового о коренных народах России и о том, какие отношения с окружающим миром они выстраивают. </p>
          </div>
        </div>
        <div className='centerBlock subsection2'>
          <div>
            <img src={about_us} alt="" />
          </div>
          <div>
            <div className='txt1'>
              <p>“К сожалению, существует совсем <br/> небольшое количество информации о <br/> коренных народах нашей страны, их образе <br/> жизни, проблемах и трудностях, люди <br/> также знают очень мало о достаточно <br/> экологичных методах использования <br/> природных ресурсов коренными народами. <br/> Их любовь, забота и трепет по отношению <br/> к природе может научить всех нас <br/> правильному взаимодействию с природой, <br/> что в будущем станет отличным шагом к <br/> улучшению экологической ситуации не <br/> только в России, но и во всём мире!”</p>
            </div>
            <div>
              <p>Команда Russia Native</p>
            </div>
          </div>
        </div>
        <div className='centerBlock subsection3'>
          <div className='header2'>
            <p>взаимодействие с природой</p>
          </div>
          <div className='line-decoration'>
            <img src={line} alt="" />
            <img src={line} alt="" />
          </div>
          <div className='subtitle'>
            <div>
              <p>Справедливость и Партнерство</p>
            </div>
          </div>
          <div>
            <p>Мы отходим от антропоцентричного восприятия экологии, где природа важна только тем, как она влияет на человека. Вместо этого, вдохновляясь коренными народами, мы видим в природе партнера, а не объект эксплуатации. Наш подход основан на принципах экологической справедливости и партнерства, где <br/> природа — это живой субъект с собственными правами. Мы стремимся к <br/> гармонии между человеком и природой, признавая важность каждого для устойчивого будущего.</p>
          </div>
        </div>
        <div className='centerBlock subsection4'>
          <div className='innerCenterBlock'>
            <div className='faq-first'>
              <h4>faq</h4>
            </div>
            <div className='faq-second'>
              <div className='common-block'>
                <div className='options'>
                  <p>как можно помочь нашей организации?</p>
                  <div className='plus' onClick={() => {setContainerStyle5_1({display: 'block'}); toggleVisibility1(); }}>
                    {!isVisible1 && <div className='vertical-line1'></div>}
                    <div className='horizontal-line'></div>
                  </div>
                </div>
                <div>
                  <img src={line} alt="" />
                </div>
                <div>
                  {isVisible1 && <div className='return' style={containerStyle5_1}></div>}
                </div>
              </div>
              <div className='common-block'>
                <div className='options'>
                  <p>куда будет уходить моя помощь?</p>
                  <div className='plus' onClick={() => {setContainerStyle5_3({display: 'block'}); toggleVisibility2(); }}>
                    {!isVisible2 && <div className='vertical-line2'></div>}
                    <div className='horizontal-line'></div>
                  </div>
                </div>
                <div>
                  <img src={line} alt="" />
                </div>
                <div>
                  {isVisible2 && <div className='return' style={containerStyle5_3}></div>}
                </div>
              </div>
              <div className='common-block'>
                <div className='options'>
                  <p>как я могу с вами связаться?</p>
                  <div className='plus' onClick={() => {setContainerStyle5_5({display: 'block'}); toggleVisibility3(); }}>
                    {!isVisible3 && <div className='vertical-line3'></div>}
                    <div className='horizontal-line'></div>
                  </div>
                </div>
                <div>
                  <img src={line} alt="" />
                </div>
                <div className='p-decoration'>
                  {isVisible3 && <div className='return' style={containerStyle5_5}>
                    <p>Вы можете с нами связаться по почте <u>russianative@gmail.com</u></p>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AboutUs;
