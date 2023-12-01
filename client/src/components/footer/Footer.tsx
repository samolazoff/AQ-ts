import {Link} from 'react-router-dom';
import { useAppSelector } from '../../store/hook';

import './Footer.sass';

const Footer = () => {
    const footerTxt = useAppSelector((state) => state.lang.text.footer);
    return (
        <footer className="app-footer">
            <div className="container">
                <Link to='/' className='app-footer_link'>
                    <span>{footerTxt}</span>
                    <span>© 2023 aq.minsk.by</span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;