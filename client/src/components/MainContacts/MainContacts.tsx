import { useAppSelector } from '../../store/hook';

import './MainContacts.sass';

const MainContacts = () => {
    const mainContacts = useAppSelector((state) => state.lang.text.contactsMain[1]);
    const bossConatacts = useAppSelector((state) => state.lang.text.contactsMain[2]);
    return (
        <>
            <ul className='app-contacts-main'>
                {
                    mainContacts.map((elem, index) => {
                        return (
                            <li className="app-contacts-main-item" key={index}>
                                <span className="txt_bold">{elem[0]}</span>
                                <span>{elem[1]}</span>
                            </li>
                        )
                    })
                }
                <div className="app-contacts-main-boss">
                    <span className="txt_bold">{bossConatacts[0]}</span>
                    <span>
                        <span className="txt_bold">{bossConatacts[1][0]}</span>
                        <span>{bossConatacts[1][1]}</span>
                    </span>
                    <span>
                        <span className="txt_bold">{bossConatacts[2][0]}</span>
                        <span>{bossConatacts[2][1]}</span>
                    </span>
                </div>
            </ul>
        </>
    );
};

export default MainContacts;