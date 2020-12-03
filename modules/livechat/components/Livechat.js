import style from '../services/livechat.module.scss';
import ReasonCard from '../../common/components/ReasonsCard'
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types'

function Livechat({t}){
  return(
    <React.Fragment>
      <div className={style.livechat}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ReasonsTextCard
                  reasonsKey="HUMAN_SUPPORT"
                  t={t}
                />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. </p>
            </div>
          </div>
            <div className="livechat-table">
              <div className="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/livechat_images/smile_icon.png"
                  reasonsKey="CUSTOMER_CARE1"
                  t={t}
                />
              </div>
              <div class="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/livechat_images/smile_icon.png"
                  reasonsKey="CUSTOMER_CARE2"
                  t={t}
                />
              </div>
              <div className="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/livechat_images/smile_icon.png"
                  reasonsKey="CUSTOMER_CARE3"
                  t={t}
                />
                </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}
Livechat.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Livechat.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Livechat)