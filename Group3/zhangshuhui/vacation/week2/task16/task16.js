/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  var strCity = document.getElementById("aqi-city-input").value.trim();//进行前后去空格及空字符处理
  var strAqi = document.getElementById("aqi-value-input").value.trim();

  var reg1 = new RegExp("^[a-zA-Z\u4e00-\u9fa5]+$");//是否为中文或英文
  var reg2 = new RegExp("^[0-9]+$");

  if(!reg1.test(strCity)){
    alert("输入内容必须是中文或者是英文！");
  }
  if(!reg2.test(strAqi)){
    alert("输入内容必须是整数！");
  }

  aqiData[strCity] = strAqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var table = document.getElementById("aqi-table");
  table.innerHTML = "";
  for(var strCity in aqiData){
    if(table.children.length === 0){
      table.innerHTML = "<tr><td>城市</td> <td>空气质量</td> <td>操作</td> </tr>"
    }
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = strCity;
    tr.appendChild(td1);
    var td2 = document.createElement("td");
    td2.innerHTML = aqiData[strCity];
    tr.appendChild(td2);
    var td3 = document.createElement("td");
    td3.innerHTML = "<button class='del-btn'>删除</button>";
    tr.appendChild(td3);
    table.appendChild(tr);
  }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(target) {
  // do sth.
  var tr =target.parentElement.parentElement;
  var strCity = tr.children[0].innerHTML;
  delete aqiData[strCity];

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var binAdd = document.getElementById("add-btn");
  binAdd.onclick = addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  var table = document.getElementById("aqi-table");
  var arrBtnDel = table.getElementsByClassName("del-btn");

  table.addEventListener("click",function(e){
    if(e.target && e.target.nodeName === "BUTTON"){
      delBtnHandle(e.target);
    }
  })
}

init();
