import './section1.css'

const Section1 = () => {
    return ( 
        <section>
            <div className='sec1-content'>
                <div>
                    <div className='box-sec1_1'>
                        <h1>о нас</h1>
                    </div>
                </div>
                <div>
                    <div className='box-sec1_1'>
                        <div className='box-sec1_2'>
                            <div>
                                <p>Мы волнуемся за экологические изменения, происходящие на нашей планете:</p>
                            </div>
                            <p>изменение климата, уменьшение биоразнообразия, угроза уникальным растениям</p>
                            <p>и животным</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='box-sec1_1 outer-text1_2'>
                        <div>
                            <div>
                                <p className='text1_1'>Недавно мы узнали много нового о коренных народах России и о том, какие</p>
                            </div>
                            <div>
                                <p className='text1_1'>отношения с окружающим миром они выстраивают</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
    );
}
 
export default Section1;