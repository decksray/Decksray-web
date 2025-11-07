import "./ProfileCard.scss";

export const ProfileCard = ({
  name,
  manaCost,
  imgPath,
  cardType,
  descr,
  powerAndToughness,
}) => {
  const validSymbols = ["1", "2", "B", "R", "G", "U", "W"];
  const manaCostArr = manaCost
    .split("")
    .filter((symbol) => validSymbols.includes(symbol));

  return (
    <div className="about-us-profile-card">
      <div className="name-box">
        <h4>{name}</h4>
        <div className="mana-cost">
          {manaCostArr.map((symbol, i) => (
            <img
              key={`${symbol} + ${i}`}
              src={`/assets/mana-symbols/${symbol}.png`}
              alt={`${symbol} mana symbol`}
            />
          ))}
        </div>
      </div>
      <div className="art-box">
        <img src={imgPath} alt="photo of person" />
      </div>
      <div className="type-box">
        <h5>{cardType}</h5>
        <div className="set-symbol">
          <img src="/assets/favicon/watermark_small.png" alt="" />
        </div>
      </div>
      <div
        className="text-box"
        style={{ "--powerAndToughness": `"${powerAndToughness}"` }}
      >
        <div className="text-box-inner">
          <p>{descr}</p>
        </div>
      </div>
    </div>
  );
};
