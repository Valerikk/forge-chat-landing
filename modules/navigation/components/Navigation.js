import style from "./navigation.module.scss";
import { NavItems } from "./NavItems";
import MainButtons from "../../main/components/MainButtons";

export default function Navigation({ t, isMainHeader = true, hide = false }) {
  const Go = (url) => {
    alert(url);
  };
  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`${style.header} ${isMainHeader ? style.uiOne : style.uiSecond} ${hide && style.hideHeader} col-md-12`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              onClick={() => ScrollTop()}
              src={isMainHeader ? "assets/images/main_images/logo.svg": "assets/images/main_images/logoBlack.png" }
            />
          </div>
          <div className="col-md-6">
            <ul>
              {NavItems.map((item) => (
                <li key={item.title}>
                  <button onClick={() => Go(item.url)}>{item.title}</button>
                </li>
              ))}
            </ul>
          </div>
          {!isMainHeader && (
            <div className="col-md-3">
              <MainButtons t={t} reasonsKey="BUTTON" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}