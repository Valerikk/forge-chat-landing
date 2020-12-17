import ChooseButton from "./ChooseButton";
import style from "./PricePack.module.scss";

export default function PrisePack({
  price,
  rate,
  name,
  text,
  list,
  isPopular,
}) {
  return (
    <div className="col-md-3">
      <div
        className={`${style.cardPrice} ${!isPopular && style.pricePack} ${
          isPopular && style.bluePack
        }`}
      >
        <div>
          <div className={!isPopular ? style.noPopular : style.popular}>
            MOST POPULAR
          </div>
          <h2 className={style.price}>
            {price}
            <div className={style.perMonth}>/ {rate}</div>
          </h2>
          <p className={style.name}>{name}</p>
          <p className={style.text}>{text}</p>
          <ul className={style.list}>
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <ChooseButton isBlue={isPopular} />
        </div>
      </div>
    </div>
  );
}
