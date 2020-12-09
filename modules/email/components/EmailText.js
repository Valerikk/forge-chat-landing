import style from './email.module.scss';

const getReasons = (key, t ) => {
    return {
      title: t('EMAIL.'+key+'.title'),
      text: t('EMAIL.'+key+'.text'),
    }
  }
  
  export default function EmailText({reasonsKey, t}){
    const textData = getReasons(reasonsKey, t)
    const {title, text} = textData
    return(
        <div>
            <h2 className={style.title}>{title}</h2>
            <p className={style.text}>
                {text}
            </p>
        </div>
    )
  }
  