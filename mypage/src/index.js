import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
// import './index.css';
// import Home from './component/home';
// import TopMenu from 'component/topmenu';
// import Footer from 'component/footer';
import Nav from './nav.js';

ReactDOM.render(<Nav/>, document.getElementById('root'));
registerServiceWorker();
