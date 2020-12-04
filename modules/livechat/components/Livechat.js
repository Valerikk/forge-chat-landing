import style from '../services/livechat.module.scss';
import ReasonCard from '../../common/components/ReasonsCard'
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import DescribingText from '../../common/components/DescribingText';
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
                  backURL="/assets/images/livechat_images/underline.png"
                />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
                <DescribingText 
                  reasonsKey="LIVECHAT_TEXT"
                  t={t}
                  aligment="left"
                />
            </div>
          </div>
            <div className="livechat-table">
              <div className="col-md-5">
                <ReasonCard 
                  linkToIcon="/assets/images/livechat_images/smile_icon.png"
                  reasonsKey="CUSTOMER_CARE1"
                  t={t}
                />
              </div>
              <div class="col-md-5">
                <ReasonCard 
                  linkToIcon="/assets/images/livechat_images/smile_icon.png"
                  reasonsKey="CUSTOMER_CARE2"
                  t={t}
                />
              </div>
              <div className="col-md-5">
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