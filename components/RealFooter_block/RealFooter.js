import Footer from "../footer_block/Footer";
import Questions from "../questions_block/Questons";
import style from "./RealFooter.module.scss"

export default function RealFooter(){
  return(
    <React.Fragment>
      <div className={style.realFooter}>
        <Questions/>
        <Footer/>
      </div>
    </React.Fragment>
  )
}