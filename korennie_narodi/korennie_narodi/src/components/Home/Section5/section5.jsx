import './section5.css'
import yakut from './../../../images/yakut.jpg'

const Section5 = () => {
    return (  
        <section>
            <div className='help-box'>
                <div className='help-outer-box'>
                    <div className='help-inner-box'>
                        <p>Вы можете помочь</p>
                        <p className='help-text'>Защитите людей и места, которые вы любите. Сделайте ваш вклад сегодня.</p>
                        <button>да - я хочу помочь!</button>
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