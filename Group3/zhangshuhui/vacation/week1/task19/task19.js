var arr = new Array;
var i = 0;
window.onload = function(){
	var button = document.getElementById("button");
	var button1 = document.getElementById("button1");
	button.onclick = Button;
	button1.onclick = del;
}

function Button(){
	var text = document.getElementById("text");
	var reg = new RegExp("^-?\\d+$");
	
	if((!reg.test(text.value))||text.value<10||text.value>100)
	{
	    alert("输入内容必须是10-100的整数！");
	}
	else if(i>=60)
	{
		alert("已达到最大长度，请勿再输入！")
	}
	else
	{
		arr[i] = text.value;
		arr.sort(function(a,b){return a-b});
		creatLi();
		paixu();
		i++;
	}
	text.value = '';
}

function creatLi(num){
	var oBox = document.getElementById("box")
	var li = document.createElement("li");
    oBox.appendChild(li);
}
function paixu(){
	var oBox = document.getElementById("box")
	var aLi = document.getElementsByTagName("li");
	for(var j = 0;j<=i;j++)
	{
		aLi[j].style.height =2 * arr[j]+'px';
		aLi[j].style.left = 30*j+10+'px';
	}
}
function del(){
	var oBox = document.getElementById("box")
	oBox.innerHTML = '';
	i = 0;
	arr.splice(0,arr.length);//清空数组 

}