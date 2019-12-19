import React, {Component} from 'react';
import './index.scss';
import Title from '../../components/title/title'
import Subtitle from '../../components/subtitle/subtitle'
import LoadingImg from '../../components/loadingImg/loadingImg'
import Navigation from '../../components/navigation/navigation'
import Welcome from '../../components/welcome/welcome'
import StudentWorks from '../../components/studentworks/studentworks'
import Footer from '../../components/footer/footer'
import Strength from '../../components/strength/strength'
import {Row, Col, Icon, Carousel} from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import zhiliyu from './img/zhiliyu.jpg'
import whypic1 from './img/why-pic1.png'
import whypic2 from './img/why-pic2.png'
import whypic3 from './img/why-pic3.png'
import whypic4 from './img/why-pic4.png'
import whypic5 from './img/why-pic5.png'
import whypic6 from './img/why-pic6.png'
import ai1 from './img/创意创作.jpg'
import ai2 from './img/动手能力.jpg'
import ai3 from './img/口语表达.jpg'
import ai4 from './img/团队合作.jpg'
import ai5 from './img/思维逻辑.jpg'
import ai6 from './img/数理化生.jpg'
import new1 from './img/new1.jpg'
import new2 from './img/new2.jpg'
import new3 from './img/new3.png'
import new4 from './img/new4.jpg'



