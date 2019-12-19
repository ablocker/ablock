import React, {Component} from 'react';
import { Card, Row, Col} from 'antd';

import './originator.scss';

import tangkaiqiang from "./img/tangkaiqiang.jpg";
import sujian from "./img/sunjian.jpg";
import tianxue from "./img/tianxue.jpg";
import wanglan from "./img/wanglan.jpg";
import wangxinfeng from "./img/wangxinfeng.jpg";
import libuyin from "./img/libuyin.jpg";
import caomin from "./img/caomin.jpg";
import huxi from "./img/huxi.jpg";
import chenjing from "./img/chenjing.jpg";

import AOS from "aos";

const {Meta} = Card;

export default class Originator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    render() {
        return (
            <Row className="originator" type="flex"  gutter={24}>
                <Col xs={24} sm={12} md={8} className="originator-container">
                    <div className="originator-img">
                        <img src={tangkaiqiang} alt=""/>
                    </div>
                    <div className="originator-intro">
                        <p className="originator-intro-title">
                            唐开强（创始人）
                        </p>
                        <p className="originator-intro-contaniner">
                            南京大学控制工程硕士，管理科学与工程博士研究生；<br/>
                            受邀参加中国双创周两次，获李克强总理勉励，项目入选创世技·颠覆性创新榜;<br/>
                            发表学术论文5篇，申请专利近20项（授权10余项）；<br/>
                            六年机器人研发及项目管理经验;<br/>
                            三次创业经历的连续创业者;<br/>
                            南京大学双创导师，江苏省人工智能科普专家;<br/>
                            人民教育出版社中小学人工智能教材编委;<br/>
                            CCTV青年极客代表

                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} className="originator-container">
                    <div className="originator-img">
                        <img src={sujian} alt=""/>
                    </div>
                    <div className="originator-intro">
                        <p className="originator-intro-title">
                            孙健(技术总监)
                        </p>
                        <p className="originator-intro-contaniner">
                            国际机器人大赛“最牛队长”;<br/>
                            5年机器人研发经历，专利累积15项;<br/>
                            曾获联合国责任创新挑战赛杰出方案奖。
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} className="originator-container">
                    <div className="originator-img">
                        <img src={tianxue} alt=""/>
                    </div>
                    <div className="originator-intro">
                        <p className="originator-intro-title">
                            田雪（运营总监）
                        </p>
                        <p className="originator-intro-contaniner">
                            南京大学硕士，数据分析方向；<br/>
                            拥有丰富的python、sql等编程经验;<br/>
                            并参与国家级重点大数据项目；<br/>
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} className="originator-container">
                    <div className="originator-img">
                        <img src={wanglan} alt=""/>
                    </div>
                    <div className="originator-intro">
                        <p className="originator-intro-title">
                            王岚（教学总监）
                        </p>
                        <p className="originator-intro-contaniner">
                            南京大学硕士，物联网工程师；<br/>
                            拥有5项国家专利；<br/>
                            获省级及以上科技创新类竞赛荣誉十余项
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} className="originator-container">
                    <div className="originator-img">
                        <img src={wangxinfeng} alt=""/>
                    </div>
                    <div className="originator-intro">
                        <p className="originator-intro-title">
                            王新锋（品牌负责人）
                        </p>
                        <p className="originator-intro-contaniner">
                            南京大学硕士；<br/>
                            5年数据库语言及Python编程经验；<br/>
                            擅长数据统计分析；<br/>
                            曾在苏宁大数据中心、华为等单位实习。
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} className="originator-container">
                    <div className="originator-img">
                        <img src={chenjing} alt=""/>
                    </div>
                    <div className="originator-intro">
                        <p className="originator-intro-title">
                            陈靖（市场总监）
                        </p>
                        <p className="originator-intro-contaniner">
                            南大MBA;<br/>
                            深耕江苏省教育市场10余年，拥有丰富的人脉和市场经验;<br/>
                            与数百所学校建立了长期的合作关系。
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} className="originator-container">
                    <div className="originator-img">
                        <img src={huxi} alt=""/>
                    </div>
                    <div className="originator-intro">
                        <p className="originator-intro-title">
                            胡希（产品总监）
                        </p>
                        <p className="originator-intro-contaniner">
                            亚太大学生机器人大赛季军；<br/>
                            从事机器人行业多年；<br/>
                            擅长嵌入式底层和算法开发；<br/>
                            曾与百度阿波罗共同开发无人驾驶相关算法。
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} className="originator-container">
                    <div className="originator-img">
                        <img src={libuyin} alt=""/>
                    </div>
                    <div className="originator-intro">
                        <p className="originator-intro-title">
                            李步印（竞赛总监）
                        </p>
                        <p className="originator-intro-contaniner">
                            南京大学硕士；<br/>
                            致力于强化学习与深度神经网络相关项目；<br/>
                            曾获中国教育机器人特等奖；<br/>
                            南京大学Robomaster比赛队长。
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} className="originator-container">
                    <div className="originator-img">
                        <img src={caomin} alt=""/>
                    </div>
                    <div className="originator-intro">
                        <p className="originator-intro-title">
                            曹敏（课程开发总监）
                        </p>
                        <p className="originator-intro-contaniner">
                            南京大学教育学硕士；<br/>
                            多年的课程开发及教学经营；<br/>
                            多次在各类科技及教学竞赛中斩获佳绩；<br/>
                            擅长课程规划。
                        </p>
                    </div>
                </Col>
            </Row>


        )
    }
}