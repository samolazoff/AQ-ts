import { Link } from 'react-router-dom';

import { useAppSelector } from '../../store/hook';

import './Partners.sass';

import imgGTB from '../../public/img/partners/gazprom.png';
import imgEco from '../../public/img/partners/ecogaz.jpg';
import imgMnpz from '../../public/img/partners/mnpz.png';
import imgNeftHim from '../../public/img/partners/nefthimpng.png';
import imgBVm from '../../public/img/partners/bvm.gif';
import imgScitles from '../../public/img/partners/scitles.png';

const linksPartners: string[] = [
    'https://belarus-tr.gazprom.ru/',
    'https://metan.by/',
    'https://mnpz.by/',
    'https://www.belneftekhim.by/',
    'https://bvm.by/',
    'https://www.mmp.by/'
];

const images = [imgGTB, imgEco, imgMnpz,imgNeftHim, imgBVm, imgScitles];

const Partners = () => {
    const [blockTitle, arrTxt] = useAppSelector((state) => state.lang.text.partners);
    return (
        <section className='app-partners container'>
            <h2 className="title-block">{blockTitle}</h2>
            <div className="app-partners-items">
                {
                    arrTxt.map((elem, index) => {
                        return (
                            <Link to ={linksPartners[index]} className='app-partners__item' key={index}>
                                <img src={images[index]} alt={elem} className="app-partners__img" />
                                <h3 className="app-partners__title">{elem}</h3>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Partners;