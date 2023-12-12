import { useAppSelector } from '../../store/hook';

import './ContactsForMail.sass';

import MainContacts from '../MainContacts/MainContacts';
import FormContacts from '../FormContacts/FormContacts';

const ContactsForMail = () => {
    const title:string = useAppSelector((state) => state.lang.text.contactsMain[0])
    return (
        <section className='app-contacts-main container'>
            <h2 className="title-block">{title}</h2>
            <div className="app-contacts-main-content">
                <MainContacts></MainContacts>
                <FormContacts></FormContacts>
            </div>
        </section>
    );
};

export default ContactsForMail;