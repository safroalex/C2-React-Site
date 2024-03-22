import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './Interviews.css';
import traveller from './../../images/Netflix-Life-4-2.jpg';
import deer from './../../images/feeds-the-deer.jpg';
import landscape3 from './../../images/landscape3.jpg';
import shack from './../../images/shack.jpg';
import sitting from './../../images/sitting_in_a_row.jpg';
import line from './../../images/line.jpg'
function Interviews() {
  return (
    <>
      <Header/>
      <div className='interviews-content'>
        <div className='interview-section-1'>
          <div className='interview-box-1_1'>
            <p>интервью с варварой василиной</p>
            <div className='line-div'>
              <img src={line} alt="" />
              <img src={line} alt="" />
            </div>
          </div>
          <div className='interview-box-1_2'>
            <div><img src={traveller} alt="" /></div>
            <div>
              <p>Варвара Василина, сотрудница этнографического сектора Хабаровского краевого музея им. Н.И. Гродекова. Варвара работает в своей должности чуть больше одного года (на момент февраля 2024 года) и на протяжении этого же времени изучает коренное население. В сфера интересов Варвары входят различные аспекты жизни коренных народов в особенности художественные промыслы, нематериальное культурное наследие и шаманизм.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='interview-box-2_1'>
            <div>
              <h2>культура и образ жизни</h2>
              <p>Освещая культурные и хозяйственные особенности коренных народов, Варвара акцентировала внимание на их тесной связи с природой. Преобладающие виды деятельности – рыболовство и охота – обусловлены естественными условиями региона. "Рыба - второй хлеб" для местных жителей.</p>
            </div>
            <img className='deer' src={deer} alt="" />
            <div className='interview-box-2_2'>
              <h2>гармония с природой</h2>
              <p>Взаимоотношения с природой для коренных народов основаны на гармонии, а не на борьбе за выживание. Варвара подчеркивает, что со временем коренные народы разработали систему присваивающего хозяйства, позволяющую получать ресурсы без ущерба для окружающей среды.</p>
            </div>
            <img className='landscape3' src={landscape3} alt="" />
            <div className='interview-box-2_3'>
              <h2>современные вызовы</h2>
              <p>Не обошла стороной Варвара и проблемы, с которыми сталкиваются коренные народы сегодня. Разрушение традиционных угодий и земель для освоения природных ресурсов, сложности с занятием рыболовством из-за коммерческой деятельности и ограничения на охотничий промысел – все это угрожает устойчивому развитию коренных народностей.</p>
            </div>
            <img className='sitting' src={sitting} alt="" />
            <img className='shack' src={shack} alt="" />
          </div>
        </div>
        <div className='interview-box-3_1'>
          <h2>заключение</h2>
          <div className='line-div'>
            <img className='line-width' src={line} alt="" />
            <img src={line} alt="" />
          </div>
          <div>
            <p>Варвара подчеркнула, что, несмотря на проникновение современных технологий, коренные народы прилагают значительные усилия для сохранения своих традиций и образа жизни. Это интервью открывает важный взгляд на культурное и социальное значение коренных народов России и подчеркивает необходимость их поддержки и сохранения.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Interviews;
