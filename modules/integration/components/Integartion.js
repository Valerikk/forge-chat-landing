import style from '../services/integration.module.scss';
import ReasonsTextCard from '../../common/components/ReasonTextCard';
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