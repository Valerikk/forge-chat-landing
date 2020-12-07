import PropTypes from 'prop-types'
import Head from 'next/head'
import Chatbot from '../modules/chatbot/components/Chatbot';
import Livechat from '../modules/livechat/components/Livechat';
import Calls from '../modules/calls/components/Calls';
import Main from '../modules/main/components/Main';
import Reasons from '../modules/reasons/components/reasons';
import Email from '../modules/email/components/Email';
import Customitization from '../modules/customization/components/Customization';
import Integration from '../modules/integration/components/Integration';
import Crm from '../modules/crm/components/crm';
import Direct from '../modules/direct/components/Direct';
import Packs from '../modules/packs/components/Packs';
import Comments from '../modules/comments/components/Comments';
import Footer from '../modules/footer/components/Footer';

import { withTranslation } from '../i18n'


function Home({t}) {
    return (
    <React.Fragment>
     <Head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link href="./assets/fonts/Gilroy/stylesheet.css" rel="stylesheet"></link>
    </Head> 

       <Main />

      <Reasons t={t}/>
      
      <Chatbot/>

      <Livechat/>

      <Calls/>

      <Email/>

      <Customitization/>

      <Integration/>

      <Packs/>

      <Crm/>

      <Direct/>

      <Comments/>

      <Footer/>
    </React.Fragment>
  );
}


Home.propTypes = {
  t: PropTypes.func.isRequired,
}
Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})
export default withTranslation('common')(Home)