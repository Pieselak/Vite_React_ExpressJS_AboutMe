import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { PL, GB, DE } from "country-flag-icons/react/1x1";
import { BadgeQuestionMarkIcon } from "lucide-react";

const resources = {
  en: {
    translation: {
      user: {
        nav: {
          home: "Home",
          aboutme: "About me",
          projects: "Projects",
          sugar: "Blood sugar",
        },
        footer: {
          creator: {
            title: "Creator",
            madeBy: {
              title: "Made with ❤️ by",
              content: "Patryk Znamirowski",
            },
            copyright: {
              title: "Copyright",
              content: "© {{year}} All rights reserved.",
            },
          },
          contact: {
            title: "Contact",
            email: {
              title: "Email Address",
            },
          },
          socials: {
            title: "Socials",
          },
          technologies: {
            title: "Technologies",
          },
        },
        language: {
          select: "Select language",
        },
      },
      loading: {
        message: "Loading...",
      },
      notFound: {
        title: "404 Not Found",
        message: "The page you are looking for does not exist.",
      },
      forbidden: {
        title: "403 Forbidden",
        message: "You do not have permission to access this page.",
      },
      maintenance: {
        title: "Maintenance Mode",
        message:
          "The website is currently under maintenance. Please try again later.",
      },
      construction: {
        title: "Under Construction",
        message: "This page is under construction. Please check back later.",
      },
    },
  },

  pl: {
    translation: {
      user: {
        nav: {
          home: "Strona główna",
          aboutme: "O mnie",
          projects: "Projekty",
          sugar: "Cukier we krwi",
        },
        footer: {
          creator: {
            title: "Twórca",
            madeBy: {
              title: "Stworzone z ❤️ przez",
              content: "Patryk Znamirowski",
            },
            copyright: {
              title: "Prawa autorskie",
              content: "© {{year}} Wszelkie prawa zastrzeżone.",
            },
          },
          contact: {
            title: "Kontakt",
            email: {
              title: "Adres E-mail",
            },
          },
          socials: {
            title: "Sociale",
          },
          technologies: {
            title: "Technologie",
          },
        },
        language: {
          select: "Wybierz język",
        },
      },
      loading: {
        message: "Ładowanie...",
      },
      notFound: {
        title: "404 Nie znaleziono",
        message: "Strona, której szukasz, nie istnieje.",
      },
      forbidden: {
        title: "403 Zabronione",
        message: "Nie masz uprawnień do dostępu do tej strony.",
      },
      maintenance: {
        title: "Tryb konserwacji",
        message:
          "Strona jest obecnie w trybie konserwacji. Proszę spróbować ponownie później.",
      },
      construction: {
        title: "W budowie",
        message: "Ta strona jest w budowie. Proszę sprawdzić ponownie później.",
      },
    },
  },

  de: {
    translation: {
      user: {
        nav: {
          home: "Startseite",
          aboutme: "Über mich",
          projects: "Projekte",
          sugar: "Blutzucker",
        },
        footer: {
          creator: {
            title: "Ersteller",
            madeBy: {
              title: "Erstellt mit ❤️ von",
              content: "Patryk Znamirowski",
            },
            copyright: {
              title: "Urheberrecht",
              content: "© {{year}} Alle Rechte vorbehalten.",
            },
          },
          contact: {
            title: "Kontakt",
            email: {
              title: "E-Mail-Adresse",
            },
          },
          socials: {
            title: "Soziale Medien",
          },
          technologies: {
            title: "Technologien",
          },
        },
        language: {
          select: "Sprache auswählen",
        },
      },
      loading: {
        message: "Wird geladen...",
      },
      notFound: {
        title: "404 Nicht gefunden",
        message: "Die von Ihnen gesuchte Seite existiert nicht.",
      },
      forbidden: {
        title: "403 Verboten",
        message: "Sie haben keine Berechtigung, auf diese Seite zuzugreifen.",
      },
      maintenance: {
        title: "Wartungsmodus",
        message:
          "Die Website befindet sich derzeit im Wartungsmodus. Bitte versuchen Sie es später erneut.",
      },
      construction: {
        title: "Im Aufbau",
        message:
          "Diese Seite befindet sich im Aufbau. Bitte später erneut prüfen.",
      },
    },
  },
  ua: {
    translation: {
      user: {},
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18next.on("languageChanged", (lng: string) => {
  localStorage.setItem("language", lng);
});

export default i18next;
export const getSavedLanguage = () => {
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage && resources.hasOwnProperty(savedLanguage)) {
    return savedLanguage;
  }
  return null;
};

export const getAvailableLanguages = () => {
  const languageConfig: Record<string, { name: string; flag: any }> = {
    pl: { name: "Polski", flag: PL },
    en: { name: "English", flag: GB },
    de: { name: "Deutsch", flag: DE },
  };

  return Object.keys(resources).map((lang) => ({
    code: lang,
    ...(languageConfig[lang] ?? { name: lang, flag: BadgeQuestionMarkIcon }),
  }));
};
