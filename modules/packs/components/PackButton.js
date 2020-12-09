import style from './Packs.module.scss'
export default function PackButtons({currentRate, buttonRate, setRate}){
  return(
  <div className={style.buttonBlock}>
    <button 
      className={currentRate === buttonRate.MONTHLY ? style.choiseBlueButton : style.choiseButton} 
      onClick={() => setRate(buttonRate.MONTHLY)}
    >Monthly</button>
    <button 
      className={currentRate === buttonRate.YEARLY ? style.choiseBlueButton : style.choiseButton} 
      onClick={() => setRate(buttonRate.YEARLY)}
    >Yearly</button>
  </div>
  )
}