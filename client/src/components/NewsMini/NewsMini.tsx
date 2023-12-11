import { Link } from 'react-router-dom';

import { useAppSelector } from '../../store/hook';

import './NewsMini.sass';

const NewsMini = () => {
    const arrNews  =  useAppSelector((state) => state.lang.text.news);
    return (
        <aside className='block-news-mini'>
            <h2 className="title-block">{arrNews[0]}</h2>
            <div className="box-news-mini">
                {
                    arrNews[1].map(elem => {
                        return(
                            <Link className="box-news-mini-item" key={elem.id} to={'/news:'+elem.id}>
                                <span className="box-news-mini__date">{elem.date}</span>
                                <h3 className="box-news-mini__title">{elem.title}</h3>
                            </Link>
                        )
                    })
                }
            </div>
        </aside>
    );
};

export default NewsMini;