import styles from '../services/comments.module.scss'
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import DescribingText from '../../common/components/DescribingText';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';

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
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-1">
              <button>
                <img src="/assets/images/comments_images/arrow1.png" />
              </button>
            </div>
            <div className="col-lg-10 slider">
              <ul className="comment">
                <li>
                  <img src="/assets/images/comments_images/Ellipse 161.png"/>
                  <h1>Ivanov Ivan</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-sm-1">
              <button>
                <img src="/assets/images/comments_images/arrow2.png" />
              </button>
            </div>
          </div>
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