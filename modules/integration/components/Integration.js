import style from './integration.module.scss';
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import DescribingText from '../../common/components/DescribingText';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';

function Integration({t}){
  return(
    <React.Fragment>
      <div className={style.integration}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-md-auto">
              <ReasonsTextCard
                    reasonsKey="PERFECT_INTEGRATION"
                    t={t}
                    alignment="right"
                    backURL="/assets/images/integration_images/underline.png"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ml-md-auto">
                <DescribingText
                  reasonsKey="INTEGRATION_TEXT"
                  t={t}
                  aligment="right"
                />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
Integration.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Integration.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Integration)