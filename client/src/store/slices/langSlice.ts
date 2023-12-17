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
    ],
    services: [
        [
            'Неразрушающий контроль',
            'Мы применяем широкий спектр методов неразрушающего контроля в т.ч. новейшие технологии, обеспечивая получение полной и достоверной информации о техническом состоянии контролируемых объектов',
            [
                'Метод рассеяния магнитного потока',
                'Акустико-эмиссионный  контроль',
                'Метод магнитной памяти металла',
                'Ультразвуковая дефектоскопия',
                'Вихретоковый контроль',
                'Магнитопорошковый контроль',
                'Металлографические исследования',
                'Контроль адгезии',
                'Контроль проникающими веществами',
                'Контроль герметичности',
                'Измерение твердости',
                'Оптический контроль',
                'Ультразвуковая толщинометрия',
                'Вибродиагностический метод',
                'Электроискровой метод контроля',
                'Радиографическая дефектоскопия',
                'Расчеты на прочность'
            ]
        ],
        [
            'Техническое диагностирование', 
            'Мы оказываем услуги по техническому диагностированию с продлением срока службы различных технических устройств, в том числе применяемых на опасных производственных объектах',
            [
                'Объекты химических, нефтехимических, нефтеперерабатывающих производств',
                'Объекты магистральных газопроводов',
                'Сосуды, работающие под давлением',
                'Объекты систем газопотребления и газораспределения',
                'Аммиачные холодильные установки'
            ]
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
    ],
    services: [
        [
            'Non-destructive testing',
            'We use a wide range of non-destructive testing methods, including the latest technologies, providing complete and reliable information about the technical condition of the controlled objects',
                [
                    'Magnetic flux scattering method',
                    'Acoustic emission control',
                    'Metal magnetic memory method',
                    'Ultrasonic flaw detection',
                    'Eddy current control',
                    'Magnetic particle control',
                    'Metallographic studies',
                    'Adhesion control',
                    'Control of penetrating substances',
                    'Leakproofness control',
                    'Hardness measurement',
                    'Optical control',
                    'Ultrasonic thickness measurement',
                    'Vibration diagnostic method',
                    'Electric spark control method',
                    'Radiographic flaw detection',
                    'Strength calculations'
                ]
        ],
        [
            'Technical diagnostics', 
            'We provide technical diagnostics services to extend the service life of various technical devices, including those used at hazardous production facilities',
            [
                'Facilities of chemical, petrochemical, and oil refining industries',
                'Objects of main gas pipelines',
                'Pressure vessels',
                'Objects of gas consumption and gas distribution systems',
                'Ammonia refrigeration units'
            ]
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