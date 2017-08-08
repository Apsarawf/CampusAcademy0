window.onload = function(){
	var screen0 = document.getElementById("screen0");//获取上显示器的内容
	var screen1 = document.getElementById("screen1");//获取下显示器的内容
	screen1.value = null;
	screen0.value = null;
	calculate(screen0,screen1);
}

function calculate(screen0,screen1){
	var box = document.getElementById("main");//获取按钮盒子
	var count = 0;

	box.onclick = function(e){
		var symbol = e.target.innerText;//获取按钮字符

		if((screen1.value+symbol).length > 40){
			alert('小乔妹妹友情提示：超过允许长度了哟！');
			return null;
		}
		if(symbol == 'AC')
		{  //清零
			count = 0;
			screen0.value = null;
			screen1.value = null;
		}
		else if(symbol != '=')
		{  //表达式
			if(symbol == 'Del')
			{
				if(screen1.value == null)
				{
					count=0;
				}
				else
				{
					screen1.value = screen1.value.slice(0,-1);
					count--;
				}
			}
			else
			{
				screen1.value += symbol;
			}
		}
		else if(symbol == '=')
		{   //计算结果
			screen0.value = screen1.value;
			screen1.value = test(screen1.value);
		}
	}
}
Math.formatFloat = function(exp,digit){ //把小数放到整数（乘倍数），再缩小为原来倍数（除倍数）
	var m = Math.pow(10,digit);//10的digit次方；
	return parseInt(exp*m,10)/m;//parseInt(exp*m,10)解析一个字符串，以10进制返回一个整数
};
function test(text){
	var index = 0;//记录索引符号
	while(text){
		//首先计算括号内内容
		if(text.indexOf("+")>-1)
		{
			index = text.indexOf("+")//从头开始检索，第一个位置为0，记录加号的位置
			return Math.formatFloat(test(text.substring(0,index)) + test(text.substring(index + 1)),6);
		}
		else if(text.lastIndexOf("-")>-1)
		{
			index = text.lastIndexOf("-");//从尾开始检索，最后一个位子为0，记录减号的位置
			if(text[index-1] == '*')
			{
				return Math.formatFloat(test(text.substring(0,index-1)) * test(text.substring(index)),6);
			}
			else if(text[index-1] == '/')
			{
				return Math.formatFloat(test(text.substring(0,index-1)) / test(text.substring(index-1)),6);
			}
			else
			{
				return Math.formatFloat(test(text.substring(0, index)) - test(text.substring(index + 1)) ,6);
			}
		}
		else if(text.lastIndexOf("*")>-1)
		{
			index = text.lastIndexOf("*");
			return Math.formatFloat(test(text.substring(0,index)) * test(text.substring(index+1)),6);
		}
		else if(text.lastIndexOf("/")>-1)
		{
			index = text.lastIndexOf("/");
			return Math.formatFloat(test(text.substring(0,index)) / test(text.substring(index+1)),6);
		}
		else if(text.lastIndexOf("%")>-1)
		{
			index = text.lastIndexOf("%");
			return Math.formatFloat(test(text.substring(0,index)) % test(text.substring(index+1)),6);
		}
		else
		{
			return Math.formatFloat(text,6);
		}
	}
	return null;
}