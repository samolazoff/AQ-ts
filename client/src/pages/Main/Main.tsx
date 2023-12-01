
import About from "../../components/About/About";
import NewsMini from "../../components/NewsMini/NewsMini";

const Main = () => {
    return (
       <section className="container about-and-news-mini">
            <About></About>
            <NewsMini></NewsMini>
       </section>
    );
};

export default Main;