import ReasonCard from "../reason_block/ReasonsText/ReasonsCard";
import style from './crm.module.scss';
import titleStyles from "../titleStyles.module.scss";
export default function Crm(){
  return (
    <React.Fragment>
      <div className={style.crm}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className={style.title}>
                <div className={titleStyles.boxedLetter}>T</div> ry other features of{" "}
                <p className={titleStyles.blueText}>Forge Solutions!</p>
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <h2 className={style.title}>
                <div className={titleStyles.boxedLetter}>F</div>orge:{" "}
                <p className={titleStyles.blueText}>CRM</p>
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <p className={style.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore .{" "}
              </p>
            </div>
          </div>
          <img src="/assets/images/crm_images/crm_img.svg" />
          <div className="row justify-content-center">
            <div className="col-md-4">
              <ReasonCard
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  title="Lorem Ipsum"
                  linkToIcon="assets/images/crm_images/icon_1.png"
                />
            </div>
            <div className="col-md-4">
              <ReasonCard
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  title="Lorem Ipsum"
                  linkToIcon="assets/images/crm_images/icon_2.png"
                />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <ReasonCard
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  title="Lorem Ipsum"
                  linkToIcon="assets/images/crm_images/icon_3.png"
                />
            </div>
            <div class="col-md-4">
              <ReasonCard
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  title="Lorem Ipsum"
                  linkToIcon="/assets/images/crm_images/icon_4.png"
                />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}