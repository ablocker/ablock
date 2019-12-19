import React, {Component} from 'react';
import {Col, Row} from 'antd';
import Title from '../title/title'
import Subtitle from '../subtitle/subtitle'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './production.scss';

export default class Production extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: this.props.dataSource
        }
    }

    render() {
        return (
            <div>
                {this.state.dataSource.map((item, index) => {
                    console.log(item)
                    if (index % 2 === 0) {
                        return (
                            <Row className="production" type="flex" align="middle">
                                <Col xs={24} md={12} className="production-contain">
                                    <img
                                        className="production-img"
                                        src={item.src}
                                        alt=""
                                    />
                                </Col>
                                <Col xs={24} md={12} className="production-contain">
                                    <Title title={item.title}/>
                                    <Subtitle subtitle={item.subtitle}/>
                                    <p className="production-intro">{item.content}</p>
                                </Col>
                            </Row>
                        )
                    } else {
                        return (
                            <Row className="production  bg-gray" type="flex" align="middle">
                                <Col xs={24} md={12} className="production-contain">
                                    <Title title={item.title}/>
                                    <Subtitle subtitle={item.subtitle}/>
                                    <p className="production-intro">{item.content}</p>
                                </Col>
                                <Col xs={24} md={12} className="production-contain" align="middle">
                                    <img
                                        className="production-img"
                                        src={item.src}
                                        alt=""
                                    />
                                </Col>
                            </Row>
                        )
                    }
                })}
            </div>
        )
    }
}