import {useAppDispatch } from '../../store/hook';
import { changeLangEn, changeLangRu } from '../../store/slices/langSlice';

const LangPanel = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="lang-panel">
            <ul>
                <li>
                    <button id='btn-RU' onClick={()=> dispatch(changeLangRu())}>Рус</button>
                </li>
                <li>
                    <button id='btn-EN' onClick={()=> dispatch(changeLangEn())}>Eng</button>
                </li>
            </ul>
        </div>
    );
};

export default LangPanel;