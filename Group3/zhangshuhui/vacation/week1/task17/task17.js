var selectTime ='';
var arr = new Array();
//确定城市

function citySelect(){
  var city = document.getElementById("city-select");
  var oCitys = document.getElementById("citys");
  var aLi = oCitys.getElementsByTagName("li");
  city.onclick = function(){
    oCitys.style.display = 'block';
  }
  for(var i=0;i<aLi.length;i++){
    aLi[i].onclick = function(e){
      city.innerHTML = e.target.innerHTML;
      oCitys.style.display = 'none';
      var seed = randomNum(city.innerHTML);
      aqiDate(seed);
      histogram(selectTime);
       
      
    }
  }

}
//确定时间粒度
function timeSelect(){
  var time = document.getElementById("time-select");
  var aTime = time.getElementsByTagName("li");

  aTime[0].onclick = function(){
    selectTime = '日';
    aTime[0].style.color = 'red';
    aTime[1].style.color = '#000';
    aTime[2].style.color= '#000';
  }
  aTime[1].onclick = function(){
    selectTime = '周';
    aTime[1].style.color = 'red';
    aTime[0].style.color = '#000';
    aTime[2].style.color = '#000';
  }
  aTime[2].onclick = function(){
    selectTime = '月';
    aTime[2].style.color = 'red';
    aTime[1].style.color = '#000';
    aTime[0].style.color = '#000';
  }
  return selectTime;
}
//根据确定的城市找到对应的seed
function randomNum(a){
  switch(a)
  {
    case '北京':
        return 500;
        break;
    case '上海':
        return 300;
        break;
    case '深圳':
        return 400;
        break;
    case '重庆':
        return 200;
        break;
    case '成都':
        return 300;
        break;
    default:
        alert('出错了！');
  }
}
//根据确定的城市生成随机数据
function aqiDate(seed){
  for(var i=0;i<61;i++){
    arr[i]=Math.random() * seed/1;
  }
}
//根据随机数据和日期粒度生成柱状图
function histogram(sTime){
  if(sTime==='日'){
    histogramDay();
  }
  if(sTime==='周'){
    histogramWeek();
  }
  if(sTime==='月'){
    histogramMonth()
  }
}
//日的柱状图
function histogramDay(){
  var ul = document.getElementById("aqi-chart-wrap");
  ul.innerHTML='';
  for(var i=0;i<61;i++){
    var li =document.createElement('li');
    li.style.height = arr[i]+'px';
    li.style.left = (20*i+10)+'px';
    ul.appendChild(li);
  }
}
function histogramWeek(){
  var ul = document.getElementById("aqi-chart-wrap");
  ul.innerHTML='';
  for(var i=0;i<8;i++){
    var li =document.createElement('li');
    li.style.width = 70+'px';
    li.style.height = arr[i]+'px';
    li.style.left = (100*i+10)+'px';
    ul.appendChild(li);
  }
}
function histogramMonth(){
  var ul = document.getElementById("aqi-chart-wrap");
  ul.innerHTML='';
  for(var i=0;i<3;i++){
    var li =document.createElement('li');
    li.style.width = 150+'px';
    li.style.height = arr[i]+'px';
    li.style.left = (200*i+50)+'px';
    ul.appendChild(li);
  }
}

citySelect();
timeSelect();
