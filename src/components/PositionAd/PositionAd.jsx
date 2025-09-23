import "./PositionAd.scss";
import decksrayLogo from "/assets/logo/logo_main.png";
import i18n from "i18next";
import { useTranslation, Trans } from "react-i18next";

export const PositionAd = () => {
  const { t } = useTranslation();

  return (
    <section id="position-ad">
      <div id="position-ad-logo-container">
        <a href="/">
          <img src={decksrayLogo} alt="Decksray-Logo" />
        </a>
      </div>
      <div id="position-ad-description">
        <div id="position-ad-lang-btns">
          <span
            onClick={() => i18n.changeLanguage("en")}
            className={
              "fi fi-gb" + (i18n.language === "en" ? " active-lng" : "")
            }
          ></span>
          <span
            onClick={() => i18n.changeLanguage("de")}
            className={
              "fi fi-de" + (i18n.language === "de" ? " active-lng" : "")
            }
          ></span>
        </div>

        <h2 id="headline">🔥 {t("headline")} 🔥</h2>
        <p id="into">
          <Trans
            i18nKey="intro"
            components={{
              b: <strong />,
              a: (
                <a
                  href="https://www.youtube.com/@Decksray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-link"
                ></a>
              ),
              a2: (
                <a
                  href="https://decksray.com/"
                  target="_blank"
                  className="homepage-link"
                ></a>
              ),
              i: <i className="fa-brands fa-youtube" />,
              i2: <i className="fa-solid fa-globe" />,
              br: <br />,
            }}
          />
        </p>
        <p id="skills">
          <Trans i18nKey="skills" components={{ b: <strong /> }} />
        </p>
        <ul>
          <li id="s1">{t("s1")}</li>
          <li id="s2">{t("s2")}</li>
          <li id="s3">{t("s3")}</li>
          <li id="s4">{t("s4")}</li>
        </ul>
        <p id="important">
          <Trans i18nKey="important" components={{ b: <strong /> }} />
        </p>
        <p id="makerspace">{t("makerspace")}</p>
        <p id="vibe">{t("vibe")}</p>
        <p id="disclaimer" className="bold">
          {t("disclaimer")}
        </p>
      </div>

      <div id="position-ad-contact-us">
        <p id="contact">
          <Trans
            i18nKey="contact"
            components={{
              b: <strong />,
              a: <a className="email-link" href="mailto:info@decksray.com"></a>,
            }}
          />
        </p>
        <h3 id="cta">{t("cta")}</h3>
        <div>
          <a href="#contact-us">
            <i id="arrow-to-contact" className="fa-solid fa-arrow-down" />
          </a>
        </div>
      </div>
    </section>
  );
};
