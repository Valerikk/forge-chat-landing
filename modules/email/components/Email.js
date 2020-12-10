import style from './email.module.scss';
import EmailText from './EmailText';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';
import EmailForm from './EmailForm';

function Email({t}){
  return(
    <React.Fragment>
      <div className={style.email}>
        <div className="container">
          <div
            className="row justify-content-center align-items-center"
            style={{ paddingTop: 70 + "px", paddingBottom: 30 + "px" }}
          >
            <div className="col-md-4">
              <EmailText
                t={t}
                reasonsKey="TEXT"
              />
            </div>
            <div className="col-md-6">
              <EmailForm
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
Email.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Email.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Email)
