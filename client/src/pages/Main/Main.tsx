import About from "../../components/About/About";
import NewsMini from "../../components/NewsMini/NewsMini";

import './Main.sass';

const Main = () => {
    return (
       <section className="container about-and-news-mini">
            <About></About>
            <NewsMini></NewsMini>
       </section>
    );
};

export default Main;