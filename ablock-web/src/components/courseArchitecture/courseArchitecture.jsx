import React, {Component} from 'react';
import './courseArchitecture.scss';
import {Row, Col} from 'antd';
import AOS from "aos";
import 'aos/dist/aos.css';

export default class CourseArchitecture extends Component {
    componentDidMount() {
        AOS.init({
            duration: 1000,
            once: true,
            delay: 200
        })
    }
    render() {
        return (
            <Row className="course-wrapper">
                <Col xs={24} className="course-title title-bg" data-aos="flip-left">
                    南大Ablock创客教育----编程·机器人·物联网·竞赛
                </Col>
                <Col xs={1} className="course-target-title title-bg" data-aos="flip-left">
                    课程<br/>目标
                </Col>
                <Col xs={23} className="course-target subtitle-bg" data-aos="flip-left">
                    为孩子提供探索世界、创造世界的技能与机会，利用各种科技工具，让创意成真！
                </Col>
                <Col xs={1}>
                    <div className="course-target title-bg" data-aos="flip-left"/>
                    <div className="course-set title-bg" data-aos="flip-left">
                        课程系列
                    </div>
                </Col>
                <Col xs={23} className="subtitle-wrapper" >
                    <Row className="subtitle">
                        <Col xs={4} className="subtitle-1">
                            <div className="grading" data-aos="flip-left">段位</div>
                            <div className="grading" data-aos="flip-left">年龄</div>
                        </Col>
                        <Col xs={6} className="subtitle-1">
                            <Row>
                                <Col xs={8}>
                                    <div className="grading" data-aos="flip-left">青铜</div>
                                    <div className="grading" data-aos="flip-left">2-5</div>
                                </Col>
                                <Col xs={8}>
                                    <div className="grading" data-aos="flip-left">白银</div>
                                    <div className="grading" data-aos="flip-left">5-7</div>
                                </Col>
                                <Col xs={8}>
                                    <div className="grading" data-aos="flip-left">黄金</div>
                                    <div className="grading" data-aos="flip-left">7-10</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={8} className="subtitle-1">
                            <Col xs={6}>
                                <div className="grading" data-aos="flip-left">铂金</div>
                                <div className="grading" data-aos="flip-left">10-12</div>
                            </Col>
                            <Col xs={18}>
                                <Row>
                                    <Col xs={8} className="grading" data-aos="flip-left">钻石</Col>
                                    <Col xs={8} className="grading" data-aos="flip-left">王牌</Col>
                                    <Col xs={8} className="grading"
                                         style={{'height': '22px', 'overflow': 'hidden'}} data-aos="flip-left">最强王者</Col>
                                </Row>
                                <div className="border" data-aos="flip-left" style={{'backgroundColor':'#E0E000'}}>
                                    12-18
                                </div>
                            </Col>
                        </Col>
                        <Col xs={2} className="subtitle-2">
                            <div className="grading" data-aos="flip-left">
                                培养方向
                            </div>
                        </Col>
                        <Col xs={2} className="subtitle-2">
                            <div className="grading" data-aos="flip-left">
                                目标
                            </div>
                        </Col>
                        <Col xs={2} className="subtitle-2">
                            <div className="grading" data-aos="flip-left">
                                工具
                            </div>
                        </Col>
                    </Row>
                    <Row className="building-block">
                        <Col xs={2} className="building-block-1 border" style={{'backgroundColor':'#A8ADFF'}} data-aos="flip-left">
                            积木系列
                        </Col>
                        <Col xs={2} className="building-block-1 border" style={{'backgroundColor':'#A8ADFF'}} data-aos="flip-left">创客工坊</Col>
                        <Col xs={6} className="building-block-1">
                            <Row>
                                <Col xs={8}>
                                    <div className="modeling border" data-aos="flip-left">
                                        造型创意
                                    </div>
                                    <div className="knowing border" data-aos="flip-left">
                                        认知梦想
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className="modeling border" data-aos="flip-left">
                                        智慧创造
                                    </div>
                                    <div className="knowing border" data-aos="flip-left">
                                        工程创造
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className="modeling border" data-aos="flip-left">
                                        结构创意
                                    </div>
                                    <div className="knowing border" data-aos="flip-left">
                                        动力机械
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={8} className="building-block-1">
                            <div className="modeling border" data-aos="flip-left"/>
                            <div className="knowing border" data-aos="flip-left">
                                Ablock机械设计+传感器应用+智能编程
                            </div>
                        </Col>
                        <Col xs={2} className="building-block-1">
                            <div className="modeling border" style={{'lineHeight': '20px'}} data-aos="flip-left">
                                结构逻辑<br/>设计
                            </div>
                            <div className="knowing border" style={{'paddingTop': '20px', 'lineHeight': '20px'}} data-aos="flip-left">
                                机械设计<br/>智能编程
                            </div>
                        </Col>
                        <Col xs={2} className="building-block-1">
                            <div className="modeling border" style={{'lineHeight': '20px'}} data-aos="flip-left">
                                通过模块零件<br/>实现创意造物
                            </div>
                            <div className="knowing border" style={{'lineHeight': '20px'}} data-aos="flip-left">
                                通过硬件学习<br/>掌握电子机械<br/>设计&智能化<br/>编程
                            </div>
                        </Col>
                        <Col xs={2} className="building-block-1">
                            <div className="Ablock border" style={{'backgroundColor':'#A8ADFF'}} data-aos="flip-left">
                                Ablock套件(拼插模块、传感器、主控板、数据线、电池盒)
                            </div>
                        </Col>
                    </Row>
                    <Row className="loT">
                        <Col xs={2} className="loT-container border loT-bg" data-aos="flip-left">
                            物联网系列
                        </Col>
                        <Col xs={2} className="loT-container border loT-bg" data-aos="flip-left">
                            物联世界
                        </Col>
                        <Col xs={2} className="loT-container border loT-bg" data-aos="flip-left">
                            多彩校园
                        </Col>
                        <Col xs={2} className="loT-container border loT-bg" data-aos="flip-left">
                            智慧社区
                        </Col>
                        <Col xs={2} className="loT-container border loT-bg" data-aos="flip-left">
                            智慧城市
                        </Col>
                        <Col xs={8} className="loT-container border loT-bg" data-aos="flip-left">
                            通过物联网传感器搭建物联世界
                        </Col>
                        <Col xs={2} className="loT-container border loT-bg" data-aos="flip-left">
                            物联网创新编程
                        </Col>
                        <Col xs={2} className="loT-container border loT-bg" data-aos="flip-left">
                            掌握传感器使用和创新编程
                        </Col>
                        <Col xs={2} className="loT-container border loT-bg" data-aos="flip-left">
                            Ablock物联网系列套件
                        </Col>
                    </Row>
                    <Row className="code">
                        <Col xs={2} className="code-container border code-bg" data-aos="flip-left">
                            <div className="open">
                                编程系列
                            </div>
                        </Col>
                        <Col xs={8} className="code-container border">
                            <Row className="arduino-wrapper">
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left">
                                    Arduino
                                </Col>
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left"/>
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left"/>
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left">
                                    元器件认识
                                </Col>
                            </Row>
                            <Row className="arduino-wrapper">
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left">
                                    Scratch
                                </Col>
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left" />
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left">图形化编程基础</Col>
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left">
                                    图形化编程进阶
                                </Col>
                            </Row>
                            <Row className="arduino-wrapper">
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left">
                                    C语言
                                </Col>
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left" />
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left" />
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left" />
                            </Row>
                            <Row className="arduino-wrapper">
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left">
                                    Python
                                </Col>
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left" />
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left" />
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left">
                                    Python入门知识
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={8} className="code-container border">
                            <Row className="arduino-wrapper">
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left">
                                    图形化编程
                                </Col>
                                <Col xs={18} className="arduino border code-bg" data-aos="flip-left">
                                    代码编程(C语言编程)
                                </Col>
                            </Row>
                            <Row className="arduino-wrapper">
                                <Col xs={24} className="arduino border code-bg" data-aos="flip-left">

                                </Col>
                            </Row>
                            <Row className="arduino-wrapper">
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left">
                                    图形化编程过渡到C语言
                                </Col>
                                <Col xs={18} className="arduino border code-bg" data-aos="flip-left">
                                    C语言程序控制&控制算法学习
                                </Col>
                            </Row>

                            <Row className="arduino-wrapper">
                                <Col xs={6} className="arduino border code-bg" data-aos="flip-left">
                                    Python面向对象编程
                                </Col>
                                <Col xs={18} className="arduino border code-bg" data-aos="flip-left">
                                    Python大数据与爬虫学习
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={2} className="code-container border code-bg" data-aos="flip-left">
                            <div className="open">
                                开源编程
                            </div>
                        </Col>
                        <Col xs={2} className="code-container border code-bg" data-aos="flip-left">
                            <div className="open">
                                通过虚拟程序与搭建模块实现虚拟&现实科技制造
                            </div>
                        </Col>
                        <Col xs={2} className="code-container border code-bg" data-aos="flip-left">
                            <div className="open">
                                基于Arduino主控板的开源硬件平台应用蓝牙&USB&串口等通讯模式
                            </div>
                        </Col>
                    </Row>
                    <Row className="loT">
                        <Col xs={2} className="loT-container border science-bg" data-aos="flip-left">
                            科技造物系列
                        </Col>
                        <Col xs={2} className="loT-container border science-bg" data-aos="flip-left">
                            3D打印
                        </Col>
                        <Col xs={2} className="loT-container border science-bg" data-aos="flip-left">

                        </Col>
                        <Col xs={2} className="loT-container border science-bg" data-aos="flip-left">
                            3D打印笔-平面
                        </Col>
                        <Col xs={2} className="loT-container border science-bg" data-aos="flip-left">
                            3D打印笔-立体
                        </Col>
                        <Col xs={8} className="loT-container border science-bg" data-aos="flip-left">
                            3D打印笔<br/>(三位模型设计、Creo软件建模)
                        </Col>
                        <Col xs={2} className="loT-container border science-bg" data-aos="flip-left">
                            结构设计
                        </Col>
                        <Col xs={2} className="loT-container border science-bg" data-aos="flip-left">
                            模型自主创造
                        </Col>
                        <Col xs={2} className="loT-container border science-bg" data-aos="flip-left">
                            3D打印笔<br/>
                            3D打印机
                        </Col>
                    </Row>
                    <Row className="robot">
                        <Col xs={2} className="robot-container border robot-bg" data-aos="flip-left">
                            机器人竞赛系列
                        </Col>
                        <Col xs={2} className="robot-container border robot-bg" data-aos="flip-left">
                            开放类
                        </Col>
                        <Col xs={2} className="robot-container border robot-bg" data-aos="flip-left">

                        </Col>
                        <Col xs={4} className="robot-container border robot-bg" data-aos="flip-left">
                            创客类比赛
                        </Col>
                        <Col xs={8} className="robot-container border robot-bg" data-aos="flip-left">
                            开放类机器人竞赛<br/>
                            物联网类竞赛<br/>
                            大数据类竞赛<br/>
                            编程信息奥赛<br/>
                        </Col>
                        <Col xs={2} className="robot-container border robot-bg" data-aos="flip-left">
                            竞赛提升&解决实际问题
                        </Col>
                        <Col xs={2} className="robot-container border" data-aos="flip-left" style={{'backgroundColor':'#8CFF8A'}}>
                            任务型设计，创意与实际结合，完成竞赛的背景提升
                        </Col>
                        <Col xs={2} className="robot-container border" data-aos="flip-left" style={{'backgroundColor':'#8CFF8A'}}>
                            传感器&控制器的机械设计
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}