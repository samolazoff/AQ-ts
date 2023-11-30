import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hook';
const pathArr: string[] = ["/", "/servers", "/permissions", "/reviews", "/news", "/contacts"];

const HeaderNav = () => {
    const textLink = useAppSelector((state) => state.lang.text.header) 
    return (
        <nav>
            <ul>
                {
                    pathArr.map((elem, index) => {
                        return(
                            <li key = {index}>
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