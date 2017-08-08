window.onload = function(){
	ajax( 'http://study.163.com/webDev/hotcouresByCategory.htm',function(str){
		var arr = eval(str);
		creat(arr);
	});
	lunbo();
}
function creat(arr){
	var box = document.getElementById("box");
	box.style.width = 400*arr.length*2-800+'px';
	for(var i=0;i<arr.length;i++)
	{
		var li = document.createElement("li");
		box.appendChild(li);
		var a1 = document.createElement("a");
		a1.href = "http://study.163.com/course/introduction/"+arr[i].id+".htm";
		a1.className = 'a1';
		a1.target="_blank";
		li.appendChild(a1)
		var img = document.createElement("img");
		img.src = arr[i].bigPhotoUrl;
		a1.appendChild(img);
		var h3 = document.createElement("h3");
		h3.innerHTML = arr[i].name;
		li.appendChild(h3);
		var a = document.createElement("a");
		a.className = "a2";
		a.href = "http://study.163.com"+arr[i].providerLink;
		a.target="_blank";
		a.innerHTML = arr[i].provider;
		li.appendChild(a);
		var p =document.createElement("p");
		p.innerHTML="面向人群："+arr[i].targetUser;
		li.appendChild(p);
	}
}

function lunbo(){
	var wrap = document.getElementById("wrap");
	var oUl = document.getElementById("box");
	var aLi = document.getElementsByTagName("li");
	var a3 = document.getElementById("a3");
	var a4 = document.getElementById("a4");
	var speed = -400;
	var iF = 0;
	oUl.innerHTML+=oUl.innerHTML;
	var timer =null;


	timer = setInterval(doMove,3000);


	wrap.onmouseover = function()
	{
		a3.style.display = a4.style.display = 'block';
		clearInterval(timer);
	}
	wrap.onmouseout = function(){
		a3.style.display = a4.style.display = 'none';
		timer = setInterval(doMove,3000);
	}

	a3.onclick = function()
	{
		if(iF==0)
		{
			speed=400;
			iF=1;
		}
		doMove();
	}
	a4.onclick = function()
	{
		if(iF==1)
		{
			speed=-400;
			iF=0;
		}
		doMove();
	}

	function doMove(){
	oUl.style.left=oUl.offsetLeft+speed+'px';
	if(oUl.offsetLeft<-oUl.offsetWidth/2)
	{
		oUl.style.left='0px';
	}
	else if(oUl.offsetLeft>0)
	{
		oUl.style.left=-oUl.offsetWidth/2+'px';
	}
}
}