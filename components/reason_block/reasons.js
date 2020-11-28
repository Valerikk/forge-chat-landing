import ReasonCard from './ReasonsText/ReasonsCard';
import ReasonsTextCard from './ReasonsText/ReasonTextCard';
import style from './reasons.module.scss';

export default function Reasons(){
  return (
  <div className={style.reasons}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <ReasonsTextCard/>
            </div>

            <div className="col-md-4">
              <ReasonCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                title="Lorem Ipsum" 
                linkToIcon="/assets/images/reason_images/icon_reason1.png"/>
            </div>

            <div className="col-md-4">
              <ReasonCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                title="Voice calls" 
                linkToIcon="/assets/images/reason_images/icon_reason2.png"/>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <ReasonCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                title="Lorem Ipsum" 
                linkToIcon="/assets/images/reason_images/icon_reason3.png"/>
            </div>

            <div className="col-md-4">
              <ReasonCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                title="Modify the chat" 
                linkToIcon="/assets/images/reason_images/icon_reason4.png"/>
            </div>

            <div className="col-md-4">
              <ReasonCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                  title="Perfect Integration" 
                  linkToIcon="/assets/images/reason_images/icon_reason5.png"/>
            </div>
          </div>
        </div>
      </div>
  )
}