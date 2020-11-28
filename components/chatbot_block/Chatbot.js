import style from "./chatbot.module.scss";
import ReasonCard from "../reason_block/ReasonsText/ReasonsCard";
import titleStyles from "../titleStyles.module.scss";
export default function Chatbot() {
  return (
    <React.Fragment>
      <div className={style.chatbot}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-md-auto">
              <h2 className={style.title}>
                <div className={titleStyles.boxedLetter}>M</div> uch m<div className={titleStyles.blueText}>ooo</div>re
                than just a chatbot.
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
          <div className="row justify-content-end">
            <div className="col-md-4">
              <ReasonCard
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua."
                title="Lorem Ipsum"
                linkToIcon="/assets/images/reason_images/icon_reason1.png"
              />
            </div>
            <div className="col-md-4">
              <ReasonCard
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua."
                title="Lorem Ipsum"
                linkToIcon="/assets/images/reason_images/icon_reason1.png"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-6">
              <ReasonCard
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua."
                title="Lorem Ipsum"
                linkToIcon="/assets/images/reason_images/icon_reason1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
