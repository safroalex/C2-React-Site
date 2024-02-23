import './section4.css'
import quotes_1 from './../../../images/quotes_1.svg'
import quotes_2 from './../../../images/quotes_2.svg'
import line from './../../../images/line.jpg'

const Section4 = () => {
    return (  
        <div className='content4'>
                    <div className='unifying4'>
                        <div className='quotation'>
                            <div className='decoration1'>
                                <div className='line-box'>
                                    <img src={line} alt="" />
                                </div>
                                <img src={quotes_1} alt="" />
                            </div>
                            <div className='decoration2'>
                                <img src={quotes_2} alt="" />
                                <div className='line-box'>
                                    <img src={line} alt="" />
                                </div>
                            </div>
                            <div className='text-box4'>
                                <div className='text-box-outer'>
                                    <div className='text-box-inner'>
                                        <p className='p1'>Природа может обойтись без человека,</p>
                                    </div>
                                </div>
                                <div className='text-box-outer'>
                                    <div className='text-box-inner'>
                                        <p className='p2'> а он без нее - нет.</p>
                                    </div>
                                </div>
                                <div className='text-box-outer'>
                                    <div className='text-box-inner'>
                                        <p className='author2'>Али Апшерон</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
 
export default Section4;