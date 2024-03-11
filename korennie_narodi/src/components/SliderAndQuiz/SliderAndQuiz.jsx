import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderAndQuiz.css'
import { useState } from 'react';
import end_icon from "./../../images/end-icon.png";


function SampleNextArrow(props) {
  const { className, style, onClick} = props;
  return (
    <div className="arrow2-box">
      <div style={{ display: "block", background: "transparent" }} onClick={onClick} className="arrow-2">
        <div></div>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrow1-box">
      <div style={{ display: "block", background: "transparent" }} onClick={onClick} className="arrow-1">
        <div></div>
      </div>
    </div>
  );
}







function SliderAndQuiz() {

// Beginnig of Slider


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };


//   Beginning of Quiz



const questions = [
    {
        questionText: 'А вы знаете, сколько коренных малочисленных народов проживает в России?',
        answerOptions: [
            { answerText: 'БОЛЬШЕ 50', isCorrect: false },
            { answerText: '193', isCorrect: false },
            { answerText: '47', isCorrect: true },
            { answerText: '29', isCorrect: false },
        ],
    },
    {
        questionText: 'В каком народе, согласно последним исследованиям, насчитывается всего 4 человека?',
        answerOptions: [
            { answerText: 'КЕРЕКИ', isCorrect: true },
            { answerText: 'ЮКАГИРЫ', isCorrect: false },
            { answerText: 'ЭНЦЫ', isCorrect: false },
            { answerText: 'ОРОЧИ', isCorrect: false },
        ],
    },
    {
        questionText: 'Варган, комус, хомус, комыс, аманхуур, тумран, зубанка - все эти названия обозначают один важный предмет для культурной жизни народов севера. А вы поняли, что это за предмет?',
        answerOptions: [
            { answerText: 'МУЗЫКАЛЬНЫЙ ИНСТРУМЕНТ', isCorrect: true },
            { answerText: 'ЛЮЛЬКА ДЛЯ РЕБЕНКА', isCorrect: false },
            { answerText: 'КУРИТЕЛЬНАЯ ТРУБКА', isCorrect: false },
            { answerText: 'СПЕЦИАЛЬНЫЙ ОБРЯДОВЫЙ НОЖ', isCorrect: false },
        ],
    },
    {
        questionText: 'Представители этого народа живут на два континента - Евразию и Северную Америку. Традиционное жилище “валкаран” представляет собой полуземлянку на основе каркаса из костей кита или плавника крылась сухой травой, шкурами, дерном. Известны как отличные охотники на китов, морских котиков, каланов и сивучей. В России проживают на территории Камчатского края и на Командорских островах. Что это за народ? ',
        answerOptions: [
            { answerText: 'ЭВЕНКИ', isCorrect: false },
            { answerText: 'АЛЕУТЫ', isCorrect: false },
            { answerText: 'СААМИ', isCorrect: false },
            { answerText: 'ЧУКЧИ', isCorrect: true },
        ],
    },
];



//             ...              ...                 ...                  ...             ...









const fact = ['Да, это правильный ответ', 'Нет, это неправильный ответ', 'Согласно "Единому перечню коренных малочисленных народов Российской \n Федерации" в России проживает 47 коренных малочисленных народов', 'Кереки. Во время Всероссийской переписи насления в 2021 в кереки себя записало \n всего 4 человека. Это правильный ответ'];


const [currentIndex1, setCurrentIndex1] = useState(0);
const [currentIndex2, setCurrentIndex2] = useState(0);
const [currentIndex3, setCurrentIndex3] = useState(0);
const [currentIndex4, setCurrentIndex4] = useState(0);

const [containerStyle1, setContainerStyle1] = useState({display: 'none'});
const [containerStyle2, setContainerStyle2] = useState({display: 'none'});
const [containerStyle3, setContainerStyle3] = useState({display: 'none'});
const [containerStyle4, setContainerStyle4] = useState({display: 'none'});



const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);


const [isEnabled1, setEnabled1] = useState(true);
const [isEnabled2, setEnabled2] = useState(true);
const [isEnabled3, setEnabled3] = useState(true);
const [isEnabled4, setEnabled4] = useState(true);


