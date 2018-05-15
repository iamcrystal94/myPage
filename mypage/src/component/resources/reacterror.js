import React,{Component} from 'react';
class ReactError extends Component{
    render(){
        return(

            <div className="blog">
            <div className="title">React Errors</div>
            <div className="date">April 26,2018</div>
            <div className="tag">Tags:<a href="" target="_blank">react</a></div>
            <div>
            汇总在运用react遇到的一些问题以及解决方案。<br/>
            1. Module not found: Can't resolve 'react-dom/lib/ReactPerf'<br/>
            解决方法: React 16中不再支持react-addon-perf，<a href=" https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab" target="_blank"> 参见文档</a>
            <br />

2. 'react-router' does not contain an export named 'browserHistory'<br/>

解决方法：react-router v4中不导入browserHistory, 可以使用v3版本，npm install react-router@3，
                    
                    <a hre="https://github.com/ReactTraining/react-router/issues/5263" target="_blank">参见链接</a><br />

3. Module not found: Can't resolve 'redux' in ...<br/>
解决方法: npm install --save redux<br/>
5. create-react-app **出现“Unexpected end of JSON input while parsing near '..."shasum":"0c48875896f'”<br/>

解决方法：npm cache clean --force<br/>
                    
            </div>
            </div>
        );
    }
}

export default ReactError;