import "./InAction.scss";

export const InAction = () => {
  return (
    <section id="in-action">
      <div id="in-action-title">
        <h2>In Action</h2>
        <h5>(Prototype 07)</h5>
      </div>
      <div id="in-action-gallery">
        <img
          src="/assets/card-scanner/Decksray_scanner_2.png"
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
          src="/assets/card-scanner/Decksray_scanner_3.jpg"
          alt="decksray card scanner machine"
          loading="lazy"
        />
      </div>
    </section>
  );
};
