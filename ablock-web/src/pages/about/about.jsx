import React, {Component} from 'react';
import {Row, Col, Icon, Skeleton, Switch, Card, Avatar} from 'antd';
import './about.scss';
import Navigation from '../../components/navigation/navigation'
import Title from "../../components/title/title";
import AOS from "aos";
import teammember from "./img/teammember.jpg";
import beida from "./img/beida.jpg";
import dalianligong from "./img/dalianligong.jpg";
import dongnandaxue from "./img/dongnandaxue.jpg";
import qinghuadaxue from "./img/qinghuadaxue.jpg";
import zhongkeda from "./img/zhongkeda.jpg";
import nanda from "./img/nanda.jpg";
import tangkaiqiang from "./img/tangkaiqiang.png";
import sujian from "./img/sunjian.png";
import lixixue from "./img/lixixue.jpg";
import huxi from "./img/huxi.jpg";
import chenmeijun from "./img/chenmeijun.jpg";
import chenjing from "./img/chenjing.jpg";
import Footer from "../../components/footer/footer";
import Timeline from "../../components/timeline/timeline";
import Originator from "../../components/originator/originator"
import LoadingImg from "../../components/loadingImg/loadingImg";
import Subtitle from "../../components/subtitle/subtitle";


import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";

const {Meta} = Card;

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meitbaodao:[
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
                }
            ],
            tuanduirongyi:[
                {
                    'img': img5,
                    'title':'aaaa'
                },
                {
                    'img': img6,
                    'title':'aaaa'
                },
                {
                    'img': img7,
                    'title':'aaaa'
                },{
                    'img': img8,
                    'title':'aaaa'
                }
            ]
        }
    }

    render() {
        return (
            <div className="about-wrapper">
                <Navigation/>
                <Row className="about-team" type="flex" align="middle">
                    <Col xs={24} md={12} className="about-team-contain">
                        <Title title="南京蜘蛛侠智能机器人有限公司"/>
                        <p className="about-team-contain-intro">
                            南京蜘蛛侠智能机器人有限公司是一家专门为中小学生提供智能编程培训服务的企业。团队主要由大连理工、
                            南京大学、中科大、西南科技大学等高校毕业的10多位志趣相投的小伙伴组成，
                            我们的使命是“培养优秀下一代，助力中国智能时代”！
                        </p>
                    </Col>
                    <Col xs={24} md={12} className="about-team-contain">
                        <img
                            className="about-team-contain-img"
                            src={teammember}
                            alt=""
                        />
                    </Col>
                </Row>
                <div className="about-team bg-gray">
                    <Title title="公司历程"/>
                    <Timeline />
                </div>

                <Row className="about-team" type="flex" align="middle" gutter={24}>
                    <Col xs={24} className="about-team-contain">
                        <Title title="核心团队成员"/>
                    </Col>
                    <Originator/>
                </Row>
                <Row className="about-team bg-gray" type="flex" align="middle" gutter={24}>
                    <Col xs={24} className="about-team-contain">
                        <Title title="研发团队"/>
                    </Col>
                    <Col xs={24} sm={12} md={8} className="about-partner">
                        <div className="about-core-img">
                            <img width="100%" src={sujian} alt=""/>
                        </div>
                        <p className="about-core-title">
                            孙建（技术总监）
                        </p>
                        <p className="about-core-intro">
                            拥有丰富的项目经验（5年机器人研发经验）。曾获第三届国际康复工程前沿技术转化医学一等奖，
                            和多项全国机器人大赛一等奖及联合国责任创新挑战赛杰出方案奖等。发表学术论文3篇,专利累计15项。
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={8} className="about-partner">
                        <div className="about-core-img">
                            <img width="100%" src={sujian} alt=""/>
                        </div>
                        <p className="about-core-title">
                            孙建（技术总监）
                        </p>
                        <p className="about-core-intro">
                            拥有丰富的项目经验（5年机器人研发经验）。曾获第三届国际康复工程前沿技术转化医学一等奖，
                            和多项全国机器人大赛一等奖及联合国责任创新挑战赛杰出方案奖等。发表学术论文3篇,专利累计15项。
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={8} className="about-partner">
                        <div className="about-core-img">
                            <img width="100%" src={sujian} alt=""/>
                        </div>
                        <p className="about-core-title">
                            孙建（技术总监）
                        </p>
                        <p className="about-core-intro">
                            拥有丰富的项目经验（5年机器人研发经验）。曾获第三届国际康复工程前沿技术转化医学一等奖，
                            和多项全国机器人大赛一等奖及联合国责任创新挑战赛杰出方案奖等。发表学术论文3篇,专利累计15项。
                        </p>
                    </Col>
                </Row>
                <Row className="about-team" type="flex" align="middle" gutter={24}>
                    <Col xs={24} className="about-team-contain">
                        <Title title="媒体报道"/>
                    </Col>
                    {this.state.meitbaodao.map((item, index)=>{
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
                <Row className="about-team" type="flex" align="middle" gutter={24}>
                    <Col xs={24} className="about-team-contain">
                        <Title title="团队荣誉"/>
                    </Col>
                    {this.state.tuanduirongyi.map((item, index)=>{
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
                <Row className="about-team bg-gray" type="flex" align="middle">
                    <Col xs={24} className="about-team-contain">
                        <Title title="合作伙伴"/>
                    </Col>
                    <Col xs={24} className="about-team-contain">
                        <p className="about-intro">
                            目前已经有多家加盟机构,我们目前主要针对中小学编程教育，已经在南京的琅琊路小学、鼓楼实验二小、
                            金陵小学、东山外国语学校、中山小学、陶行知小学，由学校购买我们的教具，课程，以及教师资源。
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={8} className="about-partner">
                        <div className="about-partner-img">
                            <img width="100%" src={beida} alt=""/>
                        </div>
                        <p className="about-partner-title">
                            北京大学
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={8} className="about-partner">
                        <div className="about-partner-img">
                            <img width="100%" src={dalianligong} alt=""/>
                        </div>
                        <p className="about-partner-title">
                            大连理工大学
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={8} className="about-partner" >
                        <div className="about-partner-img">
                            <img width="100%" src={dongnandaxue} alt=""/>
                        </div>
                        <p className="about-partner-title">
                            东南大学
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={8} className="about-partner" >
                        <div className="about-partner-img">
                            <img width="100%" src={qinghuadaxue} alt=""/>
                        </div>
                        <p className="about-partner-title">
                            清华大学
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={8} className="about-partner">
                        <div className="about-partner-img">
                            <img width="100%" src={zhongkeda} alt=""/>
                        </div>
                        <p className="about-partner-title">
                            中国科学技术大学
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={8} className="about-partner">
                        <div className="about-partner-img" style={{'paddingLeft': '15px'}}>
                            <img width="90%" height="100%" src={nanda} alt=""/>
                        </div>
                        <p className="about-partner-title">
                            南京大学
                        </p>
                    </Col>
                </Row>
                <Footer/>
            </div>

        )
    }
}