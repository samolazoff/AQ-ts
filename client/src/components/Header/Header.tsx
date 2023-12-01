import { useAppSelector } from "../../store/hook";

import HeaderNav from "../HeaderNav/HeaderNav";
import LangPanel from "../LangPanel/LangPanel";

import './Header.sass';

import logo from '../../static/img/header/logo.png';

const Header = () => {
    const textAdress = useAppSelector((state) => state.lang.text.adress)
    return (
        <header className='app-header'>
            <div className="container">
                <HeaderNav></HeaderNav>
                <LangPanel></LangPanel>
            </div>
            <div className="container presentation">
                <img src={logo} alt="logo.png" className="presentation__img" />
                <h1 className="presentation-title">
                    <span className="presentation-title__title">{ textAdress[0]}</span>
                    <span className="presentation-title__subtitle">{ textAdress[1]}</span>
                    <span className="presentation-title__subtitle">{ textAdress[2]}</span>
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