import React from 'react';
import {Outlet} from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';

const Layout = () => {
    return (
        <>
            <Header></Header>
            <main className="app-main">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Layout;