import HeaderNav from "../HeaderNav/HeaderNav";

const Header = () => {
    return (
        <header className='app-header'>
            <div className="container">
                <HeaderNav></HeaderNav>
                <div className="lang-panel">
                    <form action="" method="post">
                        <input type="hidden" />
                        <button>Рус</button>
                    </form>
                    <form action="" method="post">
                        <input type="hidden" />
                        <button>Eng</button>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;