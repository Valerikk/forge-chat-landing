import styles from './ReasonsCard.module.scss';

const getReasons = (key, t ) => {
  return {
    blueText: t('INFOBLOCKS.'+key+'.blueText'),
    title: t('INFOBLOCKS.'+key+'.title'),
    text: t('INFOBLOCKS.'+key+'.text'),
  }
}
export default function ReasonText({reasonsKey, linkToIcon, t}) {
  const textData = getReasons(reasonsKey, t)
  const {blueText, title, text} = textData
  return (
    <div className={styles.card}>
      <img src={linkToIcon}/>
      <div className={styles.title}><div className={styles.blueText}>{blueText}</div>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}