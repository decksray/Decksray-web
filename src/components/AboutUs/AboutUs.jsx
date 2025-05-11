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
          manaCost={"1"}
          cardType={"Creature - Electro Software Artificer"}
          descr={"JuDa recently joined us. More details coming soon! :)"}
          powerAndToughness={"0/3"}
        />
      </div>
    </section>
  );
};
