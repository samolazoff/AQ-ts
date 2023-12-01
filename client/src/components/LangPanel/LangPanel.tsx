import {useAppDispatch } from '../../store/hook';
import { changeLangEn, changeLangRu } from '../../store/slices/langSlice';

import './LangPanel.sass';

const LangPanel = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="lang-panel">
            <ul className='lang-panel-items'>
                <li className='lang-panel_item'>
                    <button id='btn-RU' className='btn-lang' onClick={()=> dispatch(changeLangRu())}>Рус</button>
                </li>
                <li>
                    <button id='btn-EN' className='btn-lang' onClick={()=> dispatch(changeLangEn())}>Eng</button>
                </li>
            </ul>
        </div>
    );
};

export default LangPanel;