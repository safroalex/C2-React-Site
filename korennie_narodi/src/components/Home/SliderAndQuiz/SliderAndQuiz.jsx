import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderAndQuiz.css'
import { useState } from 'react';
import end_icon from "./../../../images/end-icon.png";
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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
      questionText: 'quiz_question1_text',
      answerOptions: [
          { answerText: 'quiz_question1_option1', isCorrect: false },
          { answerText: 'quiz_question1_option2', isCorrect: false },
          { answerText: 'quiz_question1_option3', isCorrect: true },
          { answerText: 'quiz_question1_option4', isCorrect: false },
      ],
  },
  {
      questionText: 'quiz_question2_text',
      answerOptions: [
          { answerText: 'quiz_question2_option1', isCorrect: true },
          { answerText: 'quiz_question2_option2', isCorrect: false },
          { answerText: 'quiz_question2_option3', isCorrect: false },
          { answerText: 'quiz_question2_option4', isCorrect: false },
      ],
  },
  {
      questionText: 'quiz_question3_text',
      answerOptions: [
          { answerText: 'quiz_question3_option1', isCorrect: true },
          { answerText: 'quiz_question3_option2', isCorrect: false },
          { answerText: 'quiz_question3_option3', isCorrect: false },
          { answerText: 'quiz_question3_option4', isCorrect: false },
      ],
  },
  {
      questionText: 'quiz_question4_text',
      answerOptions: [
          { answerText: 'quiz_question4_option1', isCorrect: false },
          { answerText: 'quiz_question4_option2', isCorrect: false },
          { answerText: 'quiz_question4_option3', isCorrect: false },
          { answerText: 'quiz_question4_option4', isCorrect: true },
      ],
  },
];




//             ...              ...                 ...                  ...             ...

const fact = [
  'fact_correct_answer',
  'fact_wrong_answer',
  'fact_indigenous_peoples_count',
  'fact_kereks_population',
];


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
          <h2>{t('check_your_knowledge')}</h2>
        </div>
      </div>
      <Slider className="slider" {...settings}>
        <div className='victorina'>
			    {showScore ? (
                <div className='score-section'>
                  <div>
                    <div><img src={end_icon} alt="" /></div>
                    <div><h2>{t('test_completed')}</h2></div>
                    <div><p>{t('correct_answers_count')} {score} {t('correct_answers_count_from')} {questions.length}</p></div>
                  </div>
              </div>
			    ) : (
				        <div>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>{t('quiz_question1')}</span>/{questions.length}
                        </div>
                        <div>
                            <div className='question-text'>
                              <p>{t(questions[0].questionText)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='answer-section'>
                        {questions[0].answerOptions.map((answerOption) => (
                          <button 
                          disabled={!isEnabled1}
                          className="btn1"
                          onClick={() => {
                            handleAnswerOptionClick(answerOption.isCorrect); 
                            setContainerStyle1({display: 'block'});
                            setEnabled1(false);
                            answerOption.isCorrect  ?  setCurrentIndex1(() => 2 % fact.length) : setCurrentIndex1(() => 1 % fact.length)
                          }}
                        >
                          {t(answerOption.answerText)}
                          </button>
                        ))}
                    </div>
                    <div style={containerStyle1} className="answers-block answer">
                      <div>
                        <p>{t(fact[currentIndex1])}</p>
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
                    <div><h2>{t('test_completed')}</h2></div>
                    <div><p>{t('correct_answers_count')} {score} {t('correct_answers_count_from')} {questions.length}</p></div>
                  </div>
              </div>
			    ) : (
				        <div>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>{t('quiz_question2')}</span>/{questions.length}
                        </div>
                        <div>
                            <div className='question-text'>
                              <p>{t(questions[1].questionText)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='answer-section'>
                        {questions[1].answerOptions.map((answerOption) => (
                          <button disabled={!isEnabled2}
                           className="btn2" 
                           onClick={() => {
                            handleAnswerOptionClick(answerOption.isCorrect) ; 
                            setContainerStyle2({display: 'block'}); 
                            setEnabled2(false); 
                            answerOption.isCorrect  ?  setCurrentIndex2(() => 3 % fact.length) : setCurrentIndex2(() => 1 % fact.length)
                          }}
                        >
                          {t(answerOption.answerText)}
                          </button>
                        ))}
                    </div>
                    <div style={containerStyle2} className="answers-block answer">
                      <div>
                        <p>{t(fact[currentIndex2])}</p>
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
                    <div><h2>{t('test_completed')}</h2></div>
                    <div><p>{t('correct_answers_count')} {score} {t('correct_answers_count_from')} {questions.length}</p></div>
                  </div>
              </div>
			    ) : (
				        <div>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>{t('quiz_question3')}</span>/{questions.length}
                        </div>
                        <div>
                            <div className='question-text'>
                              <p>{t(questions[2].questionText)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='answer-section'>
                        {questions[2].answerOptions.map((answerOption) => (
                          <button disabled={!isEnabled3} 
                          className="btn3"
                          onClick={() => {
                            handleAnswerOptionClick(answerOption.isCorrect); 
                            setContainerStyle3({display: 'block'}); 
                            setEnabled3(false); 
                            answerOption.isCorrect  ?  setCurrentIndex3(() => 0 % fact.length) : setCurrentIndex3(() => 1 % fact.length)
                          }}
                        >
                          {t(answerOption.answerText)}
                          </button>
                        ))}
                    </div>
                    <div style={containerStyle3} className="answers-block answer">
                      <div>
                        <p>{t(fact[currentIndex3])}</p>
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
                    <div><h2>{t('test_completed')}</h2></div>
                    <div><p>{t('correct_answers_count')} {score} {t('correct_answers_count_from')} {questions.length}</p></div>
                  </div>
                </div>
			    ) : (
				        <div>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>{t('quiz_question4')}</span>/{questions.length}
                        </div>
                        <div>
                            <div className='question-text'>
                              <p>{t(questions[3].questionText)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='answer-section'>
                        {questions[3].answerOptions.map((answerOption) => (
                          <button disabled={!isEnabled4}
                           className="btn4" 
                           onClick={() => {
                            handleAnswerOptionClick(answerOption.isCorrect); 
                            setContainerStyle4({display: 'block'}); 
                            setEnabled4(false); 
                            answerOption.isCorrect  ?  setCurrentIndex4(() => 0 % fact.length) : setCurrentIndex4(() => 1 % fact.length)
                          }}
                          >{t(answerOption.answerText)}</button>
                        ))}
                    </div>
                    <div style={containerStyle4} className="answers-block answer">
                      <div>
                        <p>{t(fact[currentIndex4])}</p>
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
