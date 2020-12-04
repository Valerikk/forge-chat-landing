import styles from '../services/main.module.scss';


const getReasons = (key, t ) => {
    return {
      text: t('MAIN.'+key+'.text'),
    }
  }

export default function MainText({reasonsKey, t}) {
  const textData = getReasons(reasonsKey, t)
  const {text} = textData
  return (
    <p className={styles.underText}>
        {text}
    </p>
  )
}