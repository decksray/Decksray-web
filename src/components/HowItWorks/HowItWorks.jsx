import "./HowItWorks.scss";

export const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <h2>How Decksray Works</h2>
      <p className="section-decription">
        Pop in your cards, hit scan, and watch Decksray do the rest. It reads
        every card, creates a file for you, and gets your collection ready to
        import anywhere.
      </p>
      <div id="how-it-works-container">
        <div className="how-it-works-col">
          <img
            className="how-it-works-icon"
            src="/assets/info-icons/SCAN.png"
            alt="scan icon"
            loading="lazy"
          />
          <img
            className="how-it-works-img"
            src="/assets/Decksray (10) (1).png"
            alt="scan img"
            loading="lazy"
          />
          <h3>Scan your Trading Cards:</h3>
          <p>
            Ensures precise and detailed scans, preserving unique card
            characteristics.
          </p>
        </div>

        <div className="how-it-works-col">
          <img
            className="how-it-works-icon"
            src="/assets/info-icons/FILE.png"
            alt="file icon"
            loading="lazy"
          />
          <img
            className="how-it-works-img"
            src="/assets/CSV_Example2.png"
            alt="file csv img"
            loading="lazy"
          />
          <h3>Effortless Cataloguing:</h3>
          <p>
            Generates a CSV file with scanned card data, streamlining
            organization.
          </p>
        </div>

        <div className="how-it-works-col">
          <img
            className="how-it-works-icon"
            src="/assets/info-icons/PLAN.png"
            alt="plan icon"
            loading="lazy"
          />
          <img
            className="how-it-works-img"
            src="/assets/manage_collection.png"
            alt="manage collection img"
            loading="lazy"
          />
          <h3>Manage your collection.</h3>
          <p>
            Upload you CSV to any popular TCG platform to add to your collection
            and start building decks.
          </p>
        </div>
      </div>
    </section>
  );
};
