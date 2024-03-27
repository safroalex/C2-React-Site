import React from 'react';
import './section4.css';
import quotes_1 from './../../../images/quotes_1.svg';
import quotes_2 from './../../../images/quotes_2.svg';
import line from './../../../images/line.jpg';
import { useTranslation } from 'react-i18next'; 

const Section4 = () => {
    const { t } = useTranslation(); 

    return (  
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
                    <div className='text-box4'>
                        <div className='text-box-outer2'>
                            <div className='text-box-inner'>
                                {/*  функция t для перевода */}
                                <p className='p1'>{t('section4_quote')}</p>
                            </div>
                        </div>
                        <div className='text-box-outer'>
                            <div className='text-box-inner'>
                                {/* Автор будет тот же, поэтому его можно не переводить */}
                                <p className='author2'>{t('section4_author')}</p>
                            </div>
                        </div>
                        <div className='text-box-outer-mobile'>
                            <div className='text-box-outer-mobile-1'>
                                <p>{t('section4_quote_mobile_1')}</p>
                                <p>{t('section4_quote_mobile_2')}</p>
                            </div>
                            <div className='text-box-outer-mobile-2'>
                                <p>{t('section4_author')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Section4;
