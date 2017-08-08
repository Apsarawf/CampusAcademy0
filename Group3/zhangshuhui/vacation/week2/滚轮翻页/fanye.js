window.onresize=window.onload = function(){
	var aBox = document.getElementsByTagName("div");
	var aHeight = window.innerHeight;
	var mose = 1;
	for(var i=0;i<aBox.length;i++)
	{
		aBox[i].style.height = aHeight+'px';
		aBox[i].style.width = window.innerWidth+'px';
	}
	window.onmousewheel=function()
	{
		if(event.wheelDelta<0&&mose===1)
		{
			mose=0;
			down();
		}
		else if(event.wheelDelta>0 && mose===1)
		{
			mose=0;
			up();
		}
	}
	function down(){
		var num=0;
			time=setInterval(function (){
                var g1=document.body.scrollTop || document.documentElement.scrollTop;
                document.body.scrollTop=document.documentElement.scrollTop=g1+aHeight/10; // 此处的aHeight仅仅是一个速度，表示每次加一段距离
                num+=1;
                if(num==10){
                    clearInterval(time);
                        mose=1;
                }
            },60)
	}
	function up(){
            var g=document.body.scrollTop || document.documentElement.scrollTop;
            var num=0;
            if(g==0){
                return 0;
            }
            else {
                timer=setInterval(function (){
                    var g1=document.body.scrollTop || document.documentElement.scrollTop;
                    document.body.scrollTop=document.documentElement.scrollTop=g1-(aHeight+0.8)/10; // 此处的aHeight仅仅是一个速度，表示每次加一段距离
                    num+=1;
                    if(num==10){
                        clearInterval(timer);
                        mose=1;
                    }
                },60)
            }
        }

}