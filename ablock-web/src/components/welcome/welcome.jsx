import React, {Component} from 'react';
import './welcome.scss';
import Particles from "react-particles-js";
import {init} from 'ityped';

export default class Welcome extends Component {
    componentDidMount() {
        const myElement = document.querySelector('#title');
        init(myElement, {showCursor: false, strings: ['Code', 'Model', 'AI','World']})
    }

    render() {
        return (
            <div className="welcome">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }}
                    className="particles"
                />
                <div className="welcome-container" >
                    <h1 className="title">
                        <span>Ablock create </span>
                        <span id="title" className="code-model-world"/>
                    </h1>
                    <p className="subtitle">
                        人工智能、物联网、机器人教育
                    </p>
                    <p className="subtitle">
                        学会编程、学会创新、创造问题、发现问题、解决问题
                    </p>
                    <div className="button-head" >
                        <div className="button">
                            <span />
                            <a href="#/about" className="btn">了解更多</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}