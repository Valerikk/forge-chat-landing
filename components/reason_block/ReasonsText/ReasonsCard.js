import styles from './ReasonsCard.module.scss';
export default function ReasonText({text, linkToIcon, title}) {
  return (
    <React.Fragment>

      <img src={linkToIcon}/>
      <p class={styles["reasons-title"]}>{title}</p>
      <p class={styles["reasons-text"]}>
        {text}
      </p>
    </React.Fragment>
  )
}