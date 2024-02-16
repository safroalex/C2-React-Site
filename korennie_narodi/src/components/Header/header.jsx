import './header.css'
import logoImg from './../../images/Logo.svg'

function Header() {
    return (

        <header className='header'>
            <div className="container">
                <div className='logo-container'>
                    <img src={logoImg} alt="logo" />
                    <span>RUSSIA NATIVE</span>
                </div>
                <div className='links-outer'>
                    <div className='row-eng'>
                        <span>English</span>
                    </div>
                    <div className='row-links'>
                        <nav className='links'>
                            <a href="">Народы</a>
                            <a href="">Интерьвью</a>
                            <a href="">Природа</a>
                            <a href="">Проблемы</a>
                            <a href="">Помочь</a>
                        </nav>
                    </div>
                </div>
            </div> 
        </header>

    )
}

export default Header;