export default class index extends Component {
    constructor(props) {
        super(props);
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
            <div className="index-wrapper">
                <Navigation />
                <Welcome/>
                <div className="container">
                    <Title title="孩子为什么要学编程222222"/>
                    <Subtitle subtitle="提高核心竞争力，立足未来社会"/>
                    <Row gutter={24}>
                        <Col xs={24} md={8} className="col-top">
                            <LoadingImg src={whypic1}/>
                            <Subtitle subtitle="激发学科学习热情"/>
                        </Col>
                        <Col xs={24} md={8} className="col-top">
                            <LoadingImg src={whypic2}/>
                            <Subtitle subtitle="逻辑思维受益终身"/>
                        </Col>
                        <Col xs={24} md={8} className="col-top">
                            <LoadingImg src={whypic3}/>
                            <Subtitle subtitle="更具耐心、独立思考"/>
                        </Col>
                        <Col xs={24} md={8} className="col-top">
                            <LoadingImg src={whypic4}/>
                            <Subtitle subtitle="玩游戏更有节制"/>
                        </Col>
                        <Col xs={24} md={8} className="col-top">
                            <LoadingImg src={whypic5}/>
                            <Subtitle subtitle="自主招生&升学之路"/>
                        </Col>
                        <Col xs={24} md={8} className="col-top">
                            <LoadingImg src={whypic6}/>
                            <Subtitle subtitle="更好的就业前景"/>
                        </Col>
                    </Row>
                </div>
                <div className="container bg-gray">
                    <Title title="AI·创客教育"/>
                    <Subtitle subtitle="素质教育助力孩子更好的成长"/>
                    <Row gutter={24}>
                        <Col xs={12} md={4} className="col-top">
                            <LoadingImg src={ai2} className="pic-circle"/>
                            <Subtitle subtitle="动手能力"/>
                        </Col>
                        <Col xs={12} md={4} className="col-top">
                            <LoadingImg src={ai5} className="pic-circle"/>
                            <Subtitle subtitle="思维逻辑"/>
                        </Col>
                        <Col xs={12} md={4} className="col-top">
                            <LoadingImg src={ai6} className="pic-circle"/>
                            <Subtitle subtitle="数理化生"/>
                        </Col>
                        <Col xs={12} md={4} className="col-top">
                            <LoadingImg src={ai4} className="pic-circle"/>
                            <Subtitle subtitle="团队合作"/>
                        </Col>
                        <Col xs={12} md={4} className="col-top">
                            <LoadingImg src={ai3} className="pic-circle"/>
                            <Subtitle subtitle="口语表达"/>
                        </Col>
                        <Col xs={12} md={4} className="col-top">
                            <LoadingImg src={ai1} className="pic-circle"/>
                            <Subtitle subtitle="创意创作"/>
                        </Col>
                    </Row>
                </div>
                <div className="container">
                    <Title title="新闻资讯（政策）"/>
                    {/*<Subtitle subtitle="subtitlesubtitlesubtitlesubtitlesubtitlesubtitle"/>*/}
                    <Row gutter={24}>
                        <Col xs={24} sm={12}>
                            <Carousel autoplay>
                                <div>
                                    <LoadingImg src={new1} className="pic-circle"/>
                                </div>
                                <div>
                                    <LoadingImg src={new2} className="pic-circle"/>
                                </div>
                                <div>
                                    <LoadingImg src={new3} className="pic-circle"/>
                                </div>
                                <div>
                                    <LoadingImg src={new4} className="pic-circle"/>
                                </div>
                            </Carousel>
                        </Col>
                        <Col xs={24} sm={12}>
                            <ul className="news">
                                <li><a href="https://mp.weixin.qq.com/s/BT2MKy42WJcNkra1gfnkDA">人工智能时代，为什么要让孩子从小学编程？</a></li>
                                <li><a href="https://mp.weixin.qq.com/s/uoLsYSgdqWzIgzzaUcOyrA">你了解科技特长生吗？</a></li>
                                <li><a href="https://mp.weixin.qq.com/s/LVYnn1LLt8ClImoT-l17xw">Ablock可编程教育机器人 进入江苏省教育装备新技术新产品试点项目</a></li>
                                <li><a href="https://mp.weixin.qq.com/s/DLrPKD8evD7DOWlU3cN4_g">编程课正式走进学生课堂</a></li>
                                <li><a href="https://mp.weixin.qq.com/s/tLcfd5ec9oRC93H9UJ_UBQ">前方高能！青少年计算机编程高含金量的竞赛汇总来啦！</a></li>
                                <li><a href="https://mp.weixin.qq.com/s/PIy7UO1RcVrcee0shBPVhA">习近平主席向国际人工智能与教育大会致贺信：大力支持人工智能教育发展</a></li>
                                <li><a href="https://mp.weixin.qq.com/s/iQrttws9O0wTo_Y2fN0uaQ">编程已被列入南京中考特招</a></li>
                                <li><a href="https://mp.weixin.qq.com/s/cKfSeDrzwAULEZSg9OAskA">重磅！国内首部AI本科专业教育培养体系出炉！南京大学周志华等人新著</a></li>
                                <li><a href="https://mp.weixin.qq.com/s/sbZlM0GECHtkDt1GQL17Iw">政策频出！编程教育竟如此重要！</a></li>
                                <li><a href="https://mp.weixin.qq.com/s/7YpSpRsyobl9qHQEcMLFRA"> 解密科技特长生！2019南京中考学科和科技特长生录取名额出炉！</a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
                <div className="container">
                    <Title title="我们是谁"/>
                    <div className="company-intro">
                        蜘蛛侠智能机器人团队成立于2014年2月，于2017年12月成立南京蜘蛛侠智能机器人有限公司，
                        获得南京市国有基金紫金创投等投资。创建Ablock-爱博乐人工智能教育品牌，致力于高校人工智能学习推广、
                        中小学人工智能创新编程教育、中小学物联网教育、中小学创客教育、中小学机器人教育等器材和课程的研发、竞赛的组织和承办、
                        师资培训和输送、品牌加盟和指导，现有研发、课程、竞赛、运营、市场五个部门。已逐步形成针对高校、中小学、社区、
                        培训机构和家庭的多种中小学人工智能教育解决方案。
                    </div>
                    <div className="company-intro">
                        本公司依托美国斯坦福大学全球青少年创客中心、南京大学人工智能交叉研究院、南京大学众创空间、
                        南京大学智能机器人科创实验室、Robocon机器人战队等机器人领域杰出科研团队，同时不断招募研发工程师，
                        进行人工智能教育的教学设备及课程的创新。目前公司形成了一批由普林斯顿大学博士后陈春林教授，
                        在日本东京工业大学从事机器人领域研究多年的海归博士留沧海教授为首的核心研发专家顾问团队，
                        由江苏省前发改委主任钱志新教授等经济学家作为公司的商业高级顾问，为公司的商业化发展指点迷津，
                        为公司的长远发展保驾护航。目前团队拥有逾28位核心成员，数十名优秀中小学人工智能及STEAM创客老师，
                        工作氛围轻松高效，成长潜力巨大，受到各界关注和支持。公司自成立以来获得了CCTV、北京卫视、凤凰、网易、南京日报、
                        扬子晚报等多家媒体的关注和采访报道。
                    </div>
                    <div className="company-intro" >
                        Ablock为是一系列可以用模块自由拼搭出各种“造型”，通过“编程”赋予作品各式“动作”，
                        让孩子们边玩边学的可编程人工智能、物联网、机器人教育套件。通过3D打印创建个性化的基础构件，
                        自主组装机器人外型，通过编程教育实现可交互的智能应用教育培训。在动手制作的过程中，培养孩子们的创造力，
                        好奇心，以及开拓未来的思维能力。少年强，则中国强，培养优秀青少年，助力中国智能时代。
                    </div>
                </div>
                <div className="container bg-gray">
                    <Title title="我们致力于"/>
                    <Row gutter={24}>
                        <Col xs={24} md={12} className="zhiliyu-container">
                            <img src={zhiliyu} alt="" width="100%"/>
                        </Col>
                        <Col xs={24} md={12} className="zhiliyu-container">
                            <div className="zhiliyu-intro">
                                打造Ablock系列可以用模块自由拼搭出各种“造型”，通过“编程”赋予作品各式“动作”，
                                让孩子们边玩边学的可编程人工智能、物联网、机器人教育套件。通过3D打印创建个性化的基础构件，
                                自主组装机器人外型，通过编程教育实现可交互的智能应用教育培训。在动手制作的过程中，培养孩子们的创造力，
                                好奇心，以及开拓未来的思维能力。作为一款以人工智能教育为核心，结合了多面积木、
                                创客组件及互联网服务的全概念机器人教育产品，主要面向中小学生物联网、机器人编程教育。
                                少年强，则中国强，培养优秀青少年，助力中国智能时代。
                            </div>
                            <Row gutter={24} type="flex">
                                <Col xs={12} className="zhiliyu-li">
                                    <Icon component={duihao} className="zhiliyu-li-icon"/>
                                    <span className="zhiliyu-li-span">创新性硬件设计</span>
                                </Col>
                                <Col xs={12} className="zhiliyu-li">
                                    <Icon component={duihao} className="zhiliyu-li-icon"/>
                                    <span className="zhiliyu-li-span">循序渐进的课程设计</span>
                                </Col>
                                <Col xs={12} className="zhiliyu-li">
                                    <Icon component={duihao} className="zhiliyu-li-icon"/>
                                    <span className="zhiliyu-li-span">培养学生的创新思维</span>
                                </Col>
                                <Col xs={12} className="zhiliyu-li">
                                    <Icon component={duihao} className="zhiliyu-li-icon"/>
                                    <span className="zhiliyu-li-span">探索新时期的教学方法</span>
                                </Col>
                                <Col xs={12} className="zhiliyu-li">
                                    <Icon component={duihao} className="zhiliyu-li-icon"/>
                                    <span className="zhiliyu-li-span">提高学生综合素质，提升学校影响力</span>
                                </Col>
                                <Col xs={12} className="zhiliyu-li">
                                    <Icon component={duihao} className="zhiliyu-li-icon"/>
                                    <span className="zhiliyu-li-span">项目及课题申报</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="container bg-gray">
                    <StudentWorks/>
                </div>
                <Footer/>
            </div>
        )
    }
}