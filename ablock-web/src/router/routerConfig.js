import index from '../pages/index'
import {Kebianchengdianzijimu, Wulianwang,Wurenjiashi, Python, Jixiebi} from '../pages/productions'
import {Jigoujiameng, Aijinxiaoyuan, Saishifudao, Aixuexiying} from '../pages/service'
import {Course} from '../pages/course'
import {Competition} from '../pages/competition'
import {Business} from '../pages/business'
import {History} from '../pages/history'
import {About} from '../pages/about'
import {test} from '../pages/test'

const baseConfig = [
    {
        path: '/',
        component: index,
    },
    {
        path: '/productions/kebianchengdianzijimu',
        component: Kebianchengdianzijimu,
    },
    {
        path: '/productions/wulianwang',
        component: Wulianwang,
    },
    {
        path: '/productions/wurenjiashi',
        component: Wurenjiashi,
    },{
        path: '/productions/python',
        component: Python,
    },{
        path: '/productions/jixiebi',
        component: Jixiebi,
    },
    {
        path: '/service/jigoujiameng',
        component: Jigoujiameng,
    },
    {
        path: '/service/aijinxiaoyuan',
        component: Aijinxiaoyuan,
    },
    {
        path: '/service/saishifudao',
        component: Saishifudao,
    },
    {
        path: '/service/aixuexiying',
        component: Aixuexiying,
    },
    {
        path: '/course',
        component: Course,
    },
    {
        path: '/competition',
        component: Competition,
    },
    {
        path: '/history',
        component: History,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/business',
        component: Business,
    },
    {
        path: '/test',
        component: test,
    }
];


const routerConfig = [...baseConfig];

export default routerConfig;