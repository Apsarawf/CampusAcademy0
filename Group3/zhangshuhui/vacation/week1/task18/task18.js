

window.onload=function(){
	var leftIn = document.getElementById("leftIn");
	var rightIn = document.getElementById("rightIn");
	var leftOut = document.getElementById("leftOut");
	var rightOut = document.getElementById("rightOut");

	leftOut.onclick = outLeft;
	rightOut.onclick = outRight;
	leftIn.onclick = function(){
		var text = document.getElementById("text");
		var reg = new RegExp("^-?\\d+$");
		if(!reg.test(text.value)){
			alert("傻逼请输入整数")
		}
		else{
			inLeft();
		}
		text.value = '';
	}
	rightIn.onclick = function(){
		var text = document.getElementById("text");
		var reg = new RegExp("^-?\\d+$");
		if(!reg.test(text.value)){
			alert("傻逼请输入整数!")
		}
		else{
			inRight();
		}
		text.value = '';
	}

}
function inLeft(){
	var oUl = document.getElementById("ul1");
	var li = document.createElement("li");
	var  text = document.getElementById("text");
	li.innerHTML = text.value;
	li.onclick = buttonDel;
	if(oUl=''){
		oUl.appendChild(li);
	}
	else
	{
		var oUl = document.getElementById("ul1");
		var aLi = oUl.getElementsByTagName('li');
		oUl.insertBefore(li,aLi[0]);
	}
}
function inRight(){
	var oUl = document.getElementById("ul1");
	var li = document.createElement('li');
	var text = document.getElementById("text");
	li.innerHTML = text.value;
	li.onclick = buttonDel;
	text.value = '';
	oUl.appendChild(li);
}
function buttonDel(){
	this.parentNode.removeChild(this);
}
function outLeft(){
	var leftLi = document.getElementsByTagName("li")[0];
	leftLi.parentNode.removeChild(leftLi);
	text.value = '';
}
function outRight(){
	var aLi = document.getElementsByTagName("li");
	var rightLi = aLi[aLi.length-1];
	rightLi.parentNode.removeChild(rightLi);
	text.value = '';
}