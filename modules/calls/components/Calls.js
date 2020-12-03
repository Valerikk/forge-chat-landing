import style from "../services/calls.module.scss";
import ReasonCard from "../../common/components/ReasonsCard";
import ReasonsTextCard from '../../common/components/ReasonTextCard';
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
                />
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
