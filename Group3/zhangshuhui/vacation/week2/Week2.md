# Week2

标签（空格分隔）： 作业 网页 视频

---

##作业
* pop() 方法用于删除并返回数组的最后一个元素
* shift()	删除并返回数组的第一个元素
* onkeyup 事件会在键盘按键被松开时发生。
* var bodyW = document.documentElement.clientWidth; 获得可视区域的宽度
 var bodyH = document.documentElement.clientHeight;获得可视区域的高度
var elW = el.offsetWidth; 获取元素的宽度
var elH = el.offsetHeight;获取元素的高度


##视频
* window.location  当前浏览器的位置,可以读也可以写。
* window.navigator.userAgent 当前浏览器的版本。
* window.onresize 当浏览器大小改变时
* form标签的action属性表示将表单内容提交到某个地方。method：包含get,post。
<b>HTTP请求数据</b>
 * get 用于获取数据（如浏览帖子）；把数据放 在URL（网址）里面来提交
 * post 用于上传数据（如用户注册);把数据放在不是URL的地方。
 * 问题：get 安全性低，容量低    便于分享
post 安全性一般，容量几乎无限  不便于分享 

####Ajax数据
* 什么是Ajax：无刷新数据读取，比如：用户注册、在线聊天室。
 ajax能且仅能从服务器上读取文件。
 ajax('abc.txt(文件路径)?t='+new Date().getTime(),function(str){ alert(str)}   //解决缓存。。清缓存的问题
* ajax读取到的文件都是字符串，比如abc.txt里存的是[1,2,3]，读取回来的就是str='[1,2,3]'，但是如果用了eval，即arr=eval（str），arr就是一个数组，包含1,2,3
* ajax请求：
1.创建Ajax对象  IE6以上：var oAjax=new XMLHttpRequest();
IE6下： var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
兼容的写就是： 
var oAjax=null;
if(window.XMLHttpRequest)
{
    oAjax=new XMLHttpRequest();
}
else
{
oAjax=new ActiveXObject("Microsoft.XMLHTTP");
}
2.连接服务器 
oAjax.open(方法（'GET','POST'），URL，是否异步)
oAjax.open('GET','abc.txt',true);
注：同步：多件事一起  , 一件件来
    异步:一件件做 , 多件事可以一起
3.发送请求
oAjax.send()
4.接收返回
oAjax.onreadystatechange=function(){};

 * onreadystatechange事件
 > - readyState属性：请求状态
0 (未初始化) 还没有调用open()方法
1（载入）已调用send()方法，正在发送请求
2（载入完成）send()方法完成，已收到全部响应内容
3（解析）正在解析响应内容
4（完成） 响应内容解析完成，可以在客户端调用了
 * status属性：请求结果  200代表成功
 * responseText


