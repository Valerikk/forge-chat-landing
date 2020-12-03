import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '../styles/packs.css';
import '../styles/comments.css';
import '../styles/bodyStyle.css'
import Home from '.';
import { appWithTranslation } from '../i18n'

  
import App from 'next/app'


const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)