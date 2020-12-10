import styles from './comments.module.scss'
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import DescribingText from '../../common/components/DescribingText';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';
import Slider from './Slider';

function Comments({t}){
  return(
    <React.Fragment>
      <div className={styles.comments}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <ReasonsTextCard
                  reasonsKey="USER_COMMENTS"
                  t={t}
                  alignment="center"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5">
                <DescribingText
                  reasonsKey="COMMENTS_TEXT"
                  t={t}
                  aligment="center"
                />
            </div>
          </div>
          <Slider/>
        </div>
      </div>
    </React.Fragment>
  )
}
Comments.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Comments.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Comments)