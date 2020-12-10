import { useState } from "react";
import style from "./comments.module.scss";
import Review from "./Review";

export default function Slider() {
  const reviews = [
    {
      imgURL: "/assets/images/comments_images/avatar.png",
      name: "Ivanov Ivan",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imgURL: "/assets/images/comments_images/avatar.png",
      name: "Sergey Bukovsky",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imgURL: "/assets/images/comments_images/avatar.png",
      name: "Sanya Loh",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = reviews.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-sm-1">
        <button onClick={prevSlide}>
          <img src="/assets/images/comments_images/arrow1.png" />
        </button>
      </div>
      <div className={`col-lg-10 ${style.slider}`}>
        <ul className={style.comment}>
          {reviews.map((review, index) => (
            <li className={index === current ? 'slide active' : 'slide' } key={index}>
              {index === current && 
              (<Review
                imgURL={review.imgURL}
                name={review.name}
                text={review.text}
              />)}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-sm-1">
        <button onClick={nextSlide}>
          <img src="/assets/images/comments_images/arrow2.png" />
        </button>
      </div>
    </div>
  );
}
