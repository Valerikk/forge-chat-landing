import Info from "./Info";
import Questions from "./Questons";
import style from "../services/Footer.module.scss"

export default function Footer(){
  return(
    <React.Fragment>
      <div className={style.realFooter}>
        <Questions/>
        <Info/>
      </div>
    </React.Fragment>
  )
}