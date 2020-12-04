import style from '../services/Questions.module.scss';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';
import QuestionsText from './QuestionsText';
import QuestionsForm from './QuestionsForm';

function Questions({t}){
  return(
    <React.Fragment>
      <div className={style.questions}>
        <div className="container">
          <div className={`row justify-content-center align-items-center ${style.block}`}>
            <div className="col-md-4">
              <QuestionsText
                t={t}
                reasonsKey="TEXT"
              />
            </div>
            <div className={`col-md-5 ${style.inputCol}`}>
              <QuestionsForm
                t={t}
                reasonsKey="FORM"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
Questions.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Questions.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Questions)
