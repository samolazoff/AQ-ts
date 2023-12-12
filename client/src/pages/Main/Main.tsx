import About from "../../components/About/About";
import NewsMini from "../../components/NewsMini/NewsMini";
import Partners from "../../components/Partners/Partners";
import ContactsForMail from "../../components/ContactsForMail/ContactsForMail";

import './Main.sass';

const Main = () => {
    return (
        <>
            <section className="container about-and-news-mini">
                    <About></About>
                    <NewsMini></NewsMini>
            </section>
            <Partners></Partners>
            <ContactsForMail></ContactsForMail>
        </>
    );
};

export default Main;