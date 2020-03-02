import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import moment from 'moment';
import { API_URL } from './config';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        debug: true,
        ns: ['translations'],
        defaultNS: 'translations',

        lng: 'en',
        fallbackLng: false,

        react: {
            //wait: true
            useSuspense: false
        },

        backend: {
            loadPath: API_URL + '/api/resource/{{lng}}/{{ns}}.json'
        }
    });

i18n.on('languageChanged', function (lng) {
    // E.g. set the moment locale with the current language
    moment.locale(lng);

    // then re-render your app
    //app.render();
});

export default i18n;