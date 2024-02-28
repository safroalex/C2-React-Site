import './footer.css'
import landscape1 from './../../images/landscape1.jpg'
import landscape2 from './../../images/landscape2.jpg'

const Footer = () => {
    return ( 
        <footer>
            <div className='footer-box'>
                <div className='footer-text'>
                    <div className='keeper'>
                        <p>Напишите нам</p>
                        <p>russianative@gmail.com</p>
                        <div className='review'>
                            <p>
                                Мы создали полезный сайт, в котором собрали информацию о коренных жителях нашей страны, их проблемах, а также способах взаимодействия с окружающей средой, которые не только эффективны, но и безопасны для природы.
                            </p>
                        </div>
                        <p>© 2024 Indigious People, Website by Fusion</p>
                    </div>
                </div>
                <div className='footer-img'>
                    <div className='narodi-i-priroda'>
                        <div>
                            <img src={landscape1} alt="" />
                        </div>
                        <div className='text-box-footer'>
                            <p>народы <br /> и природа</p>
                            <a href="">узнать больше</a>
                        </div>
                    </div>
                    <div className='narodi-i-interview'>
                        <div>
                            <img src={landscape2} alt="" />
                        </div>
                        <div className='text-box-footer'>
                            <p>народы <br />и интервью</p>
                            <a href="">узнать больше</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;