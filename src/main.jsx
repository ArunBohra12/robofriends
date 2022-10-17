import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './containers/App';
import store from './redux/store';

import 'tachyons';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
