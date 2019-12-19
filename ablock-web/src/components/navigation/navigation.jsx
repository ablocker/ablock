import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './navigation.scss';
import Logo from './img/logospider.png'
export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationConfig: this.props.navigationConfig ? this.props.navigationConfig :
                [
                    {
                        name: "主页",
                        path: "/",
                    },
                    {
                        name: "产品·商城",
                        path: "#/productions/kebianchengdianzijimu",
                        child: [{
                            name: "可编程电子积木",
                            path: "#/productions/kebianchengdianzijimu"
                        }, {
                            name: "物联网",
                            path: "#/productions/wulianwang"
                        }, {
                            name: "无人驾驶",
                            path: "#/productions/wurenjiashi"
                        }, {
                            name: "Python",
                            path: "#/productions/python"
                        }, {
                            name: "机械臂",
                            path: "#/productions/jixiebi"
                        }, {
                            name: "在线商城",
                            path: "http://baidu.com"
                        }]
                    },
                    {
                        name: "课程体系",
                        path: "#/course"
                    },
                    {
                        name: "赛事·成果",
                        path: "#/competition",
                    }, {
                    name: "服务·咨询",
                    path: "#/service/jigoujiameng",
                    child: [
                        {
                            name: "机构加盟",
                            path: "#/service/jigoujiameng"
                        }, {
                            name: "AI进校园",
                            path: "#/service/aijinxiaoyuan"
                        }, {
                            name: "赛事辅导",
                            path: "#/service/saishifudao"
                        }, {
                            name: "AI学习营",
                            path: "#/service/aixuexiying"
                        }]
                },
                    {
                        name: "关于我们",
                        path: "#/about",
                    },
                    {
                        name: "水平测试",
                        path: "http://baidu.com",
                    },
                    // {
                    //     name: "商业模式",
                    //     path: "#/business",
                    // },
                    // {
                    //     name: "老版公司历程",
                    //     path: "#/history",
                    // }
                ]
        }
    }

    render() {
        return (
            <header className="header">
                <Row className="header-inner">
                    <Col xs={0} sm={4} md={8} className="col">
                        <div className="logo">
                            <a href="/"><img src={Logo} alt="logo.png"/></a>
                        </div>
                    </Col>
                    <Col xs={24} sm={18} md={14} className="col">
                        <nav className="navbar navbar-default">
                            <div className="navbar-collapse">
                                <ul className="nav navbar-nav">
                                    {
                                        this.state.navigationConfig.map((item, index) => {
                                            if (Array.isArray(item.child)) {
                                                let child = item.child;
                                                return (
                                                    <li key={index}>
                                                        <a href={item.path}>
                                                            {item.name}
                                                            <i className="fa fa-caret-down" aria-hidden="true"/>
                                                        </a>
                                                        <ul className="dropdown">
                                                            {
                                                                child.map((childItem, childIndex) => {
                                                                    return (
                                                                        <li key={childIndex}>
                                                                            <a href={childItem.path}>{childItem.name}</a>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </li>
                                                )
                                            } else {
                                                return (
                                                    <li key={index} className={index ? "" : "current"}>
                                                        <a href={item.path}>{item.name}</a>
                                                    </li>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        </nav>
                    </Col>
                    <Col xs={0} sm={2} md={2} className="col"/>
                </Row>
            </header>
        )
    }
}