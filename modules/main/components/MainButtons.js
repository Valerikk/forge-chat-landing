import styles from '../services/main.module.scss';


const getReasons = (key, t ) => {
    return {
      text: t('MAIN.'+key+'.text'),
    }
  }

export default function MainButtons({reasonsKey, t}) {
  const textData = getReasons(reasonsKey, t)
  const {text} = textData
  return (
      <div>
        <button className={styles.tryButton}>{text}</button>
            <button className={styles.play}>
            <img
                className={styles.playImg}
                src="/assets/images/main_images/play button.svg"
                alt="text"
            />
        </button>
     </div>
  )
}