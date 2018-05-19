import React, { Component } from 'react';
class Tutorial extends Component {
    render() {
        return (
            <div className="blog">
                <div className="title">React ,Redux 教程汇总</div>
                <div className="date">April 27,2018</div>
                <div className="tag">Tags:<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">react</a>,<a href="https://redux.js.org/introduction" target="_blank" rel="noopener noreferrer">redux</a></div>
                <div>
                学习React、Redux大概半个月了，总结一下看过的资料，此教程比较适合入门。<br/>      

一. 中文资料  <br/> 
                    
    1. <a href="https://www.w3cschool.cn/react/react-ah5n28ey.html" target="_blank" rel="noopener noreferrer">w3cschool教程</a><br/>
    2. <a href="http://www.ruanyifeng.com/blog/2015/03/react.html" target="_blank" rel="noopener noreferrer">React 入门实例教程 (阮一峰, 2015/03)</a> <br/>
        一篇全面又易懂的React 入门教程。只需要跟着做一遍，就能初步掌握React。  <br/>       
   3. <a href="http://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">ECMAScript6 入门 (阮一峰）</a> <br/>
      看React的时候发现有很多ES6的语法，就看了这个教程。京东也有实体书。<br/> 
   4. <a href="https://github.com/pro-react" target="_blank" rel="noopener noreferrer">React开发实战</a>     （杜伟， 2017/03）<br/>
                     《Pro React》的中文翻译版本，很适合新手，个人感觉比其他国内的教材
                       都更人性化，属于每个人都能看懂的入门教材。<br/>
                 
   5. 深入浅出React和Redux （程墨，2017/04）<br />
      一本很全面的书，但不是特别讲细节的那种。值得一读。<br/>  

二. 官方Tutorial<br/>

    1. <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">井字棋-React官网</a> <br/>

    2.<a href="https://github.com/reactjs/react-router-tutorial" target="_blank" rel="noopener noreferrer"> react-router-tutorial</a> <br/>

    3. <a href="https://redux.js.org/introduction" target="_blank" rel="noopener noreferrer">Redux 官网</a> <br/>

 三. 视频资源<br/>
                                                         
      1. <a href="https://www.youtube.com/watch?v=93p3LxR9xfM" target="_blank" rel="noopener noreferrer">Redux Crash Course With React</a> <br />

          从头到尾搭建一个简单的react项目。<br/>
                </div>
                </div>
        );
    }
}

export default Tutorial;