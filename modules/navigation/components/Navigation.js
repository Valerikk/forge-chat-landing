import style from "./navigation.module.scss";
import { NavItems } from "./NavItems";
import MainButtons from "../../main/components/MainButtons";
import Link from "next/link";

export default function Navigation({ t, isMainHeader = true, hide = false }) {
  return (
    <div className={`${style.header} ${isMainHeader ? style.uiOne : style.uiSecond} ${hide && style.hideHeader} col-md-12`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              src={isMainHeader ? "assets/images/main_images/logo.svg": "assets/images/main_images/logoBlack.png" }
            />
          </div>
          <div className="col-md-7">
            <ul>
              {NavItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.url}>
                    <button>{item.title}</button>                
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {!isMainHeader && (
            <div className="col-md-2">
              <MainButtons t={t} reasonsKey="BUTTON" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
