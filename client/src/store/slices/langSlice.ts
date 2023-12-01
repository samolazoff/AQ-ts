import { createSlice } from "@reduxjs/toolkit";

import textSite from '../../interfaces/textSite';

const textForRu: textSite = {
    header: ['главная', 'услуги', 'разрешения', 'отзывы', 'новости', 'контакты'],
    adress: ['ООО "АЛЬФА КВАЛИТЕТ"','220017, г. Минск, ул. Притыцкого, 146, к. 208','тел./факс: +375 (17) 232-13-13, e-mail: alfaquality@ya.ru' ],
    footer: 'ООО "АЛЬФА КВАЛИТЕТ"'
};

const textForEn: textSite= {
    header: ['main', 'services', 'permissions', 'reviews', 'news', 'contacts'],
    adress: ['ALFA QUALITY LLC','220017, Minsk, Prytytsky str., 146, room 208','tel./fax: +375 (17) 232-13-13, e-mail: alfaquality@ya.ru ' ],
    footer: 'ALFA QUALITY LLC'
};

const initialState = {
    lang: 'RU',
    text: textForRu
};

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        changeLangEn: (state) => {
            state.lang= 'EN';
            state.text = textForEn;
        },
        changeLangRu: (state) => {
            state.lang= 'Ru';
            state.text = textForRu;
        }
    }
});

export const {changeLangEn, changeLangRu} = langSlice.actions;

export default langSlice.reducer;