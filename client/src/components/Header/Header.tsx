import HeaderNav from "../HeaderNav/HeaderNav";
import LangPanel from "../LangPanel/LangPanel";

const Header = () => {
    return (
        <header className='app-header'>
            <div className="container">
                <HeaderNav></HeaderNav>
                <LangPanel></LangPanel>
            </div>
        </header>
    );
};

export default Header;