import ReasonCard from "../../common/components/ReasonsCard";
import style from '../services/crm.module.scss';
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';

function Crm({t}){
  return (
    <React.Fragment>
      <div className={style.crm}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ReasonsTextCard
                  reasonsKey="OTHER_FEATURES"
                  t={t}
                  alignment="center"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <ReasonsTextCard
                    reasonsKey="FORGE_CRM"
                    t={t}
                    alignment="center"
              />
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
          <img src="/assets/images/crm_images/crm_img.svg" />
          <div className="row justify-content-center">
            <div className="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/crm_images/icon_1.png"
                  reasonsKey="CRM_BLOCK1"
                  t={t}
                />
            </div>
            <div className="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/crm_images/icon_2.png"
                  reasonsKey="CRM_BLOCK2"
                  t={t}
                />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/crm_images/icon_3.png"
                  reasonsKey="CRM_BLOCK3"
                  t={t}
                />
            </div>
            <div class="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/crm_images/icon_4.png"
                  reasonsKey="CRM_BLOCK4"
                  t={t}
                />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
Crm.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Crm.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Crm)