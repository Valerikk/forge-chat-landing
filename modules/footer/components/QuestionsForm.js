import style from './Questions.module.scss';

const getReasons = (key, t ) => {
    return {
      buttonText: t('QUESTIONS.'+key+'.buttonText'),
    }
  }
  
  export default function QuestionsForm({reasonsKey, t}){
    const textData = getReasons(reasonsKey, t)
    const {buttonText} = textData
    return(
        <form>
            <input className={style.nameInput} placeholder="Name"></input>
            <input className={style.emailInput} placeholder="Email"></input>
            <textarea className={style.areaInput} placeholder="Type message..."></textarea>
            <button className={style.button} type="submit" >{buttonText}</button>
        </form>
    )
  }