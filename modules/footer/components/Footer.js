import Info from "./Info";
import Questions from "./Questons";
import style from "./Footer.module.scss"
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';

function Footer({t}){
  return(
      <div className={style.realFooter}>
        <Questions/>
        <Info/>
      </div>
  )
}
Footer.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Footer)
