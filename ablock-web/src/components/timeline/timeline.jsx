import React, {Component} from 'react';
import $ from 'jquery'
import './timeline.scss';
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
import Slider from "../slider/slider";



export default class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Picture1:[{
                title: "全国双创周纪念证书",
                src:yiliushi1
            },{
                title: "受到李克强总理的接见",
                src:yiliushi2
            },{
                title: "受到江苏省科协主席陈骏院士的关心和鼓励",
                src:yiliushi3
            }],
            Picture2:[{
                title: "祖博士指导",
                src:zuboshi
            }],
            Picture3:[{
                title: "参与国际赛事",
                src:yiqiwu
            }],
            Picture4:[{
                title: "Peter Glynn教授指导",
                src: peterglynn
            }],
            Picture5:[{
                title: "媒体关注",
                src: yiqishier1
            },{
                title: "江苏省科协主席陈骏院士颁奖",
                src: yiqishier2
            }],
            Picture6:[{
                title: "双创周官方网站及微信公众号",
                src: yibashi
            }],
            Picture7:[{
                title: "南京市智能科创实验室",
                src: yibashiyi
            }],
            Picture8:[{
                title: "汤哓欧教授指导",
                src: tangxiaoo
            }],
            Picture9:[{
                title: "澳大利亚专家指导",
                src: aodaliyazhuanjia
            }]
        }
    }
    componentDidMount() {
        var timelines = $('.cd-horizontal-timeline'),
            eventsMinDistance = 60;

        (timelines.length > 0) && initTimeline(timelines);

        function initTimeline(timelines) {
            timelines.each(function () {
                var timeline = $(this),
                    timelineComponents = {};
                //cache timeline components
                timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
                timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
                timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
                timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
                timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
                timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
                timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
                timelineComponents['eventsContent'] = timeline.children('.events-content');

                //assign a left postion to the single events along the timeline
                setDatePosition(timelineComponents, eventsMinDistance);
                //assign a width to the timeline
                var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
                //the timeline has been initialize - show it
                timeline.addClass('loaded');

                //detect click on the next arrow
                timelineComponents['timelineNavigation'].on('click', '.next', function (event) {
                    event.preventDefault();
                    updateSlide(timelineComponents, timelineTotWidth, 'next');
                });
                //detect click on the prev arrow
                timelineComponents['timelineNavigation'].on('click', '.prev', function (event) {
                    event.preventDefault();
                    updateSlide(timelineComponents, timelineTotWidth, 'prev');
                });
                //detect click on the a single event - show new event content
                timelineComponents['eventsWrapper'].on('click', 'a', function (event) {
                    event.preventDefault();
                    timelineComponents['timelineEvents'].removeClass('selected');
                    $(this).addClass('selected');
                    updateOlderEvents($(this));
                    updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
                    updateVisibleContent($(this), timelineComponents['eventsContent']);
                });

                //on swipe, show next/prev event content
                timelineComponents['eventsContent'].on('swipeleft', function () {
                    var mq = checkMQ();
                    (mq === 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'next');
                });
                timelineComponents['eventsContent'].on('swiperight', function () {
                    var mq = checkMQ();
                    (mq === 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'prev');
                });

                //keyboard navigation
                $(document).keyup(function (event) {
                    if (event.which === '37' && elementInViewport(timeline.get(0))) {
                        showNewContent(timelineComponents, timelineTotWidth, 'prev');
                    } else if (event.which === '39' && elementInViewport(timeline.get(0))) {
                        showNewContent(timelineComponents, timelineTotWidth, 'next');
                    }
                });
            });
        }

        function updateSlide(timelineComponents, timelineTotWidth, string) {
            //retrieve translateX value of timelineComponents['eventsWrapper']
            var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
                wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
            //translate the timeline to the left('next')/right('prev')
            (string === 'next')
                ? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
                : translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
        }

        function showNewContent(timelineComponents, timelineTotWidth, string) {
            //go from one event to the next/previous one
            var visibleContent = timelineComponents['eventsContent'].find('.selected'),
                newContent = (string == 'next') ? visibleContent.next() : visibleContent.prev();

            if (newContent.length > 0) { //if there's a next/prev event - show it
                var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
                    newEvent = (string == 'next') ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');

                updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
                updateVisibleContent(newEvent, timelineComponents['eventsContent']);
                newEvent.addClass('selected');
                selectedDate.removeClass('selected');
                updateOlderEvents(newEvent);
                updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
            }
        }

        function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
            //translate timeline to the left/right according to the position of the selected event
            var eventStyle = window.getComputedStyle(event.get(0), null),
                eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
                timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
                timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
            var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

            if ((string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < -timelineTranslate)) {
                translateTimeline(timelineComponents, -eventLeft + timelineWidth / 2, timelineWidth - timelineTotWidth);
            }
        }

        function translateTimeline(timelineComponents, value, totWidth) {
            var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
            value = (value > 0) ? 0 : value; //only negative translate value
            value = (!(typeof totWidth === 'undefined') && value < totWidth) ? totWidth : value; //do not translate more than timeline width
            setTransformValue(eventsWrapper, 'translateX', value + 'px');
            //update navigation arrows visibility
            (value == 0) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
            (value == totWidth) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
        }

        function updateFilling(selectedEvent, filling, totWidth) {
            //change .filling-line length according to the selected event
            var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
                eventLeft = eventStyle.getPropertyValue("left"),
                eventWidth = eventStyle.getPropertyValue("width");
            eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
            var scaleValue = eventLeft / totWidth;
            setTransformValue(filling.get(0), 'scaleX', scaleValue);
        }

        function setDatePosition(timelineComponents, min) {
            for (let i = 0; i < timelineComponents['timelineDates'].length; i++) {
                var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
                    distanceNorm = Math.round(distance / timelineComponents['eventsMinLapse']) + 2;
                timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm * min + 'px');
            }
        }

        function setTimelineWidth(timelineComponents, width) {
            var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length - 1]),
                timeSpanNorm = timeSpan / timelineComponents['eventsMinLapse'],
                timeSpanNorm = Math.round(timeSpanNorm) + 4,
                totalWidth = timeSpanNorm * width;
            timelineComponents['eventsWrapper'].css('width', totalWidth + 'px');
            updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);

            return totalWidth;
        }

        function updateVisibleContent(event, eventsContent) {
            var eventDate = event.data('date'),
                visibleContent = eventsContent.find('.selected'),
                selectedContent = eventsContent.find('[data-date="' + eventDate + '"]'),
                selectedContentHeight = selectedContent.height();

            if (selectedContent.index() > visibleContent.index()) {
                var classEnetering = 'selected enter-right',
                    classLeaving = 'leave-left';
            } else {
                var classEnetering = 'selected enter-left',
                    classLeaving = 'leave-right';
            }

            selectedContent.attr('class', classEnetering);
            visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                visibleContent.removeClass('leave-right leave-left');
                selectedContent.removeClass('enter-left enter-right');
            });
            eventsContent.css('height', selectedContentHeight + 'px');
        }

        function updateOlderEvents(event) {
            event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
        }

        function getTranslateValue(timeline) {
            var timelineStyle = window.getComputedStyle(timeline.get(0), null),
                timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
                    timelineStyle.getPropertyValue("-moz-transform") ||
                    timelineStyle.getPropertyValue("-ms-transform") ||
                    timelineStyle.getPropertyValue("-o-transform") ||
                    timelineStyle.getPropertyValue("transform");

            if (timelineTranslate.indexOf('(') >= 0) {
                var timelineTranslate = timelineTranslate.split('(')[1];
                timelineTranslate = timelineTranslate.split(')')[0];
                timelineTranslate = timelineTranslate.split(',');
                var translateValue = timelineTranslate[4];
            } else {
                var translateValue = 0;
            }

            return Number(translateValue);
        }

        function setTransformValue(element, property, value) {
            element.style["-webkit-transform"] = property + "(" + value + ")";
            element.style["-moz-transform"] = property + "(" + value + ")";
            element.style["-ms-transform"] = property + "(" + value + ")";
            element.style["-o-transform"] = property + "(" + value + ")";
            element.style["transform"] = property + "(" + value + ")";
        }

        function parseDate(events) {
            var dateArrays = [];
            events.each(function () {
                var dateComp = $(this).data('date').split('/'),
                    newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
                dateArrays.push(newDate);
            });
            return dateArrays;
        }

        function parseDate2(events) {
            var dateArrays = [];
            events.each(function () {
                var singleDate = $(this),
                    dateComp = singleDate.data('date').split('T');
                if (dateComp.length > 1) { //both DD/MM/YEAR and time are provided
                    var dayComp = dateComp[0].split('/'),
                        timeComp = dateComp[1].split(':');
                } else if (dateComp[0].indexOf(':') >= 0) { //only time is provide
                    var dayComp = ["2000", "0", "0"],
                        timeComp = dateComp[0].split(':');
                } else { //only DD/MM/YEAR
                    var dayComp = dateComp[0].split('/'),
                        timeComp = ["0", "0"];
                }
                var newDate = new Date(dayComp[2], dayComp[1] - 1, dayComp[0], timeComp[0], timeComp[1]);
                dateArrays.push(newDate);
            });
            return dateArrays;
        }

        function daydiff(first, second) {
            return Math.round((second - first));
        }

        function minLapse(dates) {
            //determine the minimum distance among events
            var dateDistances = [];
            for (let i = 1; i < dates.length; i++) {
                var distance = daydiff(dates[i - 1], dates[i]);
                dateDistances.push(distance);
            }
            return Math.min.apply(null, dateDistances);
        }


        function elementInViewport(el) {
            var top = el.offsetTop;
            var left = el.offsetLeft;
            var width = el.offsetWidth;
            var height = el.offsetHeight;

            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
                left += el.offsetLeft;
            }

            return (
                top < (window.pageYOffset + window.innerHeight) &&
                left < (window.pageXOffset + window.innerWidth) &&
                (top + height) > window.pageYOffset &&
                (left + width) > window.pageXOffset
            );
        }

        function checkMQ() {
            //check if mobile or desktop device
            return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
        }
    }

    render() {
        return (
            <section className="cd-horizontal-timeline">
                <div className="timeline">
                    <div className="events-wrapper">
                        <div className="events">
                            <ol>
                                <li><a href="#0" data-date="01/10/2016" className="selected">2016.10</a></li>
                                <li><a href="#0" data-date="01/02/2017">2017.02</a></li>
                                <li><a href="#0" data-date="01/05/2017">2017.05</a></li>
                                <li><a href="#0" data-date="01/11/2017">2017.11</a></li>
                                <li><a href="#0" data-date="01/12/2017">2017.12</a></li>
                                <li><a href="#0" data-date="01/05/2018">2018.05</a></li>
                                <li><a href="#0" data-date="01/10/2018">2018.10</a></li>
                                <li><a href="#0" data-date="01/11/2018">2018.11</a></li>
                                <li><a href="#0" data-date="01/01/2019">2019.01</a></li>
                                <li><a href="#0" data-date="01/04/2019">2019.04</a></li>
                            </ol>
                            <span className="filling-line" aria-hidden="true"/>
                        </div>
                    </div>
                    <ul className="cd-timeline-navigation">
                        <li><a href="#0" className="prev inactive">Prev</a></li>
                        <li><a href="#0" className="next">Next</a></li>
                    </ul>
                </div>

                <div className="events-content">
                    <ol>
                        <li className="selected bg-gray" data-date="01/10/2016">
                            <p className="li-title">2016年10月，获邀参加全国双创周，在核心展区受到李克强总理、张高丽副总理等党和国家领导人的接见和勉励</p>
                            <Slider dataSource={this.state.Picture1} className="loading-img"/>
                        </li>
                        <li data-date="01/02/2017">
                            <p className="li-title">2017年2月，联合国高级项目官员祖博士指导</p>
                            <Slider dataSource={this.state.Picture2} className="loading-img"/>
                        </li>

                        <li data-date="01/05/2017">
                            <p className="li-title">2017年5月，联合国开发计划署“极致未来”全球责任创新挑战赛总决赛杰出方案。2017年10月，作为前沿科技代表受邀参加国际减灾日的机器人展演</p>
                            <Slider dataSource={this.state.Picture3} className="loading-img"/>
                        </li>

                        <li data-date="01/11/2017">
                            <p className="li-title">
                                2017年11月，美国工程院院士斯坦福大学Peter Glynn教授指导</p>
                            <Slider dataSource={this.state.Picture4} className="loading-img"/>
                        </li>

                        <li data-date="01/12/2017">
                            <p className="li-title">
                                2017年12月，获邀参加中央电视台《极客出发》节目，获得广泛关注；2017年12月，获南京大学最高荣誉十佳学生年度人物和栋梁特等奖学金</p>
                            <Slider dataSource={this.state.Picture5} className="loading-img"/>
                        </li>

                        <li data-date="01/05/2018">
                            <p className="li-title">
                                2018年5月，获南京大学青年五四奖章，获聘南京大学双创导师</p>
                        </li>

                        <li data-date="01/10/2018">
                            <p className="li-title">
                                2018年10月，中国双创周中，南京蜘蛛侠智能机器人有限公司的基于机器视觉与自主导航仿生全地形智能机器人项目， 与腾讯觅影项目、阿里巴巴的全球化高性能强一致分布式数据库系统、 百度的PaddlePaddle深度学习框架、清华大学的石墨烯人工喉等项目一起进入的首届“创世技”颠覆性创新榜。 标志着南京蜘蛛侠智能机器人有限公司成为中国科技创新源动力之一</p>
                            <Slider dataSource={this.state.Picture6} className="loading-img"/>
                        </li>

                        <li data-date="01/11/2018">
                            <p className="li-title">
                                2018年11月29日，获得南京市蓝绍敏市长亲自授予南京市智能科创实验室荣誉称号。 “将想象变成现实”是我们的宗旨，“创造你喜欢的世界”是我们的理念。培养优秀青少年，助力中国智能时代</p>
                            <Slider dataSource={this.state.Picture7} className="loading-img"/>
                        </li>

                        <li data-date="01/01/2019">
                            <p className="li-title">
                                2019年1月，人工智能领域知名科学家汤哓欧教授指导</p>
                            <Slider dataSource={this.state.Picture8} className="loading-img"/>
                        </li>

                        <li data-date="01/04/2019">
                            <p className="li-title">
                                2019年4月，澳大利亚专家指导</p>
                            <Slider dataSource={this.state.Picture9} className="loading-img"/>
                        </li>

                    </ol>
                </div>
            </section>
        )
    }
}