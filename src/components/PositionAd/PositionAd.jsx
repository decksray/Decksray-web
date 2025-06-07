import "./PositionAd.scss";
import decksrayLogo from "/assets/logo/logo_main.png";

export const PositionAd = () => {
  return (
    <section id="position-ad">
      <div id="position-ad-logo-container">
        <a href="/">
          <img src={decksrayLogo} alt="Decksray-Logo" />
        </a>
      </div>
      <div id="position-ad-description">
        <h2>🔥 Werde Teil des Decksray-Teams! 🔥</h2>
        <p>
          Wir entwickeln einen <b>Sammelkarten-Scanner</b>, der Sammlern hilft,
          ihre Trading Card Sammlungen (z.B. Magic: The Gathering) effizient zu
          digitalisieren. Unser Ziel ist es, die Verwaltung von Sammelkarten zu
          vereinfachen und den Nutzern eine benutzerfreundliche, zeitsparende
          und kostengünstige Lösung zu bieten. <br />
          Schaue dir gerne unseren aktuellen Protoypen in Aktion auf unserem{" "}
          <a
            href="https://www.youtube.com/@Decksray"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube" /> YouTube-Kanal
          </a>{" "}
          an und erfahre mehr über uns auf unserer{" "}
          <a href="https://decksray.com/" target="_blank">
            <i className="fa-solid fa-globe" /> Homepage
          </a>
          .
        </p>
        <p>
          Unser Team aus drei Leuten sucht eine/n 4. Partner/in in <b>Berlin</b>
          , der/die Grundkenntnisse in folgenden (aber nicht unbedingt allen)
          Bereichen hat:
        </p>
        <ul>
          <li>🛠️ Mechanisches Design & CAD</li>
          <li>🖨️ 3D-Druck & Prototypenbau</li>
          <li>🔌 Elektronik (Arduino/Raspberry Pi)</li>
          <li>🖥️ ... sonstige IT Kenntnisse</li>
        </ul>
        <p>
          Viel wichtiger für uns ist, dass du eine gewisse Leidenschaft für so
          ein Projekt mitbringst.
        </p>
        <p>
          Wir treffen uns wöchentlich in einem Makerspace, wo uns alle möglichen
          Werkzeuge und Gerätschaften zur Verfügung stehen.
        </p>
        <p>
          Wenn du dich also angesprochen fühlst, Trading Cards oder nerdige
          Projekte liebst und Teil eines engagierten, lernorientierten Teams
          sein möchtest – dann bist du bei uns genau richtig!
        </p>
        <p className="bold">
          Wichtig: Dies ist kein Job oder eine bezahlte Stelle, sondern eine
          Partnerschaft. Wir sind alle Studenten und arbeiten neben unserem
          Studium an diesem Projekt. Wir bauen und lernen gemeinsam.
        </p>
      </div>

      <div id="position-ad-contact-us">
        <p>
          👉 <b>Interesse?</b> Dann schreib uns gerne eine E-Mail an{" "}
          <a className="email-link" href="mailto:info@decksray.com">
            info@decksray.com
          </a>{" "}
          oder nutze unser Kontakformular. 👇
        </p>
        <h3>Contact Us</h3>
        <div>
          <a href="#contact-us">
            <i id="arrow-to-contact" className="fa-solid fa-arrow-down" />
          </a>
        </div>
      </div>
    </section>
  );
};
