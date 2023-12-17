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
    ],
    permissions: [
        [
            'Лицензия на право деятельности в области промышленной безопасности ',
            'ООО «Альфа Квалитет» имеет специальное разрешение (лицензию) на право осуществления деятельности в области промышленной безопасности. С полным содержанием области деятельности можно ознакомиться на официальном сайте Госпромнадзора МЧС Республики Беларусь'
        ],
        [
            'Лицензия на право деятельности в области использования атомной энергии и источников ионизирующего излучения',
            'ООО «Альфа Квалитет» имеет специальное разрешение (лицензию) на право осуществления деятельности в области использования атомной энергии и источников ионизирующего облучения (использование переносных рентгеновских аппаратов промышленного назначения)'
        ],      
        [
            'Аттестат аккредитации лаборатории неразрушающего контроля',
            'Лаборатория неразрушающего контроля и технического диагностирования ООО «Альфа Квалитет» аккредитована на соответсвие СТБ ИСО/МЭК 17025. С полным содержанием области аккредитации можно ознакомиться на официальном сайте Белорусского государственного центра аккредитации'
        ], 
        [
            'Разрешение Главной военной инспекции Вооруженных сил ',
            'ООО «Альфа Квалитет» имеет разрешение (свидетельство) на право технического диагностирования технических устройств, поднадзорных Главной военной инспекции Вооруженных сил'
        ], 
        [
            'Сертификат соответствия требованиям СТБ ISO 9001',
            'Система менеджмента качества ООО «Альфа Квалитет» соответствует требованиям СТБ ISO 9001'
        ], 
        [
            'Экспертное заключение о соответствии требованиям ПАО "Газпром"',
            'По результатам экспертной проверки установлено, что ООО «Альфа Квалитет» соответствует требованиям ПАО "Газпром" к выполнению работ по диагностике, техническому обслуживанию и ремонту объектов ПАО "Газпром" '
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
    ],
    permissions: [
        [
            'License for the right to operate in the field of industrial safety ',
            'Alfa Quality LLC has a special permit (license) for the right to carry out activities in the field of industrial safety. The full content of the field of activity can be found on the official website of Gospromnadzor of the Ministry of Emergency Situations of the Republic of Belarus'
        ],
        [
            'License for the right to operate in the field of the use of atomic energy and ionizing radiation sources',
            'Alfa Quality LLC has a special permit (license) for the right to carry out activities in the field of the use of atomic energy and ionizing radiation sources (the use of portable X-ray machines for industrial purposes)'
        ],
        [
            'Certificate of accreditation of the non-destructive testing laboratory',
            'The laboratory of non-destructive testing and technical diagnostics of Alfa Quality LLC is accredited for compliance with STB ISO/IEC 17025. The full content of the accreditation area can be found on the official website of the Belarusian State Accreditation Center'
        ],
        [
            'Permission of the Main Military Inspection of the Armed Forces ',
            'Alfa Quality LLC has a permit (certificate) for the right to technical diagnostics of technical devices supervised by the Main Military Inspectorate of the Armed Forces'
        ],
        [
            'Certificate of compliance with the requirements of STB ISO 9001',
            'The quality management system of Alfa Quality LLC complies with the requirements of STB ISO 9001'
        ],
        [
            'Expert opinion on compliance with the requirements of PJSC Gazprom',
            'According to the results of the expert review, it was established that Alfa Quality LLC meets the requirements of Gazprom PJSC for the performance of diagnostics, maintenance and repair of Gazprom PJSC facilities '
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