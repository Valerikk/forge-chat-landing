import style from "./comments.module.scss";

export default function SliderBar({ arr, current }) {
  return (
    <div>
      <ul>
        {arr.map((item, index) => {
          return (
            <li key={index} className={current == index ? style.sliderBarCurrent : style.sliderBar}/>
          );
        })}
      </ul>
    </div>
  );
}
