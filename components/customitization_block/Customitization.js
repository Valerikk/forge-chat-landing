import ReasonCard from '../reason_block/ReasonsText/ReasonsCard';
import style from './customitization.module.scss';
import titleStyles from "../titleStyles.module.scss";

export default function Customitization(){
  return(
    <React.Fragment>
      <div className={style.customization}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className={style.title}>
                <div className={titleStyles.boxedLetter}>C</div> ustomize your chat widget to
                match your <p className={titleStyles.blueText}>brand and website</p>
              </h2>
            </div>
            <div className="customization-image">
              <img src="/assets/images/customization_images/customization.svg" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <ReasonCard
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  title="Lorem Ipsum"
                  linkToIcon="/assets/images/customization_images/customization icon_1.png"
                />
            </div>
            <div className="col-md-4">
              <ReasonCard
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  title="Lorem Ipsum"
                  linkToIcon="/assets/images/customization_images/customization icon_2.png"
                />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <ReasonCard
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  title="Lorem Ipsum"
                  linkToIcon="/assets/images/customization_images/customization icon_3.png"
              />
            </div>
            <div class="col-md-4">
              <ReasonCard
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  title="Lorem Ipsum"
                  linkToIcon="/assets/images/customization_images/customization icon_4.png"
                />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}