import React, {Component} from 'react';
import './course.scss';
import CourseTarget from '../../components/courseTarget/courseTarget'
import CourseArchitecture from '../../components/courseArchitecture/courseArchitecture'
import Navigation from "../../components/navigation/navigation";
import SliderPicture from "../../components/slider/slider";
import Title from '../../components/title/title'
import Subtitle from '../../components/subtitle/subtitle'
import Footer from "../../components/footer/footer";
import Step from "../../components/step/step";
import liuhezhongxinxiaoxue from './img/liuhezhongxinxiaoxue.jpg'
import taoxingzhi from './img/taoxingzhi.jpg'
import scratchpeixun from './img/scratchpeixun.jpg'
import {Col, Row} from "antd";
import LoadingImg from "../../components/loadingImg/loadingImg";
import whypic1 from "../index/img/why-pic1.png";
import whypic2 from "../index/img/why-pic2.png";
import whypic3 from "../index/img/why-pic3.png";
import whypic4 from "../index/img/why-pic4.png";
import whypic5 from "../index/img/why-pic5.png";
import whypic6 from "../index/img/why-pic6.png";
import datu1 from "./img/datu1.jpg";
import datu2 from "./img/datu2.jpg";
import datu3 from "./img/datu3.jpg";
import lilun1 from "./img/lilun1.jpg";
import lilun2 from "./img/lilun2.jpg";
import lilun3 from "./img/lilun3.jpg";
import lilun4 from "./img/lilun4.jpg";
import lilun5 from "./img/lilun5.jpg";
import huanjie1 from "./img/huanjie1.jpg";
import huanjie2 from "./img/huanjie2.jpg";
import huanjie3 from "./img/huanjie3.jpg";
import huanjie4 from "./img/huanjie4.jpg";
import huanjie5 from "./img/huanjie5.jpg";
import huanjie6 from "./img/huanjie6.jpg";
import huanjie7 from "./img/huanjie7.jpg";
import huanjie8 from "./img/huanjie8.jpg";



export default class course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Picture:[{
                title: "编程课堂进行中",
                src:datu1
            },{
                title: "名师一对一指导",
                src:datu2
            },{
                title: "体验式教学",
                src:datu3
            }]
        }
    }
    render(){
        return(
            <div className="course">
                <Navigation />
                <SliderPicture dataSource={this.state.Picture}/>
                <div className="course-container">
                    <Title title="课程理论" />
                    <Subtitle subtitle="subtitle" />
                    <Row gutter={24}>
                        <Col xs={12} md={4} className="col-top">
                            <LoadingImg src={lilun1} className="pic-circle"/>
                            <Subtitle subtitle="导入"/>
                        </Col>
                        <Col xs={12} md={4} className="col-top">
                            <LoadingImg src={lilun2} className="pic-circle"/>
                            <Subtitle subtitle="反思"/>
                        </Col>
                        <Col xs={12} md={4} className="col-top">
                            <LoadingImg src={lilun3} className="pic-circle"/>
                            <Subtitle subtitle="构建"/>
                        </Col>
                        <Col xs={12} md={4} className="col-top">
                            <LoadingImg src={lilun4} className="pic-circle"/>
                            <Subtitle subtitle="效果评价"/>
                        </Col>
                        <Col xs={12} md={4} className="col-top">
                            <LoadingImg src={lilun5} className="pic-circle"/>
                            <Subtitle subtitle="延续"/>
                        </Col>
                        <Col xs={12} md={4} className="col-top">
                            <LoadingImg src={whypic1} className="pic-circle"/>
                            <Subtitle subtitle="subtitle"/>
                        </Col>

                    </Row>
                </div>
                <div className="course-container bg-gray">
                    <Title title="课程环节" />
                    <Subtitle subtitle="subtitle" />
                    <Row gutter={24}>
                        <Col xs={12} md={6}>
                            <LoadingImg src={huanjie1}/>
                            <Subtitle subtitle="编程探索"/>
                        </Col>
                        <Col xs={12} md={6}>
                            <LoadingImg src={huanjie2} />
                            <Subtitle subtitle="成果展示"/>
                        </Col>
                        <Col xs={12} md={6} >
                            <LoadingImg src={huanjie3}/>
                            <Subtitle subtitle="动手实践"/>
                        </Col>
                        <Col xs={12} md={6}>
                            <LoadingImg src={huanjie4} />
                            <Subtitle subtitle="开放式课堂"/>
                        </Col>
                        <Col xs={12} md={6} >
                            <LoadingImg src={huanjie5}/>
                            <Subtitle subtitle="课堂思考"/>
                        </Col>
                        <Col xs={12} md={6} >
                            <LoadingImg src={huanjie6} />
                            <Subtitle subtitle="前沿体验"/>
                        </Col>
                        <Col xs={12} md={6} >
                            <LoadingImg src={huanjie7} />
                            <Subtitle subtitle="同堂竞技"/>
                        </Col>
                        <Col xs={12} md={6} >
                            <LoadingImg src={huanjie8} />
                            <Subtitle subtitle="团队协作"/>
                        </Col>

                    </Row>
                </div>
                <div className="course-container">
                    <Title title="课程及产品体系（年龄5+到20+）" />
                    <p className="subtitle">教具为自主研发，并配有进阶式传感器。智能可编程教育机器人产品硬件包括50余种不同的彩色积木，46种传感器和核心控制器。在软件方面，能同时进行Scratch、C、Python三种语言编程。
                    </p>
                    <Step />
                </div>
                <div className="course-architecture-container bg-gray">
                    <Title title="课程体系" />
                    <p className="subtitle">可视图形化编程、可视化搭建教程、丰富的机器人课程</p>
                    <CourseArchitecture />
                </div>
                <div className="course-container">
                    <Title title="课程目标" />
                    <CourseTarget />
                </div>
                <Footer/>
            </div>

        )
    }
}