import styles from './main.module.scss';
import MainTitle from './MainTitle';
import MainText from './MainText';
import MainButtons from './MainButtons';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types'
import MainQuestions from './MainQuestion';


function Main({t}){
  return(
      <div className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <MainTitle
                t={t}
                reasonsKey="TITLE"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <MainText
                t={t}
                reasonsKey="TEXT"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"
             style={{zIndex: 2}}
            >
              <MainButtons
                t={t}
                reasonsKey="BUTTON"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
             <MainQuestions
              t={t}
              reasonsKey="QUESTION"
             />
            </div>
          </div>
        </div>
      </div>
  )
}
Main.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Main.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Main)