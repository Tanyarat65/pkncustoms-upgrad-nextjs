import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';
import '../lib/i18n';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
