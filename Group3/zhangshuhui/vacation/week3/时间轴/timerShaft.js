$(function(){
	//实现点击某一日期可以时间轴可以滑动定位到该日期的时间节点处
	$(".year > li").bind("click",function(){
		var year = $(this).children().attr('for');
		$(this).addClass("active")
		.siblings().removeClass("active");
		$('#'+year).parent().prevAll('div').slideUp(800);
		$('#'+year).parent().slideDown(800).nextAll('div').slideDown(800);
	});

	// $("i").bind("click",function(){
	// 	var $content = $(this).next();
	// 	if($content.is(":visible")){
	// 		$content.hide();
	// 	}else{
	// 		$content.show();
	// 	}
	// });

	$("i").click(function() {
		$(this).next().toggle(function(){
			$(this).next().hide();
		},function(){
			$(this).next().show();
		});
	})

	
});