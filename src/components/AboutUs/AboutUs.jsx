import { SubscriptionFormMailerLite } from "../SubscriptionForm/SubscriptionFormMailerLite";
import { ProfileCard } from "../ProfileCard/ProfileCard";

import "./AboutUs.scss";

export const AboutUs = () => {
  return (
    <section id="about-us">
      <SubscriptionFormMailerLite />

      <h2>Forged by players, built for players.</h2>
      <p className="section-decription">
        We're a team of collectors, tinkerers, and engineers who love this game
        as much as you do. Decksray was born from our own frustration — a quest
        to finally solve a problem the card community has faced for decades.
      </p>
      <div id="about-us-profile-container">
        <ProfileCard
          name={"Ben"}
          manaCost={"2BB"}
          imgPath={"/assets/ppl/Ben.jpg"}
          cardType={"Creature - Pathweaver"}
          descr={
            "Ben is a passionate Magic player and collector, always ready for a good EDH game. After years of experience in finance, he’s now leading Decksray’s journey from idea to reality. With an eye for detail and a drive for progress, he keeps the team aligned and the project moving."
          }
          powerAndToughness={"3/4"}
        />

        <ProfileCard
          name={"David"}
          manaCost={"RRRRR"}
          imgPath={"/assets/ppl/David.jpg"}
          cardType={"Creature - Human Tinkerer"}
          descr={
            "A die-hard red MTG player, David brings passion and precision to Decksray. With years of experience in metalworking and construction, he knows his way around every tool. Now, as a mechatronics engineer, he channels that same creativity into building our mechanical systems."
          }
          powerAndToughness={"7/1"}
        />

        <ProfileCard
          name={"JuDa"}
          manaCost={"5"}
          imgPath={"/assets/ppl/JuDa.png"}
          cardType={"Creature - Human Electromancer"}
          descr={
            "JuDa is a passionate developer who lives and breathes software. He dreams of electronics and zip files, and spends his time building and experimenting with embedded systems. Whether it's writing low-level code or tinkering with hardware, JuDa is always in his element."
          }
          powerAndToughness={"0/9"}
        />
        {/* -- Job ad -- */}
        {/* <ProfileCard
          name={"Your name could be here"}
          manaCost={"1"}
          imgPath={"/assets/ppl/unknown.png"}
          cardType={"Creature - New Partner"}
          descr={
            <>
              If you live in or near Berlin, Germany and are interested in
              joining us as a partner in this project, click{" "}
              <a href="/join">
                <b>
                  <u>here</u>
                </b>
              </a>{" "}
              to find out more ...
            </>
          }
          powerAndToughness={"1/1"}
        /> */}

        <ProfileCard
          name={"Andi"}
          manaCost={"WUG"}
          imgPath={"/assets/ppl/Andi.png"}
          cardType={"Creature - Ether Mechanic"}
          descr={
            "Andi breathes life into the mechanical heart of Decksray, where engineering precision meets a touch of magic. From detailed CAD modeling to 3D printing and fine-tuning the scanner’s motion system, Andi blends craftsmanship with innovation — the bridge between magic and machinery."
          }
          powerAndToughness={"2/5"}
        />
        <ProfileCard
          name={"Gaston"}
          manaCost={"XUR"}
          imgPath={"/assets/ppl/Ghassen.jpeg"}
          cardType={"Creature - Digital Artificer"}
          descr={
            "Gaston shapes the intelligence behind Decksray's card recognition. Trained in technical computer science, he builds the software that allows Decksray to see and understand. With algorithmic mastery and creative engineering, he gives the machine its sight."
          }
          powerAndToughness={"* / *"}
        />
        <ProfileCard
          name={"Wadi"}
          manaCost={"3WWW"}
          imgPath={"/assets/ppl/Wadi.jpeg"}
          cardType={"Creature - Digital Artificer"}
          descr={
            "Wadi brings the card recognition of Decksray to life. With a background in embedded systems, he turns complex algorithms into real-time results. From optimizing image processing to connecting sensors and hardware, Wadi bridges the physical and digital worlds."
          }
          powerAndToughness={"6/6"}
        />
      </div>
    </section>
  );
};
