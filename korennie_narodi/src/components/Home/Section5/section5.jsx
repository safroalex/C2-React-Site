import React from 'react';
import './section5.css';
import yakut from './../../../images/yakut.jpg';
import { useTranslation } from 'react-i18next';

const Section5 = () => {
    const { t } = useTranslation();

    return (  
        <section>
            <div className='help-box'>
                <div className='help-outer-box'>
                    <div className='help-inner-box'>
                        <p>{t('help_title')}</p>
                        <p className='help-text'>{t('help_message')}</p>
                        <button className='desktop-btn'>{t('help_button')}</button>
                        <button className='mobile-btn'>{t('help_button_mobile')}</button>
                    </div>
                </div>
                <div className='help-img-box'>
                    <div className='yakut-box'>
                        <img src={yakut} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Section5;
