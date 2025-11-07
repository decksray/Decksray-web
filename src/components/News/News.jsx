import "./News.scss";
import { NewsCard } from "../../NewsCard/NewsCard";
import { useState } from "react";

export const News = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slides = [
    <NewsCard num={1} />,
    <NewsCard num={2} />,
    <NewsCard num={3} />,
  ];

  const plusSlides = (n) => {
    let newIndex = ((slideIndex + n) % slides.length) + 1;
    // if (newIndex > slides.length) newIndex = 1;
    // if (newIndex < 1) newIndex = slides.length;
    setSlideIndex(newIndex);

    console.log(slideIndex);
    // slides.unshift(slides.pop());
    // console.log(slides[0].props);
  };

  return (
    <section id="news">
      <div id="slideshow-container">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="slide"
            style={{ display: slideIndex === i + 1 ? "block" : "none" }}
          >
            {slide}
          </div>
        ))}

        <button className="prev" onClick={() => plusSlides(-1)}>
          {"<"}
        </button>
        <button className="next" onClick={() => plusSlides(1)}>
          {">"}
        </button>
      </div>
      <div id="slideshow-preview">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="slide-preview"
            style={{ display: slideIndex !== i + 1 ? "block" : "none" }}
          >
            {slide}
          </div>
        ))}
      </div>
    </section>
  );
};
