import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const i18n = i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "de",
    load: "languageOnly", // onle use language code, not the region code
    resources: {
      de: {
        translation: {
          headline: "Werde Teil des Decksray-Teams!",
          intro:
            "Wir entwickeln einen <b>Sammelkarten-Scanner</b>, der Sammlern hilft, ihre Trading Card Sammlungen (z.B. Magic: The Gathering) effizient zu digitalisieren. Unser Ziel ist es, die Verwaltung von Sammelkarten zu vereinfachen und den Nutzern eine benutzerfreundliche, zeitsparende und kostengünstige Lösung zu bieten.<br/> Schaue dir gerne unseren aktuellen Prototypen in Aktion auf unserem <a><i/> YouTube-Kanal</a> an und erfahre mehr über uns auf unserer <a2><i2/> Homepage</a2>.",
          skills:
            "Unser Team aus drei Leuten sucht eine/n 4. Partner/in in <b>Berlin</b>, der/die Grundkenntnisse in folgenden (aber nicht unbedingt allen) Bereichen hat:",
          s1: "🛠️ Mechanisches Design & CAD",
          s2: "🖨️ 3D-Druck & Prototypenbau",
          s3: "🔌 Elektronik (Arduino/Raspberry Pi)",
          s4: "🖥️ ... sonstige IT Kenntnisse",
          important:
            "Viel wichtiger für uns ist, dass du eine gewisse <b>Leidenschaft</b> für so ein Projekt mitbringst.",
          makerspace:
            "Wir treffen uns wöchentlich in einem Makerspace, wo uns alle möglichen Werkzeuge und Gerätschaften zur Verfügung stehen.",
          vibe: "Wenn du dich also angesprochen fühlst, Trading Cards oder nerdige Projekte liebst und Teil eines engagierten, lernorientierten Teams sein möchtest – dann bist du bei uns genau richtig!",
          disclaimer:
            "Wichtig: Dies ist kein Job oder eine bezahlte Stelle, sondern eine Partnerschaft. Wir sind alle Studenten und arbeiten neben unserem Studium an diesem Projekt. Wir bauen und lernen gemeinsam.",
          contact:
            "👉 <b>Interesse?</b> Dann schreib uns gerne eine E-Mail an <a>info@decksray.com</a> oder nutze unser Kontakformular. 👇",
          cta: "Schreib uns!",
        },
      },
      en: {
        translation: {
          headline: "Become Part of the Decksray Team!",
          intro:
            "We're developing a <b>trading card scanner</b> that helps collectors efficiently digitize their collections (e.g., Magic: The Gathering). Our goal is to simplify card management with a user-friendly, time-saving, and affordable solution.<br/> Check out our prototype in action on our <a><i/> YouTube channel</a> and learn more about us on our <a2><i2/> homepage</a2>.",
          skills:
            "Our team of three is looking for a 4th partner in <b>Berlin</b> with basic knowledge in one or more of the following areas:",
          s1: "🛠️ Mechanical Design & CAD",
          s2: "🖨️ 3D Printing & Prototyping",
          s3: "🔌 Electronics (Arduino/Raspberry Pi)",
          s4: "🖥️ ... other IT skills",
          important:
            "More important than your skills is your <b>passion</b> for the project.",
          makerspace:
            "We meet weekly at a makerspace with access to all kinds of tools and equipment.",
          vibe: "If you love trading cards or nerdy projects and want to be part of a learning-driven team – you're in the right place!",
          disclaimer:
            "Important: This is not a job or paid position, but a partnership. We're all students and working on this project alongside our studies. We're building and learning together.",
          contact:
            "👉 <b>Interested?</b> Send us an email at <a>info@decksray.com</a> or use our contact form. 👇",
          cta: "Write us!",
        },
      },
      interpolation: {
        escapeValue: false,
      },
    },
  });

export default i18n;
