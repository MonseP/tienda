import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'toastr/build/toastr.css';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.css';

const WithRouter = () => (


        <BrowserRouter>
            <App />
        </BrowserRouter>

);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();