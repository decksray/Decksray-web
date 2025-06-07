import "./MainBanner.scss";

export const MainBanner = () => {
  return (
    <section id="main-banner">
      <div id="main-banner-text">
        <div id="main-banner-text-1">
          <h1>Transform your collection </h1>
          <div>
            <h1>with</h1>
            <img src="/assets/logo/logo_white_transparent.png" alt="" />
            <h1>!</h1>
          </div>
        </div>
        <div id="main-banner-text-2">
          <h3>
            The first affordable, automatic trading card scanner.
            <br />
            Scan your entire collection and simplify your card management.
          </h3>
          <p>(coming soon)</p>
        </div>
        <div id="main-banner-text-btns">
          <button>
            <a href="#how-it-works">More Info</a>
          </button>
        </div>
      </div>
      <div id="main-banner-img">
        <img src="/assets/Decksray_(35).png" alt="card scaner" />
      </div>
    </section>
  );
};
