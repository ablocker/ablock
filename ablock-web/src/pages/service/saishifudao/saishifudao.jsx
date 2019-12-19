import React, {Component} from 'react';
import './saishifudao.scss';
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


import LoadingImg from "../../../components/loadingImg/loadingImg";
import AOS from "aos";
import Footer from "../../../components/footer/footer";
import SliderPicture from "../../../components/slider/slider";



// 1--3 大图
// 4-11 赛事辅导

export default class Saishifudao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Picture:[{
                title: "六合龙池中心小学 - 培训课中",
                src:img1
            },{
                title: "陶行知小学 - 编程课堂中",
                src:img2
            },{
                title: "Ablock周末 - Scratch培训课堂中",
                src:img3
            }],
            saishifudao:[
                {
                    'img': img4,
                    'title':'aaaa'
                },
                {
                    'img': img5,
                    'title':'aaaa'
                },
                {
                    'img': img6,
                    'title':'aaaa'
                },{
                    'img': img7,
                    'title':'aaaa'
                },{
                    'img': img8,
                    'title':'aaaa'
                },{
                    'img': img9,
                    'title':'aaaa'
                },{
                    'img': img10,
                    'title':'aaaa'
                },{
                    'img': img11,
                    'title':'aaaa'
                }
            ]
        }
    }

    // componentDidMount() {
    //     AOS.init({
    //         duration: 1000,
    //         easing: 'ease-out-back',
    //         delay: 400,
    //         once: false
    //     })
    // }

    render() {
        return (
            <div className="aijinxiaoyuan">
                <Navigation/>
                <SliderPicture dataSource={this.state.Picture}/>
                <div className="aijinxiaoyuan-container">
                    <Title title="赛事辅导"/>
                    <Row gutter={24}>
                        {this.state.saishifudao.map((item, index)=>{
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
                <Footer/>
            </div>
        )
    }
}