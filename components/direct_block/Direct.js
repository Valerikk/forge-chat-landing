import ReasonCard from "../reason_block/ReasonsText/ReasonsCard";
import style from "./direct.module.scss";
import titleStyles from "../titleStyles.module.scss";

export default function Direct(){
  return(
    <React.Fragment>
      <div className={style.direct}>
        <div className="container">
          <div className="row justify-content-center">
            <img src="/assets/images/plus.svg" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <h2 className={style.title}>
                <div className={titleStyles.boxedLetter}>F</div>orge:{" "}
                <p className={titleStyles.blueText}>Direct</p>
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
          <img src="/assets/images/direct_images/dir_img.svg" />
          <div className="row justify-content-center">
            <div className="col-md-4">
              <ReasonCard
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    title="Lorem Ipsum"
                    linkToIcon="assets/images/direct_images/icon.png"
                  />
            </div>
            <div className="col-md-4">
              <ReasonCard
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    title="Lorem Ipsum"
                    linkToIcon="assets/images/direct_images/icon_2.png"
                  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <ReasonCard
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    title="Lorem Ipsum"
                    linkToIcon="assets/images/direct_images/icon.png"
                  />
            </div>
            <div className="col-md-4">
              <ReasonCard
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    title="Lorem Ipsum"
                    linkToIcon="assets/images/direct_images/icon.png"
                  />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}