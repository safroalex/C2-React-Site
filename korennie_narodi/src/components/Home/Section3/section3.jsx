import React from 'react';
import { useTranslation } from 'react-i18next';
import './section3.css';

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
    const { t } = useTranslation();

    return (  
        <section>
            <div className='content-box'>
                <div className='content1'>
                    <div className='unifying1'>
                        <div className='text-box1'>
                            <p className='desktop-text'>{t('indigenous_small_numbered_people_definition')}</p>
                            <div className='mobile-text1'>
                                <p>{t('indigenous_small_numbered_people_definition')}</p>
                            </div>
                            <a href="">{t('learn_more')}</a>
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
                            <p className='desktop-text'>{t('game_description')}</p>
                            <div className='mobile-text2'>
                                <p>{t('game_description_mobile')}</p>
                            </div>
                            <div className='a-content2'>
                                <a href="">{t('learn_more')}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content3'>
                    <div className='unifying3'>
                        <div className='text-box1'>
                            <p className='desktop-text'>{t('indigenous_peoples_challenges')}</p>
                            <div className='mobile-text3'>
                                <p>{t('indigenous_peoples_challenges_mobile')}</p>
                            </div>
                            <div className='mobile-a-3'>
                                <a href="">{t('learn_more')}</a>
                            </div>
                            <div className='desktop-text'>
                                <a href="">{t('learn_more')}</a>
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
                            <div className='text-box2 desktop-text'>
                                <div className='text-box-outer box-outer1'>
                                    <div className='text-box-inner'>
                                        <p className='p1'>{t('indigenous_teaching_quote1')}</p>
                                    </div>
                                </div>
                                <div className='text-box-outer'>
                                    <div className='text-box-inner'>
                                        <p className='p2'>{t('indigenous_teaching_quote2')}</p>
                                    </div>
                                </div>
                                <div className='text-box-outer'>
                                    <div className='text-box-inner'>
                                        <p className='p3'>{t('indigenous_teaching_quote3')}</p>
                                    </div>
                                </div>
                                <div className='text-box-outer'>
                                    <div className='text-box-inner'>
                                        <p className='author'>{t('author_arseny_karsakov')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mobile-text4'>
                                <div className='text4-1'>
                                    <p>{t('indigenous_teaching_quote1')} {t('indigenous_teaching_quote2')} {t('indigenous_teaching_quote3')}</p>
                                </div>
                                <div className='text4-2'>
                                    <p className='author'>{t('author_arseny_karsakov')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content5'>
                    <div className='subheading'>
                        <div>
                            <p>{t('our_policy_title')}</p>
                        </div>
                    </div>
                    <div className='common-box'>
                        <div className='block1'>
                            <img src={zeroOne} alt="" />
                            <div className='subcontainer'>
                                <p className='subcontainer-title'>{t('culture_preservation_title')}</p>
                                <div>
                                    <p>{t('culture_preservation_description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className='block1'>
                            <img src={zeroTwo} alt="" />
                            <div className="subcontainer">
                                <p className='subcontainer-title'>{t('educational_interaction_title')}</p>
                                <div>
                                    <p>{t('educational_interaction_description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className='block1'>
                            <img src={zeroThree} alt="" />
                            <div className="subcontainer">
                                <p className='subcontainer-title'>{t('website_information_title')}</p>
                                <div>
                                    <p>{t('website_information_description')}</p>
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