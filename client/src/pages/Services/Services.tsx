import { useAppSelector } from '../../store/hook';

import './Services.sass';

import img_1_1 from '../../public/img/services/1-1.png'; 
import img_1_2 from '../../public/img/services/1-2.jpg';
import img_1_3 from '../../public/img/services/1-3.png';
import img_1_4 from '../../public/img/services/1-4.jpg';
import img_1_5 from '../../public/img/services/1-5.jpg';
import img_1_6 from '../../public/img/services/1-6.jpg';
import img_1_7 from '../../public/img/services/1-7.jpg';
import img_1_8 from '../../public/img/services/1-8.png';
import img_1_9 from '../../public/img/services/1-9.jpg';
import img_1_10 from '../../public/img/services/1-10.jpg';
import img_1_11 from '../../public/img/services/1-11.jpg';
import img_1_12 from '../../public/img/services/1-12.jpg';
import img_1_13 from '../../public/img/services/1-13.jpg';
import img_1_14 from '../../public/img/services/1-14.jpg';
import img_1_15 from '../../public/img/services/1-15.jpg';
import img_1_16 from '../../public/img/services/1-16.jpg';
import img_1_17 from '../../public/img/services/1-17.jpg';

import img_2_1 from '../../public/img/services/2-1.jpg';
import img_2_2 from '../../public/img/services/2-2.jpg';
import img_2_3 from '../../public/img/services/2-3.jpg';
import img_2_4 from '../../public/img/services/2-4.jpg';
import img_2_5 from '../../public/img/services/2-5.jpg';

const imgNonDistruction = [
    img_1_1,
    img_1_2,
    img_1_3,
    img_1_4,
    img_1_5,
    img_1_6,
    img_1_7,
    img_1_8,
    img_1_9,
    img_1_10,
    img_1_11,
    img_1_12,
    img_1_13,
    img_1_14,
    img_1_15,
    img_1_16,
    img_1_17
];

const imgDiagnostic = [
    img_2_1,
    img_2_2,
    img_2_3,
    img_2_4,
    img_2_5
];

const Services = () => {
    const [textNonDistruction, textDiagnostic] = useAppSelector((state) => state.lang.text.services)
    return (
        <section className='container app-services'>
            <div className="app-services-box">
                <h2 className="title-block">{textNonDistruction[0]}</h2>
                <h3 className="app-services__subtitle">{textNonDistruction[1]}</h3>
                <div className="app-services-non-distruction-imgs">
                    {
                        textNonDistruction[2].map((elem, index) => {
                            return (
                                <div className='app-services-non-distruction-img' key={index}>
                                    <img src={imgNonDistruction[index]} alt={elem} className="app-services-non-distruction__img" />
                                    <span className='app-services-non-distruction__title'>{elem}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="app-services-box">
                <h2 className="title-block">{textDiagnostic[0]}</h2>
                <h3 className="app-services__subtitle">{textDiagnostic[1]}</h3>
                <div className="app-services-diagnostic-imgs">
                    {
                        textDiagnostic[2].map((elem, index) => {
                            return (
                                <div className='app-services-diagnostic-img' key={index}>
                                    <img src={imgDiagnostic[index]} alt={elem} className="app-services-diagnostic__img" />
                                    <span className='app-services-diagnostic__title'>{elem}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;