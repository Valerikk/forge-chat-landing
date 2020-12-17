import { Link } from "../../../i18n";
import style from "./IntegrationCard.module.scss";

const getReasons = (key, t) => {
  return {
    title: t("INTEGRATION." + key + ".title"),
    text: t("INTEGRATION." + key + ".text"),
  };
};
export default function IntegrationCard({
  reasonsKey,
  linkToIcon,
  t,
  buttonLink,
}) {
  const textData = getReasons(reasonsKey, t);
  const { title, text } = textData;
  return (
    <div className='col-md-3'>
      <div className={style.card}>
        <img className={style.icon} src={linkToIcon} />
        <div className={style.title}>{title}</div>
        <div className={style.text}>{text}</div>
        <button className={style.arrowButton}>
          <Link href={buttonLink}>
            <img src="/assets/images/integration_images/Arrow 1.png" />
          </Link>
        </button>
      </div>
    </div>
  );
}
