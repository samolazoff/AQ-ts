import HeaderNav from "../HeaderNav/HeaderNav";
import LangPanel from "../LangPanel/LangPanel";

import logo from '../../static/img/header/logo.png';

const Header = () => {
    return (
        <header className='app-header'>
            <div className="container">
                <HeaderNav></HeaderNav>
                <LangPanel></LangPanel>
            </div>
            <div className="container presentation">
                <img src={logo} alt="logo.png" className="presentation__img" />
                <h1 className="presentation-title">
                    <span className="presentation-title__title">ООО "АЛЬФА КВАЛИТЕТ"</span>
                    <span className="presentation-title__subtitle">220017, г. Минск, ул. Притыцкого, 146, к. 208</span>
                    <span className="presentation-title__subtitle">тел./факс: +375 (17) 232-13-13, e-mail: alfaquality@ya.ru</span>
                </h1>
            </div>
            <div className="bgc-header">
                <div className="bgc-header-1"></div>
                <div className="bgc-header-2"></div>
            </div>
        </header>
    );
};

export default Header;