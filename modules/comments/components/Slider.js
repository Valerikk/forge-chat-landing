import { useState } from "react";
import style from "./comments.module.scss";
import Review from "./Review";
import SliderBar from "./SliderBar";
export default function Slider() {
  const reviews = [
    {
      imgURL: "/assets/images/comments_images/avatar.png",
      name: "Ivanov Ivan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      imgURL: "/assets/images/comments_images/avatar.png",
      name: "Sergey Bukovsky",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      imgURL: "/assets/images/comments_images/avatar.png",
      name: "Miha Loh",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = reviews.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? current : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? current : current - 1);
  };
  if (length <= 0) {
    return null;
  }
  console.log(current)
  return (
    <div
      className={`row justify-content-center align-items-center ${style.slider}`}
    >
      <div className="col-sm-1">
        <button onClick={prevSlide}>
          <img
            className={style.prevButton}
            src="/assets/images/comments_images/arrow1.png"
          />
        </button>
      </div>
      <div className={`col-lg-10 ${style.sliderBlock}`}>
        <ul className={style.comment}>
          {reviews.map((review, index) => (
            <li key={index}>
              {index === current && (
                <Review
                  imgURL={review.imgURL}
                  name={review.name}
                  text={review.text}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-sm-1">
        <button onClick={nextSlide}>
          <img
            className={style.nextButton}
            src="/assets/images/comments_images/arrow2.png"
          />
        </button>
      </div>
      <div>
          <SliderBar arr={reviews} current={current}/>
      </div>
    </div>
  );
}
