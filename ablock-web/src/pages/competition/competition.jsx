import React, {Component} from 'react';
import './competition.scss';
import Navigation from "../../components/navigation/navigation";
import Slider from "../../components/sliderContent/sliderContent";
import Title from "../../components/title/title";
import LoadingImg from "../../components/loadingImg/loadingImg";
import {Row, Col} from 'antd';
import liuhezhongxinxiaoxue from "../course/img/liuhezhongxinxiaoxue.jpg";
import taoxingzhi from "../course/img/taoxingzhi.jpg";
import scratchpeixun from "../course/img/scratchpeixun.jpg";
import jinji1 from "./img/jinji1.png";
import jinji2 from "./img/jinji2.png";
import jinji3 from "./img/jinji3.png";
import jinji4 from "./img/jinji4.png";
import jinji5 from "./img/jinji5.png";
import jinji6 from "./img/jinji6.png";
import jinji7 from "./img/jinji7.png";
import jinji8 from "./img/jinji8.png";
import jinji9 from "./img/jinji9.png";
import jinji10 from "./img/jinji10.png";
import jinji11 from "./img/jinji11.png";
import jinji12 from "./img/jinji12.png";


export default class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Picture: [{
                title: "六合龙池中心小学 - 培训课中六合龙池中心小学 - 培训课中六合龙池中心小学 - 培训课中六合龙池中心小学 - 培训课中六合龙池中心小学 - 培训课中六合龙池中心小学 - 培训课中六合龙池中心小学 - 培训课中",
                src: liuhezhongxinxiaoxue
            }, {
                title: "陶行知小学 - 编程课堂中",
                src: taoxingzhi
            }, {
                title: "Ablock周末 - Scratch培训课堂中",
                src: scratchpeixun
            }],
            jinji: [jinji1, jinji2, jinji3, jinji4, jinji5, jinji6, jinji7, jinji8, jinji9, jinji10, jinji11, jinji12]
        }
    }

    render() {
        return (
            <div className="competition">
                <Navigation/>
                <Slider dataSource={this.state.Picture}/>
                <div className="competition-container">
                    <Title title="大赛介绍"/>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col xs={20} md={5} className="competition-container-detail">
                            <div className="bg bg1"/>
                            <div className="content">
                                <div className="title">
                                    大赛名称
                                </div>
                                <div className="button">
                                    <span/>
                                    <a href="http://baidu.com" className="btn">了解更多</a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={20} md={5} className="competition-container-detail competition1">
                            <div className="bg bg2"/>
                            <div className="content">
                                <div className="title">
                                    大赛名称
                                </div>
                                <div className="button">
                                    <span/>
                                    <a href="http://baidu.com" className="btn">了解更多</a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={20} md={5} className="competition-container-detail competition1">
                            <div className="bg bg3"/>
                            <div className="content">
                                <div className="title">
                                    大赛名称
                                </div>
                                <div className="button">
                                    <span/>
                                    <a href="http://baidu.com" className="btn">了解更多</a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={20} md={5} className="competition-container-detail competition1">
                            <div className="bg bg4"/>
                            <div className="content">
                                <div className="title">
                                    大赛名称
                                </div>
                                <div className="button">
                                    <span/>
                                    <a href="http://baidu.com" className="btn">了解更多</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="competition-container bg-gray">
                    <Title title="赛事锦集"/>
                    <Row gutter={24}>
                        {this.state.jinji.map((item, index) => {
                            return (
                                <Col sm={24} md={6} lg={6} key={index}>
                                    <div className="competition-jinji" key={index}>
                                        <LoadingImg src={item} className="competition-jinji-img" key={index}/>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        )
    }
}