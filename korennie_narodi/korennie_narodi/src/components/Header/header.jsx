import React from 'react';
import { useTranslation } from 'react-i18next';
import './header.css';
import logoImg from './../../images/Logo.svg';

function Header() {
    const { t, i18n } = useTranslation();

    // Функция для переключения языка
    const changeLanguage = () => {
        // Определяем, какой язык установлен в данный момент, и переключаем на другой
        const newLang = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLang);
    };

    // Определение названия кнопки в зависимости от текущего языка
    const buttonLabel = i18n.language === 'en' ? 'Русский' : 'English';

    return (
        <header className='header'>
            <div className="container">
                <div className='logo-container'>
                    <img src={logoImg} alt="logo" />
                    <span className='ru'>{t('RUSSIA NATIVE')}</span>
                </div>
                <div className='links-outer'>
                    <div className='row-eng'>
                        {/* Используем buttonLabel для отображения текущего языка и меняем его при клике */}
                        <button onClick={changeLanguage} style={{ all: 'unset' }}>{buttonLabel}</button>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="">{t('Народы')}</a></li>
                            <li><a href="">{t('Интерьвью')}</a></li>
                            <li><a href="">{t('Природа')}</a></li>
                            <li><a href="">{t('Проблемы')}</a></li>
                            <li><a href="">{t('Помочь')}</a></li>
                        </ul>
                    </nav>
                </div>
            </div> 
        </header>
    );
}

export default Header;
