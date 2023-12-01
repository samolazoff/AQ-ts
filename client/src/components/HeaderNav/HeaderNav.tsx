import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hook';

import './HeaderNav.sass';

const pathArr: string[] = ["/", "/servers", "/permissions", "/reviews", "/news", "/contacts"];

const HeaderNav = () => {
    const textLink = useAppSelector((state) => state.lang.text.header) 
    return (
        <nav className='app-header-nav'>
            <ul className='app-header-nav-items'>
                {
                    pathArr.map((elem, index) => {
                        return(
                            <li className='app-header-nav-item' key = {index}>
                                <NavLink to={elem}>{textLink[index]}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default HeaderNav;