import "./App.scss";
import { ContactUs } from "../components/ContactUs/ContactUs";
import { MainFooter } from "../components/MainFooter/MainFooter";
import { MainNavBar } from "../components/MainNavBar/MainNavBar";
import { PositionAd } from "../components/PositionAd/PositionAd";

function App() {
  return (
    <>
      <header>{/* <MainNavBar /> */}</header>
      <main>
        <PositionAd />
        <ContactUs />
      </main>
      <footer>
        <MainFooter />
      </footer>
    </>
  );
}

export default App;
