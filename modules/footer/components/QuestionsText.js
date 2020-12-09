import style from './Questions.module.scss';

const getReasons = (key, t ) => {
    return {
      title: t('QUESTIONS.'+key+'.title'),
      text: t('QUESTIONS.'+key+'.text'),
    }
  }
  
  export default function QuestionsText({reasonsKey, t}){
    const textData = getReasons(reasonsKey, t)
    const {title, text} = textData
    return(
        <div>
            <h2 className={style.title}>{title}</h2>
            <p className={style.text}>{text}</p>
        </div>
    )
  }