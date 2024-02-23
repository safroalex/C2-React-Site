import './section3.css'
import people from './../../../images/people.jpg'
import game from './../../../images/game.jpg'
import meeting from './../../../images/meeting.jpg'
import quotes_1 from './../../../images/quotes_1.svg'
import quotes_2 from './../../../images/quotes_2.svg'
import line from './../../../images/line.jpg'
import zeroOne from './../../../images/01.svg'
import zeroTwo from './../../../images/02.svg'
import zeroThree from './../../../images/03.svg'

const Section3 = () => {
    return (  
        <section>
            <div className='content-box'>
                <div className='content1'>
                    <div className='unifying1'>
                        <div className='text-box1'>
                            <p>Согласно российскому законодательству коренной малочисленный народ - это тот, который расселен на территории расселения своих предков, наследуют традиционные методы хозяйстования и чья численность не превышает 50 000 человек</p>
                            <a href="">узнать больше</a>
                        </div>
                        <div className='box-img1'>
                            <img src={people} alt="" />
                        </div>
                    </div>
                </div>
                <div className='content2'>
                    <div className='unifying2'>
                        <div className='box-img1'>
                            <img src={game} alt="" />
                        </div>
                        <div className='text-box1'>
                            <p>Во время игры в хээр шааглан участник должен разбить ладонью хребтовую кость быка или коровы. Чтобы суметь сломать кость, используется специальная техника :делается несколько пробных ударов, чтобы “почувствовать” кость, и потом тыльной стороной ладони участник или участница наносят финальный самый сильный удар по кости. Эта игра - часть традиционной культуры бурятов</p>
                            <a href="">узнать больше</a>
                        </div>
                    </div>
                </div>
                <div className='content3'>
                    <div className='unifying3'>
                        <div className='text-box1'>
                            <p>Сложность сохранения языка, исчезновение древних традиций, угроза национальным культурам, разрушение экосистем - с этими проблемами сталкиваются коренные народы не только России, но и других стран. В 1992 году в ООН была принята “Декларация о правах лиц, принадлежащих к национальным или этническим, религиозным и языковым меньшинствам”, закреплявшая права меньшинств в многосоставных государствах.</p>
                            <div>
                                <a href="">узнать больше</a>
                            </div>
                        </div>
                        <div className='box-img1'>
                            <img src={meeting} alt="" />
                        </div>
                    </div>
                </div>
                <div className='content4'>
                    <div className='unifying4'>
                        <div className='quotation'>
                            <div className='decoration1'>
                                <div className='line-box'>
                                    <img src={line} alt="" />
                                </div>
                                <img src={quotes_1} alt="" />
                            </div>
                            <div className='decoration2'>
                                <img src={quotes_2} alt="" />
                                <div className='line-box'>
                                    <img src={line} alt="" />
                                </div>
                            </div>
                            <div className='text-box2'>
                                <div className='text-box-outer'>
                                    <div className='text-box-inner'>
                                        <p className='p1'>Коренные народы России учат нас жить в гармонии</p>
                                    </div>
                                </div>
                                <div className='text-box-outer'>
                                    <div className='text-box-inner'>
                                        <p className='p2'> с природой, демонстрируя уважение к земле и</p>
                                    </div>
                                </div>
                                <div className='text-box-outer'>
                                    <div className='text-box-inner'>
                                        <p className='p3'> устойчивость для будущих поколений.</p>
                                    </div>
                                </div>
                                <div className='text-box-outer'>
                                    <div className='text-box-inner'>
                                        <p className='author'>Карсаков Арсений</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content5'>
                    <div className='subheading'>
                        <div>
                            <p>наша политика</p>
                        </div>
                    </div>
                    <div className='common-box'>
                        <div className='block1'>
                            <img src={zeroOne} alt="" />
                            <div className='subcontainer'>
                                <p>Сохранение Культуры</p>
                                <div>
                                    <p>Мы стремимся повышать осведомленность о коренных народах России и их экологических практиках, уважая их традиции и права. Наша задача - распространять знания об устойчивом взаимодействии с природой, опираясь на голоса и перспективы этих народов.</p>
                                </div>
                            </div>
                        </div>
                        <div className='block1'>
                            <img src={zeroTwo} alt="" />
                            <div className="subcontainer">
                                <p>Образовательное Взаимодействие</p>
                                <div>
                                    <p>Через интерактивную викторину мы стимулируем изучение экологических практик коренных народов, способствуя глубокому пониманию и уважению к их культурам. Образование считаем ключом к экологической устойчивости.</p>
                                </div>
                            </div>
                        </div>
                        <div className='block1'>
                            <img src={zeroThree} alt="" />
                            <div className="subcontainer">
                                <p>Информация на Сайте</p>
                                <div>
                                    <p>Созданный с целью освещения жизни коренных народов, наш сайт обязуется предоставлять актуальную и уважительную информацию, отражающую последние исследования. Мы стремимся к улучшению экологической ситуации через расширение знаний о коренных культурах и практиках.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Section3;