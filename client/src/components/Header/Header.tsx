import React from 'react';

const Header = () => {
    return (
        <header className='app-header'>
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="/"></a></li>
                        <li><a href="/servers"></a></li>
                        <li><a href="/permissions"></a></li>
                        <li><a href="/reviews"></a></li>
                        <li><a href="/news"></a></li>
                        <li><a href="/contacts"></a></li>
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