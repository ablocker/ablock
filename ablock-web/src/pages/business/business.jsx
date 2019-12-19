import React, {Component} from 'react';
import './business.scss';

import {Row, Col, Icon,} from 'antd';
import Navigation from "../../components/navigation/navigation";
import Title from "../../components/title/title";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.png";
import img4 from "./img/4.jpg";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import img7 from "./img/7.jpg";
import img8 from "./img/8.png";
import img9 from "./img/9.png";
import img10 from "./img/10.jpg";
import img11 from "./img/11.png";
import jingsai from "./img/jingsai.jpg";
import guojihezuo1 from "./img/guojihezuo1.jpg";
import guojihezuo2 from "./img/guojihezuo2.png";
import guojihezuo3 from "./img/guojihezuo3.png";
import guojihezuo4 from "./img/guojihezuo4.jpg";
import LoadingImg from "../../components/loadingImg/loadingImg";
import AOS from "aos";
import Footer from "../../components/footer/footer";


export default class business extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: [{
                name: "主页",
                path: "/",
            }, {
                name: "服务介绍",
                path: "/productions",
                child: [{
                    name: "产品介绍",
                    path: "#/productions"
                }, {
                    name: "课程体系",
                    path: "#/course"
                }]
            }, {
                name: "商业模式",
                path: "/business",
            }, {
                name: "公司历程",
                path: "/history",
            }, {
                name: "关于我们",
                path: "/about",
            },
                // {
                //     name: "PORTFOLIO",
                //     path: "/portfolio",
                //     child: [{
                //         name: "PORTFOLIO",
                //         path: "/portfolio"
                //     }, {
                //         name: "PORTFOLIO-SINGLE",
                //         path: "/portfolio-single"
                //     }]
                // }
            ]
        }
    }
    componentDidMount() {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-back',
            delay: 400,
            once: false
        })
    }

    render() {
        const duihao = () => (
            <svg t="1563176398356" className="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="11934" width="20" height="20">
                <path
                    d="M512 0C229.229714 0 0 229.229714 0 512s229.229714 512 512 512 512-229.229714 512-512S794.770286 0 512 0z m-60.763429 746.057143l-3.474285-3.510857-11.227429 10.971428L185.051429 494.994286l93.202285-90.624 163.602286 168.173714L747.52 270.518857l91.392 92.470857-387.657143 383.085715z"
                    p-id="11935" fill="#36BFC4"></path>
            </svg>
        );
        return (
            <div className="business">
                <Navigation navigationConfig={this.state.navigation}/>
                <div className="business-intramural">
                    <Row gutter={24} type="flex" align="middle">
                        <Col xs={24} md={12} data-aos="fade-right">
                            <div className="business-intramural-img-wrapper">
                                <div className="business-intramural-img-container">
                                    <LoadingImg src={img1} style={{'height': '150px'}}/>
                                </div>
                                <div className="business-intramural-img-container">

                                    <LoadingImg src={img2} style={{'height': '150px'}}/>
                                </div>
                                <div className="business-intramural-img-container">

                                    <LoadingImg src={img3} style={{'height': '150px'}}/>
                                </div>
                            </div>
                            <div className="business-intramural-img-wrapper">
                                <div className="business-intramural-img-container">
                                    <LoadingImg src={img4} style={{'height': '150px'}}/>
                                </div>
                                <div className="business-intramural-img-container">
                                    <LoadingImg src={img5} style={{'height': '150px'}}/>
                                </div>
                                <div className="business-intramural-img-container">
                                    <LoadingImg src={img6} style={{'height': '150px'}}/>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} md={12} data-aos="fade-left">
                            <Title title="校内课堂"/>
                            <p className="business-intramural-p">
                                我们目前主要针对中小学编程教育，已经在南京的琅琊路小学、鼓楼实验二小、
                                金陵小学、东山外国语学校、中山小学、陶行知小学等30多所小学，由学校购买我们的教具，
                                课程，以及教师资源。
                            </p>
                            <p className="business-intramural-p">
                                2019年5月已经进入江苏省教育采购目录。后续的校内采购会更加便捷。
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className="business-intramural bg-gray">
                    <Title title="教育机构"/>
                    <p className="subtitle" data-aos="fade-right">
                        目前已经有多家加盟机构，涵盖江苏省、四川、云南、安徽等。
                    </p>
                    <div className="education" data-aos="fade-left">
                        <div className="education-sub">
                            <div className="img-wrapper">
                                <LoadingImg src={img7} style={{'width': '200px', 'height': '200px'}}/>
                            </div>
                        </div>
                        <div className="education-sub">
                            <div className="img-wrapper">
                                <LoadingImg src={img8} style={{'width': '200px', 'height': '200px'}}/>
                            </div>
                            <div className="img-wrapper">
                                <LoadingImg src={img9} style={{'width': '200px', 'height': '200px'}}/>
                            </div>
                            <div className="img-wrapper">
                                <LoadingImg src={img10} style={{'width': '200px', 'height': '200px'}}/>
                            </div>
                        </div>
                        <div className="education-sub">
                            <div className="img-wrapper">
                                <LoadingImg src={img11} style={{'width': '200px', 'height': '200px'}}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="business-intramural">
                    <Title title="竞赛测评"/>
                    <Row className="education" gutter={24} type="flex" align="middle">
                        <Col xs={24} md={12} data-aos="fade-right">
                            <LoadingImg src={jingsai} style={{'width': '400px', 'height': '300px'}}/>
                        </Col>
                        <Col xs={24} md={12} data-aos="fade-left">
                            <div className="education-icon">
                                <Icon component={duihao} className="education-icon-icon"/>
                                <span
                                    className="education-icon-span">青少年人工智能创新能力等级测评系统同南京大学教育学院+北京师范大学脑科学研究中心，共同开发</span>
                            </div>
                            <div className="education-icon">
                                <Icon component={duihao} className="education-icon-icon"/>
                                <span className="education-icon-span">作为制定器材供应商参与组织了中国青少年创客联赛江苏省分赛</span>
                            </div>
                            <div className="education-icon">
                                <Icon component={duihao} className="education-icon-icon"/>
                                <span className="education-icon-span">承办NOC、CICC、中小学生人工智能大赛的江苏省分赛</span>
                            </div>
                            <div className="education-icon">
                                <Icon component={duihao} className="education-icon-icon"/>
                                <span className="education-icon-span">我们带的学生在国际、国内中小学科技赛事中获得多项金奖和一等奖的荣誉</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="business-intramural bg-gray">
                    <Title title="国际合作"/>
                    <p className="subtitle" data-aos="fade-down">
                        目前与新西兰的泰晤士和奥克兰等地方的中小学合作，与国际接轨。
                    </p>
                    <Row className="education">
                        <Col xs={24} md={12} data-aos="fade-right">
                            <div className="guojihezuo-left">
                                <LoadingImg src={guojihezuo1} style={{'width': '400px', 'height': '300px'}}/>
                            </div>
                        </Col>
                        <Col xs={24} md={12} data-aos="fade-left">
                            <div className="guojihezuo-right">
                                <LoadingImg src={guojihezuo2} style={{'width': '400px', 'height': '300px'}}/>
                            </div>
                        </Col>
                        <Col xs={24} md={12} data-aos="fade-right">
                            <div className="guojihezuo-left">
                                <LoadingImg src={guojihezuo3} style={{'width': '400px', 'height': '300px'}}/>
                            </div>
                        </Col>
                        <Col xs={24} md={12} data-aos="fade-left">
                            <div className="guojihezuo-right">
                                <LoadingImg src={guojihezuo4} style={{'width': '400px', 'height': '300px'}}/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>
        )
    }
}