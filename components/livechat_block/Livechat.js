import style from './livechat.module.scss';
import ReasonCard from '../reason_block/ReasonsText/ReasonsCard'
import titleStyles from "../titleStyles.module.scss";

export default function Livechat(){
  return(
    <React.Fragment>
      <div className={style.livechat}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className={style.title}><div className={titleStyles.boxedLetter}>P</div> ositive <p className={titleStyles.blueText}>human support</p> expirience </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. </p>
            </div>
          </div>
            <div className="livechat-table">
              <div className="col-md-4">
                <ReasonCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" 
                  title="Personalized customer care" 
                  linkToIcon="/assets/images/livechat_images/smile_icon.png"/>
              </div>
              <div class="col-md-4">
                <ReasonCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" 
                    title="Personalized customer care" 
                    linkToIcon="/assets/images/livechat_images/smile_icon.png"/>
              </div>
              <div className="col-md-4">
                <ReasonCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" 
                    title="Personalized customer care" 
                    linkToIcon="/assets/images/livechat_images/smile_icon.png"/>
                </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}