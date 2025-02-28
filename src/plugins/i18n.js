import { createI18n } from "vue-i18n";

import uz from "@/locales/uz.json";
import ru from "@/locales/ru.json";
import en from "@/locales/en.json";

const i18n = createI18n({
    legacy: false, // Vue 3 uchun modern API
    globalInjection: true, // $t() funksiyasini har joyda ishlatish uchun
    locale: localStorage.getItem("locale") || "uz",
    fallbackLocale: "en",
    messages: { uz, ru, en }
});

export default i18n;
