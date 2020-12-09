import style from './Packs.module.scss';

export default function ChooseButton({isBlue}){
  return(
    <button className={isBlue ? style.blueChooseButton : style.chooseButton}>Choose plan</button>
  )
}