import ReasonCard from '../../common/components/ReasonsCard';
import style from './customitization.module.scss';
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';

function Customitization({t}){
  return(
    <React.Fragment>
      <div className={style.customization}>
        <div className="container">
          <div className={`row justify-content-center ${style.title}`}>
            <div className='col-lg-11'>
              <ReasonsTextCard
                    reasonsKey="CUSTOMIZE_WEBSITE"
                    t={t}
                    alignment="center"
                    backURL="/assets/images/customization_images/underline.png"
                  />
            </div>
            <div className={style.img}>
              <img src="/assets/images/customization_images/customization.svg" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/customization_images/customization icon_1.png"
                  reasonsKey="CUSTOM_BLOCK1"
                  t={t}
                />
            </div>
            <div className="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/customization_images/customization icon_2.png"
                  reasonsKey="CUSTOM_BLOCK2"
                  t={t}
                />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/customization_images/customization icon_3.png"
                  reasonsKey="CUSTOM_BLOCK3"
                  t={t}
                />
            </div>
            <div className="col-md-4">
                <ReasonCard 
                  linkToIcon="/assets/images/customization_images/customization icon_4.png"
                  reasonsKey="CUSTOM_BLOCK4"
                  t={t}
                />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
Customitization.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Customitization.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Customitization)
