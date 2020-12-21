import style from "./navigation.module.scss";
import { NavItems } from "./NavItems";
import MainButtons from "../../main/components/MainButtons";
import PropTypes from 'prop-types';
import { withTranslation, Link } from '../../../i18n';

function Navigation({ t, isMainHeader = true, hide = false }) {
  return (
    <div className={`${style.header} ${isMainHeader ? style.uiOne : style.uiSecond} ${hide && style.hideHeader} col-md-12`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              src={isMainHeader ? "assets/images/main_images/logo.svg": "assets/images/main_images/logoBlack.png" }
            />
          </div>
          <div className={`col-md-7 ${/*!isMainHeader &&*/ style.navItems}`}>
            <ul>
              {NavItems.map((item) => (
                <li key={t(item.title)}>
                  <Link href={item.url}>
                    <button>{t(item.title)}</button>                
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {!isMainHeader && (
            <div className="col-md-2">
              <MainButtons t={t} reasonsKey="BUTTON" hidden={true}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


Navigation.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Navigation.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Navigation)