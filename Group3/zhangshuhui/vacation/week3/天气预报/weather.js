$(function(){
	var json = new Array();
    $.get('http://weixin.jirengu.com/weather')
        .done(function(data) {
            $.each(data, function(i, tent) {
                if (i == "weather") {
                    $.each(tent, function(i, weat) {
                        $.each(weat, function(i, future) {
                            if (i == "future") {
                                json = future;
                            }
                        });
                    });
                }
            });
        }).done(function() {
            var cu = 0;
            $.each(json, function(i, days) {
                //var $dayWeat = "<div class='dayWea'></div>";
                //$('#innerline').append($dayWeat);
                $('#list').append('<li><label for="'+ cu + '">'+days['date']+'</label></li>');
                $('#box').append("<div class='dayWea'></div>").find('div:eq(' + cu++ + ')').append("<p class='one'>" + days['date'] + "</p>")
                    .append("<img src='http:\/\/weixin.jirengu.com/images/weather/code/" + days['code1'] + ".png'>~")
                    .append("<img src='http:\/\/weixin.jirengu.com/images/weather/code/" + days['code2'] + ".png'>")
                    .append("<p><span>" + days['low'] + "</span>℃~<span>" + days['high'] + "</span>℃</p>")
                    .append("<p><soan>" + days['text'] + "</soan><br><span>" + days['wind'] + "</span></p>");
                //alert(i);
            });
    }).done(function(){
    	$('#list > li').bind("click",function(){
    		var year = $(this).children().attr('for');
    		$("#box > div:eq("+year+")").css("display","block");
    		$("#box > div:eq("+year+")").siblings().css("display","none");
    });

    });


        // .done(function() {
        //     var $innerL = $('#box');
        //     var iWidth = $innerL.find('div.dayWea').get(0).offsetWidth;
        //     var iLeng = $innerL.find('div.dayWea').length;
        //     $innerL.css("width", iWidth * iLeng + "px");
        // });
});