import { createSlice } from "@reduxjs/toolkit";

const textForRu = {
    header: ['главная', 'услуги', 'разрешения', 'отзывы', 'новости', 'контакты']
};

const textForEn = {
    header: ['main', 'services', 'permissions', 'reviews', 'news', 'contacts']
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