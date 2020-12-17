import style from "./chatbot.module.scss";
import ReasonCard from "../../common/components/ReasonsCard";
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import DescribingText from '../../common/components/DescribingText';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';

function Chatbot({t}) {
  return (
    <React.Fragment>
      <div className={style.chatbot}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-md-auto">
            <ReasonsTextCard
                reasonsKey="MUCH_MOOORE"
                t={t}
                alignment="right"
                backURL="/assets/images/chatbot_images/underline.png"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ml-md-auto">
                <DescribingText
                  reasonsKey="CHATBOT_TEXT"
                  t={t}
                  aligment="right"
                />
            </div>
          </div>
          <div className="row justify-content-end">
              <div className="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/chatbot_images/icon_chatbot_1.png"
                  reasonsKey="REAL_AVAILABILITY"
                  t={t}
                />
              </div>
              <div className="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/chatbot_images/icon_chatbot_2.png"
                  reasonsKey="SMART_RESPONSES1"
                  t={t}
                />
              </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-6">
              <ReasonCard 
                linkToIcon="/assets/images/chatbot_images/icon_chatbot_3.png"
                reasonsKey="SMART_RESPONSES2"
                t={t}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
Chatbot.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Chatbot.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Chatbot)
