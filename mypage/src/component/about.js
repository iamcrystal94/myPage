import React, {Component} from 'react';
import './style.css';


class About extends Component{
    
    render(){
        return (
        <div className="aboutme">
            <header>--联系我--</header>
            <div> Email:  {" "}
                    <a href="mailto:782742370@qq.com" rel="noopener noreferrer">782742370@qq.com</a></div>
            <div> Github:  {" "}
                    <a href="https://github.com/iamcrystal94" target="_blank" rel="noopener noreferrer">iamcrystal94</a></div>
            <div> CSDN: {" "}
                    <a href="https://blog.csdn.net/iamcrystal94" target="_blank" rel="noopener noreferrer">iamcrystal94</a>
            </div>
            <div> Weibo:  {" "}
                    <a href="https://weibo.com/2823766551" target="_blank" rel="noopener noreferrer">傻呵傻乐啦啦啦</a>
            </div>
               
        </div>
    );
    }
}
export default About;