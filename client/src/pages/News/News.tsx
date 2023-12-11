import { useAppSelector } from '../../store/hook';

import './News.sass';

const News = () => {
    const arrNews  =  useAppSelector((state) => state.lang.text.news);
    return (
        <section className="app-news container">
            <h2 className="title-page">{arrNews[0]}</h2>
            <div className="app-news-items">
                {
                    arrNews[1].map(elem => {
                        return(
                            <div className="app-news-item" key={elem.id}>
                                <span className="app-news-item__date">{elem.date}</span>
                                <h3 className="app-news-item__title">{elem.title}</h3>
                                {
                                    elem.contText.map((e, index) => {
                                        if(elem.contImg){
                                            return ( 
                                                <>
                                                    <p className="app-news-item__txt">{e}</p>
                                                    <img className='app-news-item__img'  alt ="app-news-items__img" src={elem.contImg[index]}></img>
                                                </>
                                               
                                            )
                                        }
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

        </section>
    );
};

export default News;