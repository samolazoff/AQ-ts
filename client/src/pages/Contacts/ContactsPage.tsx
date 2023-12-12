import './ContactsPage.sass';

import MainContacts from '../../components/MainContacts/MainContacts';
import FormContacts from '../../components/FormContacts/FormContacts';

import imgAdres from '../../public/img/contacts/adres.png';

const ContactsPage = () => {
    return (
        <section className='container app-contacts'>
            <h2 className="title-page">Контакты</h2>
            <div className="app-contacts-content">
                <div className="app-contacts-content-box">
                    <MainContacts></MainContacts>
                    <FormContacts></FormContacts>
                </div>
                <div className="app-contacts-content-box">
                    <span className="txt_bold">What find us</span>
                    <img src={imgAdres} alt="" className="app-contacts-content__img" />
                    <p>
                        <span className="txt_bold">GPS</span>
                        <span>53.9077 27.437463</span>
                    </p>
                </div>
            </div>
            
        </section>
    );
};

export default ContactsPage;