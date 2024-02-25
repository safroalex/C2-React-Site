import React from 'react';
import { useTranslation } from 'react-i18next';
import './section1.css';

const Section1 = () => {
    const { t } = useTranslation();

    return ( 
        <section>
            <div className='sec1-content'>
                <div>
                    <div className='box-sec1_1'>
                        <h1>{t('about_us')}</h1>
                    </div>
                </div>
                <div>
                    <div className='box-sec1_1'>
                        <div className='box-sec1_2'>
                            <div>
                                <p>{t('we_care_about')}</p>
                            </div>
                            <p>{t('climate_change')}, {t('and_animals')}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='box-sec1_1 outer-text1_2'>
                        <div>
                            <div>
                                <p className='text1_1'>{t('recently_learned')}</p>
                            </div>
                            <div>
                                <p className='text1_1'>{t('relationships_with_nature')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
    );
}
 
export default Section1;
