import style from "../services/DescribingText.module.scss"

const getReasons = (key, t ) => {
    return {
      text: t('TEXTES.'+key+'.text'),
    }
  }
  export default function ReasonText({reasonsKey, t, aligment = "left"}) {
    const textData = getReasons(reasonsKey, t)
    const  {text} = textData
    return (
      <React.Fragment>
       <p className={style.text} style={{textAlign: aligment}}>{text}</p>
      </React.Fragment>
    )
  }