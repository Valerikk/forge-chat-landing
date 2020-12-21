import styles from "./main.module.scss";

const getReasons = (key, t) => {
  return {
    text: t("MAIN." + key + ".text"),
  };
};

export default function MainButtons({ reasonsKey, t, hidden }) {
  const textData = getReasons(reasonsKey, t);
  const { text } = textData;
  return (
    <div>
      <button className={styles.tryButton}>{text}</button>
      <div className={styles.buttonBack}></div>
      <button
        onClick={() => alert("Все четко!")}
        className={!hidden ? styles.play : styles.hidden}
      />
    </div>
  );
}
