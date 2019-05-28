import { ROUTES } from './routes-config';


const cardanoURI = {
  PROTOCOL: 'web+cardano',
  URL: 'main_window.html#' + ROUTES.SEND_FROM_URI.ROOT + '?q=%s',
  TITLE: 'Yoroi',
}

const registerProtocols = () => {

  let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  if (isChrome) {
    navigator.registerProtocolHandler(
      cardanoURI.PROTOCOL,
      cardanoURI.URL,
      cardanoURI.TITLE
    );
    console.log('asd');
  }
}

export default registerProtocols;
