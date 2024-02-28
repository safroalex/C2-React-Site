// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        "Народы": "Peoples",
        "Интерьвью": "Interviews",
        "Природа": "Nature",
        "Проблемы": "Problems",
        "Помочь": "Help",
        
        //section1
        "about_us": "About us",
        "we_care_about": "We are concerned about the environmental changes happening on our planet:",
        "climate_change": "climate change, decrease in biodiversity, threats to unique plants",
        "and_animals": "and animals",
        "recently_learned": "Recently, we have learned a lot about the indigenous peoples of Russia and how",
        "relationships_with_nature": "they build relationships with the surrounding world",

        //section2
        "our_mission": "Our Mission",
        "mission_statement_1": "The mission of this project is to draw public attention to the indigenous peoples",
        "mission_statement_2": "of Russia, their ecological way of life, and practices for preserving the environment with",
        "mission_statement_3": "the aim of adopting their ways of interacting with nature to improve",
        "mission_statement_4": "the ecological condition of our planet.",
        
        //section3
        "indigenous_small_numbered_people_definition": "According to Russian legislation, an indigenous small-numbered people is one that is settled in the territory of their ancestors, inherits traditional methods of management, and whose population does not exceed 50,000 people",
        "learn_more": "Learn more",
        "game_description": "During the game of kheer shaaglan, a participant must break the spine bone of a bull or cow with the palm. To be able to break the bone, a special technique is used: several trial strikes are made to 'feel' the bone, and then the participant delivers the final, most powerful blow with the back of the palm. This game is part of the traditional culture of the Buryats.",
        "indigenous_peoples_challenges": "The difficulty of preserving the language, the disappearance of ancient traditions, threats to national cultures, destruction of ecosystems - these are the problems faced by indigenous peoples not only in Russia but also in other countries. In 1992, the UN adopted the 'Declaration on the Rights of Persons Belonging to National or Ethnic, Religious and Linguistic Minorities', securing the rights of minorities in multi-ethnic states.",
        "indigenous_teaching_quote": "The indigenous peoples of Russia teach us to live in harmony with nature, showing respect for the land and sustainability for future generations.",
        "author_arseny_karsakov": "Arseny Karsakov",
        "our_policy_title": "Our Policy",
        "culture_preservation_title": "Culture Preservation",
        "culture_preservation_description": "We strive to raise awareness about the indigenous peoples of Russia and their ecological practices, respecting their traditions and rights. Our task is to spread knowledge about sustainable interaction with nature, based on the voices and perspectives of these peoples.",
        "educational_interaction_title": "Educational Interaction",
        "educational_interaction_description": "Through an interactive quiz, we stimulate the study of the ecological practices of indigenous peoples, fostering a deep understanding and respect for their cultures. We consider education to be the key to ecological sustainability.",
        "website_information_title": "Website Information",
        "website_information_description": "Created to highlight the lives of indigenous peoples, our website is committed to providing current and respectful information that reflects the latest research. We aim to improve the environmental situation by expanding knowledge of indigenous cultures and practices."
    }
  },
  ru: {
    translation: {
        //section1
        "about_us": "О нас",
        "we_care_about": "Мы волнуемся за экологические изменения, происходящие на нашей планете:",
        "climate_change": "изменение климата, уменьшение биоразнообразия, угроза уникальным растениям",
        "and_animals": "и животным",
        "recently_learned": "Недавно мы узнали много нового о коренных народах России и о том, какие",
        "relationships_with_nature": "отношения с окружающим миром они выстраивают",

        //section2
        "our_mission": "Наша миссия",
        "mission_statement_1": "Миссия данного проекта - обратить внимание общественности на коренные народы",
        "mission_statement_2": "России, их экологичный образ жизни и практики по сохранению окружающей среды с",
        "mission_statement_3": "целью перенятия их способов взаимодействия с природой для улучшения",
        "mission_statement_4": "экологического состояния нашей планеты.",

        //section3
        "indigenous_small_numbered_people_definition": "Согласно российскому законодательству, коренной малочисленный народ — это тот, который расселен на территории расселения своих предков, наследует традиционные методы хозяйствования и чья численность не превышает 50 000 человек.",
        "learn_more": "Узнать больше",
        "game_description": "Во время игры в хээр шааглан участник должен разбить ладонью хребтовую кость быка или коровы. Чтобы суметь сломать кость, используется специальная техника: делается несколько пробных ударов, чтобы «почувствовать» кость, и потом тыльной стороной ладони участник или участница наносит финальный самый сильный удар по кости. Эта игра — часть традиционной культуры бурятов.",
        "indigenous_peoples_challenges": "Сложность сохранения языка, исчезновение древних традиций, угроза национальным культурам, разрушение экосистем — с этими проблемами сталкиваются коренные народы не только России, но и других стран. В 1992 году в ООН была принята «Декларация о правах лиц, принадлежащих к национальным или этническим, религиозным и языковым меньшинствам», закреплявшая права меньшинств в многосоставных государствах.",
        "indigenous_teaching_quote": "Коренные народы России учат нас жить в гармонии с природой, демонстрируя уважение к земле и устойчивость для будущих поколений.",
        "author_arseny_karsakov": "Карсаков Арсений",
        "our_policy_title": "Наша политика",
        "culture_preservation_title": "Сохранение культуры",
        "culture_preservation_description": "Мы стремимся повышать осведомленность о коренных народах России и их экологических практиках, уважая их традиции и права. Наша задача — распространять знания об устойчивом взаимодействии с природой, опираясь на голоса и перспективы этих народов.",
        "educational_interaction_title": "Образовательное взаимодействие",
        "educational_interaction_description": "Через интерактивную викторину мы стимулируем изучение экологических практик коренных народов, способствуя глубокому пониманию и уважению к их культурам. Образование считаем ключом к экологической устойчивости.",
        "website_information_title": "Информация на сайте",
        "website_information_description": "Созданный с целью освещения жизни коренных народов, наш сайт обязуется предоставлять актуальную и уважительную информацию, отражающую последние исследования. Мы стремимся к улучшению экологической ситуации через расширение знаний о коренных культурах и практиках.",

    }
  }
};

const currentLanguage = localStorage.getItem('language') || 'ru'; // язык по умолчанию, если в localStorage нет сохраненного значения

i18n
  .use(initReactI18next) // пропускает i18n вниз до react-i18next
  .init({
    resources,
    lng: currentLanguage, // Установка языка на основе сохраненного значения или использование 'ru' по умолчанию
    keySeparator: false, // мы не используем или не нуждаемся в ключах в форме messages.welcome
    interpolation: {
      escapeValue: false // react уже защищает от инъекций
    }
  });

export default i18n;
