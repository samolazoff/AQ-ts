import { useAppSelector } from '../../store/hook';
import Slider from '../Slider/Slider';

import './About.sass';

const About = () => {
    const [titleBlock, textBlock] = useAppSelector((state) => state.lang.text.about);
    return (
        <section className='block-about'>
            <h2 className="title-block">{titleBlock}</h2>
            {
                textBlock.map((elem, index) => {
                    return (
                        <p className='block-about_txt' key={index}>{elem}</p>
                    )
                })
            }
            <Slider></Slider>
        </section>
    );
};

export default About;