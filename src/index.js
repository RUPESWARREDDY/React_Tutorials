import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DatepickerComponent from './Date-Picker/Date1';
import DateDemo from './Date-Picker/DateDemo';
import { Provider } from 'react-redux';
import store from './React-reduxMain/Stores';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>


  </React.StrictMode>
);

reportWebVitals();