const handleAnswerOptionClick  = (isCorrect) => {


  if (isCorrect) {
    setScore(score + 1);
  }

  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    setShowScore(true);
  }

};

  return ( 
    <div className="slider-box">
      <div className="test_your_knowledge">
        <div>
          <h2>проверьте свои знания</h2>
        </div>
      </div>
      <Slider className="slider" {...settings}>
        <div className='victorina'>
			    {showScore ? (
                <div className='score-section'>
                  <div>
                    <div><img src={end_icon} alt="" /></div>
                    <div><h2>Вы завершили тест!</h2></div>
                    <div><p>Количество правильных ответов {score} из {questions.length}</p></div>
                  </div>
              </div>
			    ) : (
				        <div>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Вопрос 1</span>/{questions.length}
                        </div>
                        <div>
                            <div className='question-text'>
                              <p>{questions[0].questionText}</p>
                            </div>
                        </div>
                    </div>
                    <div className='answer-section'>
                        {questions[0].answerOptions.map((answerOption) => (
                          <button disabled={!isEnabled1} className="btn1" onClick={() => {handleAnswerOptionClick(answerOption.isCorrect) ; setContainerStyle1({display: 'block'}) ; setEnabled1(false) ; answerOption.isCorrect  ?  setCurrentIndex1(() => 2 % fact.length) : setCurrentIndex1(() => 1 % fact.length)}}>{answerOption.answerText}</button>
                        ))}
                    </div>
                    <div style={containerStyle1} className="answers-block answer">
                      <div>
                        <p>{fact[currentIndex1]}</p>
                      </div>
                    </div>
                </div>
			    )}
		    </div>
        <div className='victorina'>
			    {showScore ? (
                <div className='score-section'>
                  <div>
                    <div><img src={end_icon} alt="" /></div>
                    <div><h2>Вы завершили тест!</h2></div>
                    <div><p>Количество правильных ответов {score} из {questions.length}</p></div>
                  </div>
              </div>
			    ) : (
				        <div>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Вопрос 2</span>/{questions.length}
                        </div>
                        <div>
                            <div className='question-text'>
                              <p>{questions[1].questionText}</p>
                            </div>
                        </div>
                    </div>
                    <div className='answer-section'>
                        {questions[1].answerOptions.map((answerOption) => (
                          <button disabled={!isEnabled2} className="btn2" onClick={() => {handleAnswerOptionClick(answerOption.isCorrect) ; setContainerStyle2({display: 'block'}); setEnabled2(false); answerOption.isCorrect  ?  setCurrentIndex2(() => 3 % fact.length) : setCurrentIndex2(() => 1 % fact.length)}}>{answerOption.answerText}</button>
                        ))}
                    </div>
                    <div style={containerStyle2} className="answers-block answer">
                      <div>
                        <p>{fact[currentIndex2]}</p>
                      </div>
                    </div>
                </div>
			    )}
		    </div>
        <div className='victorina'>
			    {showScore ? (
                <div className='score-section'>
                  <div>
                    <div><img src={end_icon} alt="" /></div>
                    <div><h2>Вы завершили тест!</h2></div>
                    <div><p>Количество правильных ответов {score} из {questions.length}</p></div>
                  </div>
              </div>
			    ) : (
				        <div>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Вопрос 3</span>/{questions.length}
                        </div>
                        <div>
                            <div className='question-text'>
                              <p>{questions[2].questionText}</p>
                            </div>
                        </div>
                    </div>
                    <div className='answer-section'>
                        {questions[2].answerOptions.map((answerOption) => (
                          <button disabled={!isEnabled3} className="btn3" onClick={() => {handleAnswerOptionClick(answerOption.isCorrect) ; setContainerStyle3({display: 'block'}) ; setEnabled3(false) ; answerOption.isCorrect  ?  setCurrentIndex3(() => 0 % fact.length) : setCurrentIndex3(() => 1 % fact.length)}}>{answerOption.answerText}</button>
                        ))}
                    </div>
                    <div style={containerStyle3} className="answers-block answer">
                      <div>
                        <p>{fact[currentIndex3]}</p>
                      </div>
                    </div>
                </div>
			    )}
		    </div>
        <div className='victorina'>
			    {showScore ? (
                <div className='score-section'>
                  <div>
                    <div><img src={end_icon} alt="" /></div>
                    <div><h2>Вы завершили тест!</h2></div>
                    <div><p>Количество правильных ответов {score} из {questions.length}</p></div>
                  </div>
                </div>
			    ) : (
				        <div>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Вопрос 4</span>/{questions.length}
                        </div>
                        <div>
                            <div className='question-text'>
                              <p>{questions[3].questionText}</p>
                            </div>
                        </div>
                    </div>
                    <div className='answer-section'>
                        {questions[3].answerOptions.map((answerOption) => (
                          <button disabled={!isEnabled4} className="btn4" onClick={() => {handleAnswerOptionClick(answerOption.isCorrect) ; setContainerStyle4({display: 'block'}) ; setEnabled4(false) ; answerOption.isCorrect  ?  setCurrentIndex4(() => 0 % fact.length) : setCurrentIndex4(() => 1 % fact.length)}}>{answerOption.answerText}</button>
                        ))}
                    </div>
                    <div style={containerStyle4} className="answers-block answer">
                      <div>
                        <p>{fact[currentIndex4]}</p>
                      </div>
                    </div>
                </div>
			    )}
		    </div>
      </Slider>
    </div>
  );


}
 
export default SliderAndQuiz;
