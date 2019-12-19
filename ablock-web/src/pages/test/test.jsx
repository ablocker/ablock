import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class test extends Component {

    render() {
        return (
            <nav className="nav navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle" data-toggle="collapse" data-target="#menu">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a href="#" className="navbar-brand">logo</a>
                    </div>
                    <div id="menu" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">one</a></li>
                            <li><a href="#">two</a></li>
                            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                three<span className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">first</a></li>
                                    <li><a href="#">second</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}