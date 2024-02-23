import './header.css'
import logoImg from './../../images/Logo.svg'

function Header() {
    return (

        <header className='header'>
            <div className="container">
                <div className='logo-container'>
                    <img src={logoImg} alt="logo" />
                    <span className='ru'>RUSSIA NATIVE</span>
                </div>
                <div className='links-outer'>
                    <div className='row-eng'>
                        <a href="">English</a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="">Народы</a></li>
                            <li><a href="">Интерьвью</a></li>
                            <li><a href="">Природа</a></li>
                            <li><a href="">Проблемы</a></li>
                            <li><a href="">Помочь</a></li>
                        </ul>
                    </nav>
                </div>
            </div> 
        </header>

    )
}

export default Header;