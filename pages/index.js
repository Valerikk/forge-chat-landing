import Head from 'next/head'
import Chatbot from '../components/chatbot_block/Chatbot';
import Livechat from '../components/livechat_block/Livechat';
import Calls from '../components/calls_block/Calls';
import Main from '../components/main_block/Main';
import Reasons from '../components/reason_block/reasons';
import Email from '../components/email_block/Email';
import Customitization from '../components/customitization_block/Customitization';
import Integration from '../components/integration_block/Integartion';
import Crm from '../components/crm_block/crm';
import Direct from '../components/direct_block/Direct';
import Packs from '../components/packs_block/Packs';
import Comments from '../components/comments_block/comments';
import RealFooter from '../components/RealFooter_block/RealFooter';
export default function Home() {
  return (
    <React.Fragment>
    <Head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link href="./assets/fonts/Gilroy/stylesheet.css" rel="stylesheet"></link>
    </Head>

      <Main />

      <Reasons/>
      
      <Chatbot/>

      <Livechat/>

      <Calls/>

      <Email/>

      <Customitization />

      <Integration/>

      <Packs/>

      <Crm/>

      <Direct/>

      <Comments/>

      <RealFooter/>
    </React.Fragment>
  );
}
