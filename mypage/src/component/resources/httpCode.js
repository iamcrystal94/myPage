import React,{Component} from 'react';
import './resource.css';

class httpCode extends Component{
    render(){
        return (
            <div className="blog">
            <div className="title">HTTP常见状态码</div>
            <div className="date">May 07,2018</div>
            <div className="tag">Tags:<a href="https://zh.wikipedia.org/wiki/超文本传输协议" target="_blank">http</a></div>
            <div> 
                 HTTP状态码负责表示客户端HTTP请求的返回结果、标记服务器端的处理是否正常、通知出现的错误等工作。它由RFC2616规范定义的，并得到RFC2518、RFC2817、RFC2295等的规范拓展。状态码如200 OK，以3位数字和原因短语组成.<br/>
       
                数字中的第一位指定了响应类别，后两位无分类。响应类别有以下5种。<br/>
       
          1.  1XX消息 ：代表请求已被接受，需要继续处理。<br/>
       
               100 Continue: 服务器已经接收到请求头，并且客户端应继续发送请求主体。<br/>
       
               101 Switching Protocols：服务器已经理解了客户端的请求，通过Upgrade消息头通知客户端采用不同的协议来完成请求<br/>
       
               102 Processing：服务器已经收到并正在处理请求。<br/>
       
          2.  2XX消息: 代表请求已被服务器接受、理解、并接受<br/>
       
               200 OK：请求成功。<br/>
       
               202 Accepted：服务器已接受请求，但尚未处理。<br/>
       
               206 Partial Content：服务器已经成功处理部分GET请求。<br/>
       
           3. 3XX重定向：代表需要客户端采取进一步的操作才能完成请求。<br/>
       
               301 Moved Permanently：被请求的资源已被永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个URI之一。<br/>
       
               302 Found: 要求客户端执行临时重定向。<br/>
       
               303 See other: 对应当前请求的响应可以在另一个URI上被找到。并且客户端应该使用单独的GET消息发出重定向。<br/>
       
               304 Not Modified：表示资源未被修改.由于客户端仍然具有以前下载的副本，因此不需要重新传输资源。<br/>
       
               307 Temporary Redirect: 请求与另一个URI重复，但后续的请求应仍使用原始的URI。与302相反，当重新发出原始请求时，不允许更改请求方法。<br/>
       
           4. 4XX客户端错误：4XX的响应结果表明客户端是发生错误的原因所在。<br/>
       
               400 Bad Request：明显的客户端错误（例如，格式错误的请求语法、太大，无效的请求消息）<br/>
       
               401 Unauthorized：当前请求需要用户验证。<br/>
       
               403 Forbidden：服务器拒绝执行。<br/>
       
               404 Not Found：服务器无法找到请求的资源。广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下。<br/>
       
           5. 5XX服务器错误<br/>
       
               500 Internal Server Error:  通用错误消息<br/>
       
               503 Service Unavailable： 由于临时的服务器维护或者过载，服务器当前无法请求。状况是暂时的，并且将在一段时间之后回复。<br/>
       
       参考文献：<br/>
        <a href="https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81" target="_blank">HTTP状态码-维基百科</a><br/>
       <a href="https://book.douban.com/subject/25863515/" target="_blank">《图解HTTP》</a>译者：于均良,2014年<br/>
                
            </div>
            </div>
        );
    }
}
export default httpCode;