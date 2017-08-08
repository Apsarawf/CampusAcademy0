window.onload = function(){
	var box1 = document.getElementById("box1")
	var aLi = box1.getElementsByTagName("li");

	for(var i=0;i<aLi.length;i++)
	{
		if(aLi[i].className == 'box1-li')
		{
			aLi[i].onmouseover = function()
			{
				var box2 = this.getElementsByTagName("ul")[0];
				box2.style.display = 'block';
			}
			aLi[i].onmouseout = function()
			{
				var box2 = this.getElementsByTagName("ul")[0];
				box2.style.display = 'none';
			}
		}
		else if(aLi[i].className =='box2-li')
		{
			aLi[i].onmouseover = function()
			{
				var box3 = this.getElementsByTagName("ul")[0];
				box3.style.display = 'block';
			}
			aLi[i].onmouseout = function()
			{
				var box3 = this.getElementsByTagName("ul")[0];
				box3.style.display = 'none';
			}
		}
	}
}