
//使用本地cookie实现不再提示
function noHint(){
	setCookie("isHint","1",1)
	var top = document.getElementById("top");
	top.style.display = 'none';
}

//点击播放视频
function onVideo(){
	var video = document.getElementById('video');
	var cWidth = document.documentElement.clientWidth;
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	video.style.display = 'block';
	video.style.zIndex = '500';
	video.style.top = scrollTop+20+'px';
	video.style.left = (cWidth-1300)/2+'px';
	onShadow();
}
//关闭播放视频
function offVideo(){
	var video = document.getElementById('video');
	var shiping = document.getElementById('shiping');
	video.style.display = 'none';
	shiping.pause();
	offShadow();
}
//弹出遮罩
function onShadow(){
	var shadow = document.getElementById("shadow");
	shadow.style.display = 'block';
}
//关闭遮罩
function offShadow(){
	var shadow = document.getElementById("shadow");
	shadow.style.display = 'none';
}