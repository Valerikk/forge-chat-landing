import ReasonCard from "../../common/components/ReasonsCard";
import style from "./direct.module.scss";
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import DescribingText from '../../common/components/DescribingText';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';


function Direct({t}){
  return(
    <React.Fragment>
      <div className={style.direct}>
        <div className="container">
          <div className="row justify-content-center">
            <img src="/assets/images/plus.png" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <ReasonsTextCard
                      reasonsKey="FORGE_DIRECT"
                      t={t}
                      alignment="center"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
                <DescribingText
                  reasonsKey="DIRECT_TEXT"
                  t={t}
                  aligment="center"
                />
            </div>
          </div>
          <img src="/assets/images/direct_images/dir_img.svg" />
          <div className="row justify-content-center">
            <div className="col-md-4">
              <ReasonCard 
                  linkToIcon="/assets/images/direct_images/icon.png"
                  reasonsKey="DIRECT_BLOCK1"
                  t={t}
              />
            </div>
            <div className="col-md-4">
              <ReasonCard 
                  linkToIcon="/assets/images/crm_images/icon_1.png"
                  reasonsKey="DIRECT_BLOCK2"
                  t={t}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <ReasonCard 
                  linkToIcon="/assets/images/direct_images/icon.png"
                  reasonsKey="DIRECT_BLOCK3"
                  t={t}
              />
            </div>
            <div className="col-md-4">
              <ReasonCard 
                  linkToIcon="/assets/images/direct_images/icon.png"
                  reasonsKey="DIRECT_BLOCK4"
                  t={t}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
Direct.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Direct.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Direct)