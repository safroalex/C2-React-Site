import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './header.css';
import logoImg from './../../images/Logo.svg';
import i18n from "./../../i18n.js";
import { Link } from 'react-router-dom';

function Header() {
    const { t } = useTranslation();

    useEffect(() => {
        // Проверяем, сохранен ли язык в localStorage и устанавливаем его
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            i18n.changeLanguage(savedLang);
        }
    }, []);

    // Функция для переключения языка
    const changeLanguage = () => {
        // Определяем, какой язык установлен в данный момент, и переключаем на другой
        const newLang = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLang);
        // Сохраняем выбранный язык в localStorage
        localStorage.setItem('language', newLang);
    };

    // Определение названия кнопки в зависимости от текущего языка
    const buttonLabel = i18n.language === 'en' ? 'Русский' : 'English';

    return (
        <header className='header'>
            <div className="container">
                <div className='logo-container'>
                    <Link to="/">
                        <img src={logoImg} alt="logo" />
                    </Link>                    
                    <span className='ru'>{t('RUSSIA NATIVE')}</span>
                </div>
                <div className='links-outer'>
                    <div className='row-eng'>
                        {/* Используем buttonLabel для отображения текущего языка и меняем его при клике */}
                        <div>
                            <button onClick={changeLanguage} style={{ all: 'unset' }}>{buttonLabel}</button>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/about_us">{t('about_us')}</Link></li>
                            <li><Link to="/peoples">{t('Народы')}</Link></li>
                            <li><Link to="/interviews">{t('Интерьвью')}</Link></li>
                            <li><Link to="/nature">{t('Природа')}</Link></li>
                            <li><Link to="/problems">{t('Проблемы')}</Link></li>
                            <li><Link to="/help">{t('Помочь')}</Link></li>
                        </ul>
                    </nav>
                </div>
            </div> 
        </header>
    );
}

export default Header;
