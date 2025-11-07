import "./InAction.scss";
import img2 from "/assets/card-scanner/Decksray_scanner_3.jpg";
import img3 from "/assets/card-scanner/Decksray_scanner_MakerFaire.JPG";

export const InAction = () => {
  return (
    <section id="in-action">
      <h2>Here it is — the Decksray machine in action.</h2>
      <p className="section-decription">
        It scans cards, recognizes them, and does exactly what we always wished
        existed. Check it out!
      </p>

      <div id="in-action-gallery">
        <img
          src={img3}
          className="in-action-img-1"
          alt="decksray card scanner machine"
          loading="lazy"
        />

        <iframe
          src="https://www.youtube.com/embed/AYXL42IYhKE?si=-2w2ih0prkxUEN-J&;controls=1&rel=0"
          title="YouTube video player - Decksray in action"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;fullscreen; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
        />

        <img
          src={img2}
          className="in-action-img-2"
          alt="decksray card scanner machine"
          loading="lazy"
        />
      </div>
    </section>
  );
};
