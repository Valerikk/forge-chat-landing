import chooseButton from '../services/Packs.module.scss';

export default function ChooseButton(blue){
  return(
    <button className={chooseButton.chooseButton} style={blue ? {background:"#03CCF8"} : {background:"#FFFFFF"}}>Choose plan</button>
  )
}