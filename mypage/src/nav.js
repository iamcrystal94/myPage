import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import About from './component/about';
// import Ins from './component/ins';
import Home from './component/home';
// import Game from './component/game';
import HttpCode from './component/resources/httpCode';
import ReactError from './component/resources/reacterror';
import Toturial from './component/resources/toturial';


const Nav = () => (
    <Router>
        <div className="main">
            <div className="nav">
            <ul >
                <li><Link to="/">WRITING</Link></li>               
                {/* <li><Link to="/ins">INS</Link></li>
                <li><Link to="/game">GAME</Link></li> */}
                <li><Link to="/about">CONTACT</Link></li>
            </ul>
            </div>
            <div className="banner"></div>
            <div className="panel">
            <Route exact path="/" component={Home} />
            <Route path="/blog/httpcode" component={HttpCode} />
            <Route path="/blog/reacterror" component={ReactError}/>
            <Route path="/blog/toturial" component={Toturial}/>
            <Route path="/about" component={About} />
            {/* <Route path="/ins" component={Ins} /> */}
            {/* <Route path="/game" component={Game}/> */}
            </div>
        </div>
    </Router>
);






export default Nav;