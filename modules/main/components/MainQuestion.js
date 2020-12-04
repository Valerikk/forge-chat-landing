import styles from '../services/main.module.scss';


const getReasons = (key, t ) => {
    return {
      text: t('MAIN.'+key+'.text'),
      link: t('MAIN.'+key+'.link'),
    }
  }

export default function MainQuestions({reasonsKey, t}) {
  const textData = getReasons(reasonsKey, t)
  const {text, link} = textData
  return (
        <p className={styles.guestion}>
        {text}
        <a href="#" className={styles.signLink}>
        {link}
        </a>
    </p>
  )
}