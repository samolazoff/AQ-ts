import { createSlice } from "@reduxjs/toolkit";

import textSite from '../../interfaces/textSite';

import newsDataJson from '../../data/news.json';

console.log(newsDataJson);

const textForRu: textSite = {
    header: ['главная', 'услуги', 'разрешения', 'отзывы', 'новости', 'контакты'],
    adress: ['ООО "АЛЬФА КВАЛИТЕТ"','220017, г. Минск, ул. Притыцкого, 146, к. 208','тел./факс: +375 (17) 232-13-13, e-mail: alfaquality@ya.ru' ],
    footer: 'ООО "АЛЬФА КВАЛИТЕТ"',
    about: [
        'О нас',
        [
            'Общество с ограниченной ответственностью «Альфа Квалитет» зарегистрировано в Минском горисполкоме в 2015 г. Наша специализация – деятельность в области промышленной безопасности',
            'Мы используем новейшие методики и передовые технологии, обеспечиваем высокое качество работ по адекватным ценам'
        ]
    ],
    news: ['Новости', newsDataJson.ru],
    partners: [ 'Наши партнеры',
       [ 
        'ОАО «Газпром трансгаз Беларусь»',
        'ОАО «Газпром трансгаз Беларусь» ф-л «ЭКОГАЗ»',
        'ОАО «Мозырский НПЗ»',
        'Предприятия концерна «Белнефтехим»',
        'УП «Могилеввторчермет»',
        'Государственное предприятие «Мозырские молочные продукты»']
    ],
    contactsMain: [
        'Контакты',
        [
            ['Адрес: ',  '20017, г. Минск, ул. Притыцкого, 146, к. 208'],
            ['Тел/Факс: ', '+375 (17) 232-13-13'],
            ['E-mail:', ' alfaquality@ya.ru'],
            ['Часы работы:', '9:00 - 17:00'],
        ],
        [
            'Начальник лаборатории НКиТД Панич Георгий Германович' ,
            ['тел./факс: ', '+375 (17) 232-13-13'],
            ['тел. моб.: ','+375 (29) 639-40-81']
        ]
    ]
};

const textForEn: textSite= {
    header: ['main', 'services', 'permissions', 'reviews', 'news', 'contacts'],
    adress: ['ALFA QUALITY LLC','220017, Minsk, Prytytsky str., 146, room 208','tel./fax: +375 (17) 232-13-13, e-mail: alfaquality@ya.ru ' ],
    footer: 'ALFA QUALITY LLC',
    about: [
        'About us',
        [
            'Alfa Quality was registered with the Minsk City Executive Committee in 2015. Our specialization is in the field of industrial safety',
            'We use the latest techniques and advanced technologies, provide high quality work at reasonable prices'
        ]
    ],
    news: ['News', newsDataJson.en],
    partners: [ 'Our partners',
       [ 
        'OJSC «Gazprom Transgaz Belarus»',
        '«Ecogas» branch OJSC «Gazprom transgaz Belarus»',
        'JSC MOZYR OIL REFINERY',
        'The Belarusian State Concern for Oil and Chemistry (Belneftekhim Concern)',
        'Unitary Enterprise Mogilevvtorchermet',
        'Mozyr Dairy Products']
    ],
    contactsMain: [
        'Contacts',
        [
            ['Address: ', '20017, Minsk, Prytytsky str., 146, room 208'],
            ['Tel/Fax: ', '+375 (17) 232-13-13'],
            ['E-mail:', ' alfaquality@ya.ru'],
            ['Opening hours:', '9:00 - 17:00'],
        ],
        [
            'Head theLaboratory Georgy Germanovich Panich' ,
            ['tel./fax: ','+375 (17) 232-13-13'],
            ['tel. mob.: ','+375 (29) 639-40-81']
        ]
    ]
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