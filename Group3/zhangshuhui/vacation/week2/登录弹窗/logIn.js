window.onload=function(){
	var logBtn = document.getElementById("log-btn");
	var logIn = document.getElementById("logIn");
	var logConfirm = document.getElementById("log-confirm");
	var user = document.getElementById("user");
	var password = document.getElementById("password");
	var box = document.getElementById("box");

	user.onclick = function(){
		user.style.color = "#000";
		user.value = '';
	}
	password.onclick = function(){
		password.type='password';
		password.value='';
		password.style.color='#000';
	}
	logBtn.onclick = function(){
		logIn.style.display = "block";
		box.style.display = "block";
		center();
	}
	box.onclick = function(){
		chushi();
	}
	logConfirm.onclick = function(){
		isUser();
		isPassword();
		if(!(user.value===''||password.value==='')){
			alert("恭喜小妖精登录成功啦！");
			chushi();
		}
	}
	function center(){
		var bodyW = document.documentElement.clientWidth;
 		var bodyH = document.documentElement.clientHeight;
		var logW = logIn.offsetWidth;
		var logH = logIn.offsetHeight;
		logIn.style.top = (bodyH-logH)/2 + 'px';
		logIn.style.left = (bodyW-logW)/2 + 'px';
	}
	function isUser(){
		var reg = new RegExp("^[A-Za-z0-9]+$");
		
		if(!reg.test(user.value)){
			alert("该死的小妖精芳名只能是英文或者数字哟")
			user.value ='';
		}
	}
	function isPassword(){
		var reg = RegExp("^-?\\d+$");
		if(!reg.test(password.value)){
			alert("该死的小妖精密码只能是数字呢")
			password.value='';
		}
		if(password.value.length<6){
			alert("该死的小妖精密码长度要超过6位噢")
			password.value='';
		}				
	}
	function chushi()
	{
		box.style.display = "none";
		logIn.style.display = "none";
		user.value ='小妖精你的芳名';
		user.style.color = '#c1c1c1';
		password.value = '';
		password.type="text";
		password.value="小妖精你的密码";
		password.style.color='#c1c1c1';
		box.style.display = "none";
	}
}

	function hideDialog(){
		var box = document.getElementById("box");
		var logIn = document.getElementById("logIn");
		box.style.display = "none";
		logIn.style.display = "none";
		user.value ='小妖精你的芳名';
		user.style.color = '#c1c1c1';
		password.value = '';
		password.type="text";
		password.value="小妖精你的密码";
		password.style.color='#c1c1c1';
	}