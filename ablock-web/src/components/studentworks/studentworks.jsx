/**
 *  学生作品集
 *
 * **/
import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './studentworks.scss';
import Title from '../title/title'
import leishenzhichui from './img/leishenzhichui.jpg'
import kongluzhishengji from './img/kongluzhishengji.jpg'
import  keaidexiaofangzi from './img/keaidexiaofangzi.jpg'
import  fengyuzudangbuliaowomendeai from './img/fengyuzudangbuliaowomendeai.jpg'
import  nengtishidetantiaoshuijingxiaoche from './img/nengtishidetantiaoshuijingxiaoche.jpg'
import  mingchaohuochong from './img/mingchaohuochong.jpg'
import  chuangxinlongzhou from './img/chuangxinlongzhou.jpg'
import  daijiyidexiaoche from './img/daijiyidexiaoche.jpg'
import AOS from "aos";


export default class StudentWorks extends Component {
    render() {
        return (
            <div className="studentworks-wrapper">
                <div className="studentworks-title">
                    <Title title="创意乐园（作品集）"/>
                    <p>小朋友们用Ablock的积木，将脑海中的创意拼搭实现，再用传感器赋予这些作品“生命”，让它们活起来，动起来！</p>
                </div>
                <Row className="latest-works" gutter={24}>
                    <Col className="single-work" xs={24} sm={12} md={6}>
                        <img src={leishenzhichui} alt=""/>
                        <div className="works-hover">
                            <h4>雷神之锤</h4>
                            <p>我们的作品是雷神之锤，它是雷神的武器，当被触摸时，它就会发射强烈的光芒（LED灯），它接收到声音时，它就会发射光芒保护你，这把锤子只有有资格的人才能举起来。</p>
                        </div>
                    </Col>
                    <Col className="single-work" xs={24} sm={12} md={6}>
                        <img src={kongluzhishengji} alt=""/>
                        <div className="works-hover">
                            <h4>空陆直升机</h4>
                            <p>这是一个可以在地上行走也可以在空中旋转的两栖飞机，通过两个触摸传感器，一个控制飞机螺旋桨转动，一个控制飞机在地上行走。可以同时实现螺旋桨转动和小车行走</p>
                        </div>
                    </Col>
                    <Col className="single-work" xs={24} sm={12} md={6}>
                        <img src={keaidexiaofangzi} alt=""/>
                        <div className="works-hover">
                            <h4>可爱的小房子</h4>
                            <p>这个可爱的小房子很大，而且都是蓝色的。屋顶拼的很仔细，拼了四层，一层比一层小，这个灵感来源于金字塔。我的房子中有楼梯，4个角上有一个小柱子，是红色的。</p>
                        </div>
                    </Col>
                    <Col className="single-work" xs={24} sm={12} md={6}>
                        <img src={nengtishidetantiaoshuijingxiaoche} alt=""/>
                        <div className="works-hover">
                            <h4>能提示的弹掉水晶小车</h4>
                            <p>小车灵感来源于《猪猪侠》。有一集里出现了“弹跳车”，小车可以弹跳，很轻，连藤蔓都能上去。在此基础上增加了一些东西，让它变得更加生机。添加了红绿灯功能，可以让其它车知道本车的大作用。</p>
                        </div>
                    </Col>
                    <Col className="single-work" xs={24} sm={12} md={6}>
                        <img src={mingchaohuochong} alt=""/>
                        <div className="works-hover">
                            <h4>明朝火铳</h4>
                            <p>我们做的是明朝时期的火铳。当亮度传感器或声音传感器感受到亮度或声音之后，LED灯亮，否则LED灯灭，可检测前方有没有敌人。当红外避障传感器测到前方有东西反射红外，就播放声音，吓跑敌人。</p>
                        </div>
                    </Col>
                    <Col className="single-work" xs={24} sm={12} md={6}>
                        <img src={chuangxinlongzhou} alt=""/>
                        <div className="works-hover">
                            <h4>创新龙船</h4>
                            <p>我们做的是一艘龙船，它的船头有一个蜂鸣器，它与红外线传感器连接，如果有障碍物，蜂鸣器叫，若亮度传感器无法感到光，证明天黑了，LED灯灭。</p>
                        </div>
                    </Col>
                    <Col className="single-work" xs={24} sm={12} md={6}>
                        <img src={daijiyidexiaoche} alt=""/>
                        <div className="works-hover">
                            <h4>带机翼的小车</h4>
                            <p>用两个触摸传感器和两个电机，一个用于控制车子的行走，一个用于控制机翼的转动。</p>
                        </div>
                    </Col>
                    <Col className="single-work" xs={24} sm={12} md={6}>
                        <img src={fengyuzudangbuliaowomendeai} alt=""/>
                        <div className="works-hover">
                            <h4>风雨阻挡不了我们的爱</h4>
                            <p>一台由闪电和爱心组成的风车，闪电用蓝色和橙色组成的，表现了闪电的快和可怕，爱心用红色和橙色组成，非常漂亮可爱。风车搭的很高，显得非常高大，地盘非常大，很稳固，不会倒，整体非常漂亮。</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}