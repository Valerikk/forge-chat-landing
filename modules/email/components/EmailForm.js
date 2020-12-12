import style from "./email.module.scss";

const getReasons = (key, t) => {
  return {
    buttonText: t("EMAIL." + key + ".buttonText"),
  };
};

export default function EmailForm({ reasonsKey, t }) {
  const textData = getReasons(reasonsKey, t);
  const { buttonText } = textData;
  return (
    <div className={style.form}>
      <input type="email" id="input" className={style.input} placeholder="Enter your Email"/>
      <button type="submit" className={style.submit}>
        <p className={style.buttonText}>{buttonText}</p>
      </button>
    </div>
  );
}
