import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './index.css';
import * as ServiceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <h1>
      Calculadora
    </h1>
<Calculator/>,
</div>
  ,document.getElementById('root')
);
ServiceWorker.unregister();
