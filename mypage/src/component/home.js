import React,{Component} from 'react';
import { Link} from "react-router-dom";
import './style.css';


class Home extends Component{
    render(){
        return (          
            <div className="home">
            <header>最新日志</header>
            <div className="content">
                <div className="artitle">
                        <div className="title"><Link to="./blog/httpcode">Http常见状态码</Link></div>
                <div className="date"> May 07,2018</div>
                <div className="segment">
                    HTTP状态码负责表示客户端HTTP请求的返回结果、标记服务器端的处理是否正常、通知出现的错误等工作。它由RFC2616规范定义的，并得到RFC2518、RFC2817、RFC2295等的规范拓展。状态码如200 OK，以3位数字和原因短语组成...
                </div>
                <div className="split"></div>
                </div>
            </div>
                <div className="content">
                    <div className="artitle">
                        <div className="title"><Link to="./blog/ReactError">React Errors</Link></div>
                        <div className="date"> April 26,2018</div>
                        <div className="segment">
                            汇总在运用react遇到的一些问题以及解决方案...
                </div>
                        <div className="split"></div>
                    </div>
                </div>
                <div className="content">
                    <div className="artitle">
                        <div className="title"><Link to="./blog/toturial">React ,Redux 教程汇总</Link></div>
                        <div className="date"> April 27,2018</div>
                        <div className="segment">
                            学习React、Redux大概半个月了，总结一下看过的资料，此教程比较适合入门。中、英文教材均有...
                </div>
                        <div className="split"></div>
                    </div>
                </div>
            </div>
                
            
    );
}
}
export default Home;