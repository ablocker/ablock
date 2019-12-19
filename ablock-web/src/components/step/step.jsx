import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './step.scss';
import LoadingImg from '../loadingImg/loadingImg'
import xueqian from './img/xueqian.jpg'
import xiaoxue from './img/xiaoxue.png'
import chuzhong from './img/chuzhong.jpg'
import gaozhong from './img/gaozhong.png'
import daxue from './img/daxue.png'
import AOS from "aos";


export default class Step extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-back',
            delay: 400
        })
    }
    render() {
        return (
            <Row className="course-step" type="flex" justify="center" align="bottom">
                <Col className="course-step-xueqian" data-aos="fade-up">
                    <div className="course-step-xueqian-yinshen-border" >
                        学前阶段
                    </div>
                    <div className="course-step-xueqian-border">
                        <ul>
                            <li>积木编程+传感器</li>
                            <li>简单积木拼搭</li>
                            <li>一阶3D打印</li>
                        </ul>
                    </div>
                    <div>
                        <LoadingImg src={xueqian}/>
                    </div>
                </Col>
                <Col className="course-step-xiaoxue" data-aos="fade-up">
                    <div className="course-step-xiaoxue-yinshen-border" >
                        小学阶段
                    </div>
                    <div className="course-step-xiaoxue-border">
                        <ul>
                            <li>图形化编程、C、Python+传感器</li>
                            <li>塑料积木</li>
                            <li>一阶机器人</li>
                            <li>一阶物联网</li>
                            <li>一阶无人驾驶</li>
                            <li>二阶3D打印</li>
                        </ul>
                    </div>
                    <div className="img">
                        <LoadingImg src={xiaoxue}/>
                    </div>
                </Col>
                <Col className="course-step-chuzhong" data-aos="fade-up">
                    <div className="course-step-chuzhong-yinshen-border" >
                        初中阶段
                    </div>
                    <div className="course-step-chuzhong-border">
                        <ul>
                            <li>图形化编程、C、Python+传感器</li>
                            <li>塑料积木</li>
                            <li>一阶机器人</li>
                            <li>一阶物联网</li>
                            <li>一阶无人驾驶</li>
                            <li>二阶3D打印</li>
                        </ul>
                    </div>
                    <div className="img">
                        <LoadingImg src={chuzhong}/>
                    </div>
                </Col>
                <Col className="course-step-gaozhong" data-aos="fade-up">
                    <div className="course-step-gaozhong-yinshen-border" >
                        高中阶段
                    </div>
                    <div className="course-step-gaozhong-border">
                        <ul>
                            <li>C、C++、Python + 智能硬件</li>
                            <li>金属积木</li>
                            <li>三阶无人驾驶</li>
                            <li>三阶物联网</li>
                            <li>高阶信奥赛</li>
                            <li>高阶美国信奥</li>
                            <li>三阶机器人、机械臂</li>
                        </ul>
                    </div>
                    <div className="img">
                        <LoadingImg src={gaozhong}/>
                    </div>
                </Col>
                <Col className="course-step-daxue" data-aos="fade-up">
                    <div className="course-step-daxue-yinshen-border" >
                        大学/高职阶段
                    </div>
                    <div className="course-step-daxue-border">
                        <ul>
                            <li>C、C++、Python + 传感器</li>
                            <li>三维建模及3D加工</li>
                            <li>PCB及嵌入式开发</li>
                            <li>大数据、机器视觉、仿生机器人、机器学习</li>
                            <li>无人驾驶、物联网、机械臂</li>
                        </ul>
                    </div>
                    <div className="img">
                        <LoadingImg src={daxue}/>
                    </div>
                </Col>
            </Row>

        )
    }
}