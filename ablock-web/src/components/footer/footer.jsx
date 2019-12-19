import React, {Component} from 'react';
import {Row, Col, Icon} from 'antd';
import './footer.scss';
import weidian from './img/weidian.png'
import gongzhonghao from './img/gongzhonghao.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <Row>
                    <Col xs={24} md={8} className="footer-container">
                        <h2>联系我们</h2>
                        <p>南京蜘蛛侠智能机器人有限公司</p>
                        <p><Icon type="phone" className="icon"/><span>+86 181-6806-7894</span></p>
                        <p><Icon type="mail"  className="icon"/><span>lixixue@spmbot.com</span></p>
                        <p><Icon type="compass" className="icon"/><span>江苏省南京市南京大学鼓楼校区南园21舍2楼大学生创业园</span></p>
                    </Col>
                    <Col xs={24} md={8} className="footer-container">
                        <h2>公众号</h2>
                        <p>关注微信公众号</p>
                        <div className="footer-img">
                            <img src={gongzhonghao} width="100%" alt=""/>
                        </div>
                    </Col>
                    <Col xs={24} md={8} className="footer-container">
                        <h2>官网微店</h2>
                        <p>使用微信扫一扫</p>
                        <div className="footer-img">
                            <img src={weidian} width="100%" alt=""/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}