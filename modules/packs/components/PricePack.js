import ChooseButton from './ChooseButton'
import style from './PricePack.module.scss'


export default function PrisePack({price, name, text, list, isPopular}){
  return(
      <div className={`col-md-3 ${style.cardPrice} ${!isPopular && style.pricePack} ${isPopular && style.bluePack}`}>
        <div>
        <h2 className={style.price}>{price}<div className={style.perMonth}>/ month</div></h2>
        <p className={style.name}>{name}</p>
        <p className={style.text}>{text}</p>
        <ul className={style.list}>
          {
            list.map((item, i) => (
            <li key={i}><img src="../assets/images/packs_images/check-circle-1.png"></img>{item}</li>
            ))
          }
        </ul>
        </div>
        <ChooseButton
          blue={isPopular && true}
        />
      </div>
  )
}

