import React, {Component} from 'react';
import './history.scss'
import Navigation from "../../components/navigation/navigation";
import Footer from '../../components/footer/footer'
import {Timeline} from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import yiliushi1 from './img/2016.10-1.jpg'
import yiliushi2 from './img/2016.10-2.jpg'
import yiliushi3 from './img/2016.10-3.jpg'
import yiqiwu from './img/2017.05.jpg'
import yiqishier1 from './img/2017.12-1.jpg'
import yiqishier2 from './img/2017.12-2.png'
import yibashi from './img/2018.10.jpg'
import yibashiyi from './img/2018.11.jpg'
import tangxiaoo from './img/tangxiaoo.jpg'
import peterglynn from './img/peterglynn.jpg'
import zuboshi from './img/zuboshi.jpg'
import aodaliyazhuanjia from './img/aodaliyazhuanjia.jpg'

export default class History extends Component {
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
            },{
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
        return (
            <div className="history-wrapper">
                <Navigation navigationConfig={this.state.navigation}/>
                <div className="container">
                    {/*D:\root\ablock\ablock-web\src\pages\history\img*/}
                    <Timeline mode="alternate">
                        <Timeline.Item color="#36BFC4" data-aos="fade-left">
                            <div className="history-description">
                                2019年4月，澳大利亚专家指导
                            </div>
                            <div className="history-img">
                                <img src={aodaliyazhuanjia} alt="" width="100%"/>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="#36BFC4" data-aos="fade-right">
                            <div className="history-description">
                                2019年1月，人工智能领域知名科学家汤哓欧教授指导
                            </div>
                            <div className="history-img">
                                <img src={tangxiaoo} alt="" width="100%"/>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="#36BFC4" data-aos="fade-left">
                            <div className="history-description">
                                2018年11月29日，获得南京市蓝绍敏市长亲自授予南京市智能科创实验室荣誉称号。
                                “将想象变成现实”是我们的宗旨，“创造你喜欢的世界”是我们的理念。培养优秀青少年，助力中国智能时代。
                            </div>
                            <div className="history-img">
                                <img src={yibashiyi} alt="" width="100%"/>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="#36BFC4" data-aos="fade-right">
                            <div className="history-description">
                                2018年10月，中国双创周中，南京蜘蛛侠智能机器人有限公司的基于机器视觉与自主导航仿生全地形智能机器人项目，
                                与腾讯觅影项目、阿里巴巴的全球化高性能强一致分布式数据库系统、
                                百度的PaddlePaddle深度学习框架、清华大学的石墨烯人工喉等项目一起进入的首届“创世技”颠覆性创新榜。
                                标志着南京蜘蛛侠智能机器人有限公司成为中国科技创新源动力之一
                            </div>
                            <div className="history-img">
                                <img src={yibashi} alt="" width="100%"/>
                            </div>
                            <p className="history-img-title">双创周官方网站及微信公众号</p>
                        </Timeline.Item>
                        <Timeline.Item color="#36BFC4" data-aos="fade-left">
                            <div className="history-description">
                                2018年5月，获南京大学青年五四奖章，获聘南京大学双创导师
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="#36BFC4" data-aos="fade-right">
                            <div className="history-description">
                                2017年12月，获南京大学最高荣誉十佳学生年度人物和栋梁特等奖学金
                            </div>
                            <div className="history-img">
                                <img src={yiqishier2} alt="" width="100%"/>
                            </div>
                            <p className="history-img-title">江苏省科协主席陈骏院士颁奖</p>
                        </Timeline.Item>
                        <Timeline.Item color="#36BFC4" data-aos="fade-left">
                            <div className="history-description">
                                2017年12月，获邀参加中央电视台《极客出发》节目，获得广泛关注
                            </div>
                            <div className="history-img">
                                <img src={yiqishier1} alt="" width="100%"/>
                            </div>
                            <p className="history-img-title">媒体关注</p>
                        </Timeline.Item>
                        <Timeline.Item color="#36BFC4" data-aos="fade-right">
                            <div className="history-description">
                                2017年11月，美国工程院院士斯坦福大学Peter Glynn教授指导
                            </div>
                            <div className="history-img">
                                <img src={peterglynn} alt="" width="100%"/>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="#36BFC4" data-aos="fade-left">
                            <div className="history-description">
                                2017年5月，联合国开发计划署“极致未来”全球责任创新挑战赛总决赛杰出方案。2017年10月，作为前沿科技代表受邀参加国际减灾日的机器人展演
                            </div>
                            <div className="history-img">
                                <img src={yiqiwu} alt="" width="100%"/>
                            </div>
                            <p className="history-img-title">参与国际赛事</p>
                        </Timeline.Item>
                        <Timeline.Item color="#36BFC4" data-aos="fade-right">
                            <div className="history-description">
                                2017年2月，联合国高级项目官员祖博士指导
                            </div>
                            <div className="history-img">
                                <img src={zuboshi} alt="" width="100%"/>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="#36BFC4">
                            <div className="history-description" data-aos="fade-left">
                                2016年10月，获邀参加全国双创周，在核心展区受到李克强总理、张高丽副总理等党和国家领导人的接见和勉励
                            </div>
                            <div className="history-img">
                                <img src={yiliushi1} alt="" width="100%"/>
                            </div>
                            <p className="history-img-title">全国双创周纪念证书</p>
                            <div className="history-img">
                                <img src={yiliushi2} alt="" width="100%"/>
                            </div>
                            <p className="history-img-title">受到李克强总理的接见</p>
                            <div className="history-img">
                                <img src={yiliushi3} alt="" width="100%"/>
                            </div>
                            <p className="history-img-title">受到江苏省科协主席陈骏院士的关心和鼓励</p>
                        </Timeline.Item>
                        <Timeline.Item color="#36BFC4" data-aos="fade-rght">
                            <div className="history-description">
                                2014年2月，Ablock成立
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <Footer/>
            </div>
        );
    }
}