# 初学jQuery

标签（空格分隔）： 未分类

---
* $(document).ready(); 
作用是等页面的文档（document）中的节点都加载完毕后，再执行后续的代码，因为我们在执行代码的时候，可能会依赖页面的某一个元素，我们要确保这个元素真正的的被加载完毕后才能正确的使用。

* jQuery是一个类数组对象，而DOM对象就是一个单独的DOM元素。

* 1.id选择 ：`$("#id");`
2.类选择器： `$(".class");`
3.元素选择器：`$("element");`(会选区所有的这个元素)
4.全选择器： `$( "*" )`
![额][1]
5.层级选择器的描述如上图
![妈也][2]6.基本筛选选择器如上图
注意：:eq(), :lt(), :gt(), :even, :odd 用来筛选他们前面的匹配表达式的集合元素，根据之前匹配的元素在进一步筛选，注意jQuery合集都是从0开始索引
gt是一个段落筛选，从指定索引的下一个开始，gt(1) 实际从2开始
![此处输入图片的描述][3]
7.内容筛选选择器如上图
![可见性筛选选择器][4]
8.可见性筛选选择器如上图
注意：`:hidden选择器，不仅仅包含样式是display:none的元素，还包括隐藏表单、visibility等等`
我们可以有几种方式隐藏一个元素：
 *  CSS display的值是none。
 *  type="hidden"的表单元素。
 *  宽度和高度都显式设置为0。
 *  一个祖先元素是隐藏的，该元素是不会在页面上显示
 *  CSS visibility的值是hidden
 *  CSS opacity的指是0
![此处输入图片的描述][5]
9.属性筛选选择器如上图
在这么多属性选择器中
[attr="value"]和[attr*="value"]是最实用的
[attr="value"]能帮我们定位不同类型的元素，特别是表单form元素的操作，比如说input[type="text"],input[type="checkbox"]等
[attr*="value"]能在网站中帮助我们匹配不同类型的文件
![此处输入图片的描述][6]
10.子元素筛选选择器
![此处输入图片的描述][7]
11.表单元素选择器
![此处输入图片的描述][8]
12.表单对象属性筛选选择器如上图
注意事项：

选择器适用于复选框和单选框，对于下拉框元素, 使用 :selected 选择器
在某些浏览器中，选择器:checked可能会错误选取到<option>元素，所以保险起见换用选择器input:checked，确保只会选取<input>元素
13.this，表示当前的上下文对象是一个html对象，可以调用html对象所拥有的属性和方法。
$(this),代表的上下文对象是一个jquery的上下文对象，可以调用jQuery的方法和属性值。

`$('p').click(function(){
    //把p元素转化成jQuery的对象
    var $this= $(this) ;
    $this.css('color','red');
}) `


  [1]: http://img.mukewang.com/5590e98b0001f60d06130229.jpg
  [2]:http://img.mukewang.com/57cd1df2000146de06020498.jpg
  [3]: http://img.mukewang.com/57cd20bf0001a97f05290214.jpg
  [4]: http://img.mukewang.com/5590f6de0001e2b204460106.jpg
  [5]: http://img.mukewang.com/57d654200001c46507360560.jpg
  [6]: http://img.mukewang.com/559105da0001301105960331.jpg
  [7]: http://img.mukewang.com/5592040d0001f8eb04940441.jpg
  [8]: http://img.mukewang.com/55920c2f0001198b04940201.jpg
  
* attr()有4个表达式:
 - attr(传入属性名)：获取属性的值
 - attr(属性名, 属性值)：设置属性的值
 - attr(属性名,函数值)：设置属性的函数值
 - attr(attributes)：给指定元素设置多个属性值，即：{属性名一: “属性值一” , 属性名二: “属性值二” , … … }
* removeAttr()删除方法:.removeAttr( attributeName ) :为匹配的元素集合中的每个元素中移除一个属性（attribute）
* .html()方法：获取集合中第一个匹配元素的HTML内容 或 设置每一个匹配元素的html内容，具体有3种用法：
1.  .html()不传入值，就是获取集合中第一个匹配元素的HTML内容
2. .html( htmlString )  设置每一个匹配元素的html内容
3. .html( function(index, oldhtml) ) 用来返回设置HTML内容的一个函数

注意：这个操作是针对整个HTML内容（不仅仅是文本内容）
* .text()方法：得到匹配元素集合中每个元素的文本内容结合，包括他们的后代，或设置匹配元素集合中每个元素的文本内容为指定的文本内容。，具体有3种用法：
.text() 得到匹配元素集合中每个元素的合并文本，包括他们的后代

.text( textString ) 用于设置匹配元素内容的文本

.text( function(index, text) ) 用来返回设置文本内容的一个函数

注意事项：
.text()结果返回一个字符串，包含所有匹配元素的合并文本

* css() 方法：获取元素样式属性的计算值或者设置元素的CSS属性
* .index()  索引就是当前元素在所有兄弟节点中的位置，从0开始
* width()方法：获取元素的宽，带单位。
innerWidth()    //width+padding
outerWidth()  //width+padding+border
outerWidth(true)//width+padding+border+margin
* ` $('span'）.insertBefore($('div'));
 $('div'）.before($('before'));`
 把span剪切到div前面 
`$('span'）.insertAfter($('div'));
$('div'）.after($('span'));`
把span剪切到div后面 

区别：后续操作变了。比如
`$('span'）.insertBefore($('div')).css('background','red');    ` //span变红
`$('div'）.before($('span')).css('background','red');` //div变红
* ('span'）.remove()删除这个div及其子元素
 $("#div1").empty(); 删除被选元素的子元素

*  ` $('body').append($('<div>'));`创建一个div元素
*  ev:event对象
`$('div').click(function(ev){
ev.preventDefault();//阻止默认事件
ev.stopPropagation();//阻止冒泡的操作
return false;  //阻止默认事件+阻止冒泡的操作
}`

`$('div').click(function(ev){
ev.pageX(相当于文档的) : clientX(相对于可视区)
ev.which : keyCode(键盘的键值)
}`

* one()方法   事件只执行一次。
$('div').one('click',function(){alert(123);}) ; 

* .offset().left   //元素到屏幕的左距离，不管有没有绝对定位
.position().left  //到有定位的父级的left,把当前元素转化成类似定位的形式。
* parent() :获取父级;
offsetParent():获取有定位的父级；
* $('input').val()  //获取input的value;

 $('input').val(123)  //修改input的value为123;
 
 *show(time) ;hide(time)
 hover();
 * fadeOut(time) ;fadeIn(time)  淡入，淡出，默认时间是400毫秒；
 * slideUp(time); slideDown(time); 向上卷起，向下卷起  