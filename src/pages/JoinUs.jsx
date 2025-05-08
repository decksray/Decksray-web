import "./App.scss";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { ContactUs } from "../components/ContactUs/ContactUs";
import { HowItWorks } from "../components/HowItWorks/HowItWorks";
import { InAction } from "../components/InAction/InAction";
import { KeyFeatures } from "../components/KeyFeatures/KeyFeatures";
import { MainBanner } from "../components/MainBanner/MainBanner";
import { MainFooter } from "../components/MainFooter/MainFooter";
import { MainNavBar } from "../components/MainNavBar/MainNavBar";
import { SubscriptionForm } from "../components/SubscriptionForm/SubscriptionForm";
import { SubscriptionFormMailerLite } from "../components/SubscriptionForm/SubscriptionFormMailerLite";
import { PositionAd } from "../components/PositionAd/PositionAd";

function App() {
  return (
    <>
      <header>
        <MainNavBar />
      </header>
      <main>
        <PositionAd />

        <ContactUs />
        <SubscriptionFormMailerLite />
      </main>
      <footer>
        <MainFooter />
      </footer>
    </>
  );
}

export default App;
