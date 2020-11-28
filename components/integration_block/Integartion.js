import style from './integration.module.scss';
import titleStyles from "../titleStyles.module.scss";

export default function Integration(){
  return(
    <React.Fragment>
      <div className={style.integration}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-md-auto">
              <h2 className={style.title}>
                <div className={titleStyles.boxedLetter}>U</div> ses for this app to the <p className={titleStyles.blueText}>perfect integration</p>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ml-md-auto">
            <p className={style.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}