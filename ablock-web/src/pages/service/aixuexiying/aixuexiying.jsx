import React, {Component} from 'react';
import './aixuexiying.scss';
import Navigation from "../../../components/navigation/navigation";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";

import AOS from "aos";
import Footer from "../../../components/footer/footer";
import Production from "../../../components/production/production";


export default class Aixuexiying extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    title: "研学营",
                    // subtitle:"222",
                    content: "Ablock可编程电子积木是一款可以用积木模块和传感器自由拼搭出各种造型，然后通过图形化编程方式赋予作品“动作”，让孩子既可以动手操作又能动脑思考的编程和机器人教育套件。",
                    src: img1
                }, {
                    title: "积木介绍",
                    // subtitle:"222",
                    content: "积木结构上Ablock采用空间六面立体拼插结构以及基于像素点的设计，各个积木的棱角都设计了倒角以及采用了环保无毒的ABS材料，保证所有产品的安全性。积木块总共有长板、扁平1、扁平2、三角形、正方体、扁平3、扁平4积木块以及齿轮齿条、铰链、电机联轴器、快拆夹和轮胎组成，其中七大类积木能组合成任意形状，不会限制青少年丰富的想象力。",
                    src: img2
                }, {
                    title: "传感器介绍",
                    // subtitle:"222",
                    content: " 传传感器主要包括主控板、LED发光、交通信号灯、红外线、数码管、亮度传感器、按键、触摸传感器、温湿度传感器、超声波、蜂鸣器以及声音传感器等十余种传感器模块组成。这些传感器能够通过插销和积木块链接，能拼搭出更为丰富物的机电控制产品。主控板电源和数据链接接头为常见的microus，可通过电脑的USB供电，输出电压为3.3~5VV，具备短路和过载保护。主控板和传感器接头采用防误差接头。",
                    src: img3
                }, {
                    title: "图形化编程软件介绍",
                    // subtitle:"222",
                    content: "软件采用了基于scratch开发的图像化界面，具备scratch的所有功能，并且能够通过在scratch工具箱中二次开发的机器人工具箱给传感器编程，实现机电软三个模块的结合，二次开发的机器人工具箱积木编程模块主要包括：Ablock主程序、读取亮度传感器、触摸传感器、红外线传感器、超声波传感器、按键、红外线等传感器的值以及可以给舵机、电机、LED灯、蜂鸣器等传感器设置参数。",
                    src: img4
                }]
        }
    }

    render() {
        return (
            <div className="aixuexiying">
                <Navigation/>
                <Production dataSource={this.state.dataSource}/>
                <Footer/>
            </div>
        )
    }
}