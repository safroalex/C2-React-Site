import React from 'react';
import { useTranslation } from 'react-i18next';
import './section2.css';

const Section2 = () => {
    const { t } = useTranslation();

    return ( 
        <section className='sec2-main'>
            <div className='sec2-content'>
                <div>
                    <div className='box-sec2_1'>
                        <h1>{t('our_mission')}</h1>
                    </div>
                </div>
                <div className='box-hide'>
                    <div className='box-sec2_1'>
                        <div className='box-sec2_2'>
                            <div>
                                <p>{t('mission_statement_1')}</p>
                            </div>
                            <p>{t('mission_statement_2')}</p>
                            <p className='text2_1'>{t('mission_statement_3')}</p>
                            <p>{t('mission_statement_4')}</p>
                        </div>
                    </div>
                </div>
                <div className='sec2-mobile'>
                    <div>
                        <p>{t('mission_statement_1')} {t('mission_statement_2')} {t('mission_statement_3')} {t('mission_statement_4')}</p>
                    </div>
                </div>
            </div>
         </section>
    );
}
 
export default Section2;
