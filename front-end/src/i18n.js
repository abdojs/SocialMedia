import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./langs/en.json";
import fr from "./langs/fr.json";
import ar from "./langs/ar.json";

const resources = {
    en: {
        translation: en
    },
    fr: {
        translation: fr
    },
    ar: {
        translation: ar
    }
};
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;