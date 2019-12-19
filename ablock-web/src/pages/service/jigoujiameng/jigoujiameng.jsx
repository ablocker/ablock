import React, {Component} from 'react';
import './jigoujiameng.scss';
import {Row, Col} from 'antd';
import Navigation from "../../../components/navigation/navigation";
import Title from "../../../components/title/title";

import img7 from "./img/7.jpg";
import img8 from "./img/8.png";
import img9 from "./img/9.png";
import img10 from "./img/10.jpg";
import img11 from "./img/11.png";
import dengpao from "./img/dengpao.png";
import LoadingImg from "../../../components/loadingImg/loadingImg";
import AOS from "aos";
import Footer from "../../../components/footer/footer";
import Strength from "../../../components/strength/strength";


export default class business extends Component {
    render() {
        return (
            <div className="jigoujiameng">
                <Navigation/>
                <div className="jigoujiameng-container">
                    <Title title="我们的优势"/>
                    <Row>
                        <Col xs={0} md={24} className="tongdian">
                            <Strength/>
                        </Col>
                        <Col xs={24} md={0} className="tongdian">
                            <p className="title">1、互动交流</p>
                            <p className="content">
                                数十家机构负责人数百位一线教师交流项目运营经验、 反向教学管理理念
                            </p>
                            <p className="title">2、上门支持
                            </p>
                            <p className="content">由Ablock运用人员上门进行运营指导</p>
                            <p className="title">3、运营无忧</p>
                            <p className="content">管家式顾问支持配合课程平台让项目运营化繁为简</p>
                            <p className="title">4、启动无忧</p>
                            <p className="content">为你量身打造启动方案，确保快速成功</p>
                            <p className="title">5、设计规范</p>
                            <p className="content">根据学校现有空间、办学特色、师资情况，规划教学整体解决方案</p>
                            <p className="title">6、市场招生</p>
                            <p className="content">市场案例实战培训平台让招生变轻松</p>
                            <p className="title">7、赛事活动</p>
                            <p className="content">官方年度季度赛事活动，为机构参加国内外大赛事提供技术支持</p>
                            <p className="title">8、师资无忧</p>
                            <p className="content">全面多维度教师培训从此不再担心师资培养问题</p>

                        </Col>
                    </Row>
                </div>
                <div className="jigoujiameng-container bg-gray">
                    <Title title="培训机构痛点"/>
                    <Row>
                        <Col xs={24} md={12} className="tongdian">
                            <LoadingImg className="tongdian-img" src={dengpao} alt=""/>
                        </Col>
                        <Col xs={24} md={12} className="tongdian">
                            <p className="title">1、获客难度大，不能长期持续盈利</p>
                            <p className="content">机构只有好老师还不够，要把钱赚回来、学生招进来，老客户带新客户，招生引流好，老学员二次变现等一步做到位，才能让机构人效高、坪效高。
                            </p>
                            <p className="title">2、没有完善课程体系,招生难
                            </p>
                            <p className="content">家长给孩子报班，就是因为自己不会教，希望孩子得到专业系统的教育。而现在大部分机构课程东拼西凑不成体系。没有好的课程家长怎么会买单！又何来课程续费？</p>
                            <p className="title">3、好老师招不到，留不住，成长慢</p>
                            <p className="content">如果机构的课程依赖老师，那就完全陷入被动，高水平老师难招且成本高，很多机构老师培训好后，自己开班，成为竞争对手？
                                试想一下孩子一学期换三个老师，怎么会学的顺畅？家长怎么会满意？</p>
                        </Col>
                    </Row>
                </div>
                <Footer/>
            </div>
        )
    }
}