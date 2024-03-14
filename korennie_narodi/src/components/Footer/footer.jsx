import React from 'react';
import './footer.css';
import landscape1 from './../../images/landscape1.jpg';
import landscape2 from './../../images/landscape2.jpg';
import { useTranslation } from 'react-i18next'; // Импортируйте useTranslation

const Footer = () => {
    const { t } = useTranslation(); // Используйте хук useTranslation

    return ( 
        <footer>
            <div className='footer-box'>
                <div className='footer-text'>
                    <div className='keeper'>
                        <p>{t('footer_write_to_us')}</p>
                        <p>{t('footer_email')}</p>
                        <div className='review'>
                            <p>{t('footer_description')}</p>
                        </div>
                        <p>{t('footer_copyright')}</p>
                    </div>
                </div>
                <div className='footer-img'>
                    <div className='narodi-i-priroda'>
                        <div>
                            <img src={landscape1} alt="" />
                        </div>
                        <div className='text-box-footer'>
                            <p>{t('footer_nations_nature')}</p>
                            <div>
                                <a href="">{t('footer_learn_more')}</a>
                            </div>
                        </div>
                    </div>
                    <div className='narodi-i-interview'>
                        <div>
                            <img src={landscape2} alt="" />
                        </div>
                        <div className='text-box-footer'>
                            <p>{t('footer_nations_interview')}</p>
                            <div>
                                <a href="">{t('footer_learn_more')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
