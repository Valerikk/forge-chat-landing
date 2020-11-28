import style from './ReasonsTextCard.module.scss';
import titleStyles from "/Users/forgesolutions/Documents/Work/forge-chat-landing/components/titleStyles.module.scss";
export default function ReasonsTextCard(){
  return(
    <h2 className={style.textStrong}>
      <div className={titleStyles.boxedLetter}>A</div> 
      <p className={titleStyles.blueText}>few reasons</p> why we might be the right choise.
    </h2>
  )
}