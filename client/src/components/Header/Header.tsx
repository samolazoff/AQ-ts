import React from 'react';

const Header = () => {
    return (
        <header className='app-header'>
            <div className="container">
                <nav>
                    <ul>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                </nav>
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