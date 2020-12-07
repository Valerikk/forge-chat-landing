import style from '../services/navigation.module.scss';
import {NavItems} from './NavItems';
 
export default function Navigation() {
  const openList = () => {
    
  }
  return (
    <div className="row">
      <div className="col-md-4">
          <img
            className={style.logo}
            src="assets/images/main_images/logo.svg"
          />
      </div>
      <div className="col-lg-7">
        <nav>
          <ul className={style.navList}>
            {NavItems.map((item) => (
                <li href={item.url}>
                  <button>{item.title}</button>
                </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}