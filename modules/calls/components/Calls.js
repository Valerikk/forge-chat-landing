import style from "./calls.module.scss";
import ReasonCard from "../../common/components/ReasonsCard";
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import DescribingText from '../../common/components/DescribingText';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';


function Calls({t}) {
  return (
    <React.Fragment>
      <div className={style.calls}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-md-auto">
              <ReasonsTextCard
                  reasonsKey="CONNECT_CUSTOMERS"
                  t={t}
                  alignment="right"
                  backURL="/assets/images/calls_images/underline.png"
                />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ml-md-auto">
                <DescribingText
                  reasonsKey="CALLS_TEXT"
                  t={t}
                  aligment="right"
                />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-md-4">
              <ReasonCard 
                  linkToIcon="/assets/images/chatbot_images/icon_chatbot_1.png"
                  reasonsKey="CALLS_BLOCK1"
                  t={t}
              />
            </div>
            <div className="col-md-4">
              <ReasonCard 
                  linkToIcon="/assets/images/chatbot_images/icon_chatbot_2.png"
                  reasonsKey="CALLS_BLOCK2"
                  t={t}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-6">
              <ReasonCard 
                  linkToIcon="/assets/images/chatbot_images/icon_chatbot_3.png"
                  reasonsKey="CALLS_BLOCK3"
                  t={t}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
Calls.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Calls.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Calls)
