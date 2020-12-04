import styles from '../services/main.module.scss';


const getReasons = (key, t ) => {
    return {
      title: t('MAIN.'+key+'.title'),
      blueText: t('MAIN.'+key+'.blueText'),
    }
  }

export default function MainTitle({reasonsKey, t}) {
  const textData = getReasons(reasonsKey, t)
  const {blueText, title} = textData
  return (
     <h2 className={styles.firstText}>
         {title}
        <div className={styles.blueText}>{blueText}</div>
    </h2>
  )
}