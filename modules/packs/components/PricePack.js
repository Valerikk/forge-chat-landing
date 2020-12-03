import ChooseButton from './ChooseButton'
import style from '../services/PricePack.module.scss'

export default function PrisePack({price, name, text, list, isPopular}){
  return(
    <React.Fragment>
      <div className={`col-md-3 pricePack ${isPopular && style.bluePack}`}>
        <h2 className={style.price}>{price}<div className={style.perMonth}>/ month</div></h2>
        <p className={style.name}>{name}</p>
        <p className={style.text}>{text}</p>
        <ul className={style.list}>
          {
            list.map((item, i) => (
            <li key={i}>{item}</li>
            ))
          }
        </ul>
        <ChooseButton/>
      </div>
    </React.Fragment>
  )
}