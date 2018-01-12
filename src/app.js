import React from 'react';
import ReactDOM from 'react-dom';

import  less from  './common/style/main.less';
import  sass from  './common/style/main.scss';
import style from  './common/style/main.css';
import aac from  './common/style/aac.css';
import main from  './main.css';
import dog from './common/img/ty.jpg';
import dog2 from './common/img/1.png';
const g = require('./common/img/g.gif');

console.log(style,'我是css模块化')
console.log(aac,'我是css模块化')
console.log(main,'我是css模块化')
console.log(sass,'sass');

let a ={'a':'1','b':'2'};
console.log({...a,'c':3})
ReactDOM.render(
    <div>
        <div className={less.ot}>less</div> 
        <div className={sass.ot}>sass</div> 
        <div className={style.aac}>我是根目录main.css</div>
        <div className={style.ot}>123
                <span className={aac.ot}>react</span>
        </div>
        <img src={dog} />
        <img src={dog2} />
        <img src={g} />
    </div>,
    document.getElementById('root')
)