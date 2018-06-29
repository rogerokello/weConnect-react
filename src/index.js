import React from "react";
import ReactDOM from "react-dom";
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'react-notifications/lib/notifications.css';

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import './styles/businessstyles.css'

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
