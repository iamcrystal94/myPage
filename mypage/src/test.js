import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import About from './component/about';
import Ins from './component/ins';
import Home from './component/home';
import Game from './component/game';

const Nav = () => (
    <Router>
        <div className="main">
            <div className="nav">
            <ul >
                <li><Link to="/">Home</Link></li>               
                <li><Link to="/ins">Ins</Link></li>
                <li><Link to="/game">Game</Link></li>
                <li><Link to="/about">Contact</Link></li>
            </ul>
            </div>
            <hr />
            <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/ins" component={Ins} />
            <Route path="/game" component={Game}/>
            </div>
        </div>
    </Router>
);






export default Nav;