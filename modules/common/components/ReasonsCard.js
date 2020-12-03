import styles from '../services/ReasonsCard.module.scss';

const getReasons = (key, t ) => {
  return {
    title: t('INFOBLOCKS.'+key+'.title'),
    text: t('INFOBLOCKS.'+key+'.text'),
  }
}
export default function ReasonText({reasonsKey, linkToIcon, t}) {
  const textData = getReasons(reasonsKey, t)
  const {title, text} = textData
  return (
    <React.Fragment>
      <img src={linkToIcon}/>
      <p class={styles.title}>{title}</p>
      <p class={styles.text}>{text}</p>
    </React.Fragment>
  )
}