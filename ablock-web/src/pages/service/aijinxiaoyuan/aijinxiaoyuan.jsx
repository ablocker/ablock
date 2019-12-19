import React, {Component} from 'react';
import './aijinxiaoyuan.scss';
import {Row, Col} from 'antd';
import Navigation from "../../../components/navigation/navigation";
import Title from "../../../components/title/title";
import Subtitle from "../../../components/subtitle/subtitle";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img10 from "./img/10.jpg";
import img11 from "./img/11.jpg";
import img12 from "./img/12.jpg";
import img13 from "./img/13.jpg";
import img14 from "./img/14.jpg";
import img15 from "./img/15.jpg";
import img16 from "./img/16.jpg";

import LoadingImg from "../../../components/loadingImg/loadingImg";
import AOS from "aos";
import Footer from "../../../components/footer/footer";


// 1--8 ai进校园
// 9-12 学校应用
// 13-16 合作学校
export default class Aijinxiaoyuan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aijinxiaoyuan:[
                {
                    'img': img1,
                    'title':'aaaa'
                },
                {
                    'img': img2,
                    'title':'aaaa'
                },
                {
                    'img': img3,
                    'title':'aaaa'
                },{
                    'img': img4,
                    'title':'aaaa'
                },{
                    'img': img5,
                    'title':'aaaa'
                },{
                    'img': img6,
                    'title':'aaaa'
                },{
                    'img': img7,
                    'title':'aaaa'
                },{
                    'img': img8,
                    'title':'aaaa'
                }
            ],
            xuexiaoyingyong:[
                {
                    'img': img9,
                    'title':'aaaa'
                },{
                    'img': img10,
                    'title':'aaaa'
                },{
                    'img': img11,
                    'title':'aaaa'
                },{
                    'img': img12,
                    'title':'aaaa'
                }
            ],
            hezuoxuexiao:[
                {
                    'img': img13,
                    'title':'aaaa'
                },{
                    'img': img14,
                    'title':'aaaa'
                },{
                    'img': img15,
                    'title':'aaaa'
                },{
                    'img': img16,
                    'title':'aaaa'
                }
            ]
        }
    }

    render() {
        return (
            <div className="aijinxiaoyuan">
                <Navigation/>
                <div className="aijinxiaoyuan-container">
                    <Title title="AI进校园"/>
                    <Row gutter={24}>
                        {this.state.aijinxiaoyuan.map((item, index)=>{
                            return (
                                <Col xs={24} md={6} className="col-top" key={index}>
                                    <div className="col-top-img-wrapper">
                                        <LoadingImg src={item.img} className="col-top-img"/>
                                    </div>
                                    <Subtitle subtitle={item.title}/>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                <div className="aijinxiaoyuan-container bg-gray">
                    <Title title="学校应用"/>
                    <Row gutter={24}>
                        {this.state.xuexiaoyingyong.map((item, index)=>{
                            return (
                                <Col xs={24} md={6} className="col-top" key={index}>
                                    <div className="col-top-img-wrapper">
                                        <LoadingImg src={item.img} className="col-top-img"/>
                                    </div>

                                    <Subtitle subtitle={item.title}/>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                <div className="aijinxiaoyuan-container">
                    <Title title="合作学校"/>
                    <Row gutter={24}>
                        {this.state.xuexiaoyingyong.map((item, index)=>{
                            return (
                                <Col xs={24} md={6} className="col-top" key={index}>
                                    <div className="col-top-img-wrapper">
                                        <LoadingImg src={item.img} className="col-top-img-circle"/>
                                    </div>
                                    <Subtitle subtitle={item.title}/>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                <Footer/>
            </div>
        )
    }
}