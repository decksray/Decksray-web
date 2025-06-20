import { SubscriptionFormMailerLite } from "../SubscriptionForm/SubscriptionFormMailerLite";
import { ProfileCard } from "../ProfileCard/ProfileCard";

import "./AboutUs.scss";

export const AboutUs = () => {
  return (
    <section id="about-us">
      <SubscriptionFormMailerLite />
      <h2>About Us</h2>
      <div id="about-us-profile-container">
        <ProfileCard
          name={"Ben"}
          manaCost={"2BB"}
          imgPath={"/assets/ppl/Ben.jpg"}
          cardType={"Creature - Human Developer"}
          descr={
            "Ben is a passionate Magic player and collector, always ready for a good EDH game. After years of experience in finance, he's recently chosen a new career path. As a web developer he brings his love for coding to life. Whether it's casting spells or writing code, he's always up for a new challenge!"
          }
          powerAndToughness={"3/4"}
        />

        <ProfileCard
          name={"David"}
          manaCost={"RRRRR"}
          imgPath={"/assets/ppl/David.jpg"}
          cardType={"Creature - Human Tinkerer"}
          descr={
            "As a die-hard red Magic: The Gathering fan I love diving into the world of cards. With years of experience in metalworking and construction, I can handle a hammer and wrench. Nowadays, I'm having a blast as a mechatronics engineer, using my love for tech to create some cool stuff!"
          }
          powerAndToughness={"7/1"}
        />

        <ProfileCard
          name={"JuDa"}
          manaCost={"2"}
          imgPath={"/assets/ppl/JuDa.png"}
          cardType={"Creature - Human Electromancer"}
          descr={
            "JuDa is a passionate developer who lives and breathes software. He dreams of electronics and zip files, and spends his time building and experimenting with embedded systems. Whether it's writing low-level code or tinkering with hardware, JuDa is always in his element."
          }
          powerAndToughness={"0/5"}
        />

        <ProfileCard
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
              to find out more.
            </>
          }
          powerAndToughness={"1/1"}
        />
      </div>
    </section>
  );
};
