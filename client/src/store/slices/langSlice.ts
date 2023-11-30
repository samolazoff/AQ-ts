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
        isLang: (state) => {
            switch (state.lang) {
                case 'RU':
                    state.text = textForRu
                    break;
                case 'EN':
                    state.text = textForEn
                    break;
            }
        }
    }
});

export const {isLang} = langSlice.actions;

export default langSlice.reducer;