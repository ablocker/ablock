import React, {Component} from 'react';
import {
    Chart,
    Geom,
    Coord,
    Label,
    Tooltip
} from "bizcharts";
import './strength.scss';
import AOS from "aos";


export default class Strength extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = [
            {
                describe: "\n互动交流：\n数十家机构负责人数\n百位一线教师交流\n项目运营经验、\n反向教学管\n理理念\n",
                population: 1.2
            },
            {
                describe: "上门支持: \n由Ablock运用人员\n上门进行运营指导\n",
                population: 1.26
            },
            {
                describe: "运营无忧: \n管家式顾问支\n持配合课程平台\n" +
                    "让项目运\n营化繁为简\n",
                population: 1.3
            },
            {
                describe: "启动无忧: \n为你量身打造启动\n方案，确保快速成功\n",
                population: 1.35
            },
            {
                describe: "设计规范:\n根据学校现有\n空间、办学特\n色、师资\n情况，规划教学\n整体解决方案\n",
                population: 1.4
            },
            {
                describe: "市场招生: \n市场案例实战培\n训平台让招生变轻松\n",
                population: 1.43
            },
            {
                describe: "赛事活动: \n官方年度季度\n赛事活动，为机\n构参加国内外\n大赛事提供技术支持\n",
                population: 1.5
            },
            {
                describe: "师资无忧: \n全面多维度教师培训\n" +
                    "从此不再担心\n师资培养问题\n",
                population: 1.53
            }
        ];
        return (
            <div>
                <Chart height="700" data={data} padding="auto" forceFit>
                    <Coord type="polar"/>
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;font-size:15px;&quot; >{name}</span></li>"
                    />
                    <Geom
                        type="interval"
                        color="describe"
                        position="describe*population"
                        style={{
                            lineWidth: 2,
                            stroke: "#fff"
                        }}
                    >
                        <Label
                            content="percent"
                            offset={-60}
                            textStyle={{
                                fill: 'white', // 文本的颜色
                                fontSize: '15', // 文本大小
                            }}
                            formatter={(val, item) => {
                                return item._origin.describe
                            }}
                        />
                    </Geom>
                </Chart>
            </div>
        );
    }

}