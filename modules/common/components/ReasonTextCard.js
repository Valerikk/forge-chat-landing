import style from './ReasonsTextCard.module.scss';
import titleStyles from './TitleStyles.module.scss';

const getReasons = (key, t ) => {
  return {
    boxedLetter: t('REASONS.'+key+'.boxedLetter'),
    beforeColored: t('REASONS.'+key+'.beforeColored'),
    colored: t('REASONS.'+key+'.colored'),
    afterColored: t('REASONS.'+key+'.afterColored')
  }
}

export default function ReasonsTextCard({reasonsKey, t, backURL,alignment = "left"}){
  const textData = getReasons(reasonsKey, t)
  const {boxedLetter, beforeColored, colored, afterColored} = textData
  return(
    <p className={style.textStrong} style={{textAlign: alignment, marginTop: 30 +'px', marginBottom: 30 +'px'}}>
      <span className={titleStyles.boxedLetter}>{boxedLetter}</span> 
      {beforeColored}<span className={titleStyles.blueText} style={{background: `url(${backURL}) no-repeat`, backgroundPosition: 'left bottom'}}>{colored}</span>{afterColored}
    </p>
  )
}

