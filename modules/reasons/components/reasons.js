import ReasonCard from '../../common/components/ReasonsCard';
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import style from './reasons.module.scss';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';

function Reasons({t}){
  return (
  <div className={style.reasons}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <ReasonsTextCard
                reasonsKey="RIGHT_CHOISE"
                t={t}
                backURL="/assets/images/reason_images/underline.png"
              />
            </div>
             <div className="col-md-4">
              <ReasonCard 
              linkToIcon="/assets/images/reason_images/icon_reason1.png"
              reasonsKey="LOREM_IPSUM"
              t={t}
              />
            </div>

            <div className="col-md-4">
            <ReasonCard 
              linkToIcon="/assets/images/reason_images/icon_reason2.png"
              reasonsKey="VOICE_CALLS"
              t={t}
              />
            </div>
          </div>
           <div className="row align-items-center">
            <div className="col-md-4">
              <ReasonCard 
                linkToIcon="/assets/images/reason_images/icon_reason3.png"
                reasonsKey="LOREM_IPSUM1"
                t={t}
              />
            </div>

            <div className="col-md-4">
              <ReasonCard 
                linkToIcon="/assets/images/reason_images/icon_reason4.png"
                reasonsKey="MODIFY_CHAT"
                t={t}
              />
            </div>

            <div className="col-md-4">
              <ReasonCard 
                linkToIcon="/assets/images/reason_images/icon_reason5.png"
                reasonsKey="PERFECT_INTEGRATION"
                t={t}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

Reasons.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Reasons.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Reasons)
