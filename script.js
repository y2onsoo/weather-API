
var weatherIcon = {
  '01' : 'fas fa-sun',
  '02' : 'fas fa-cloud-sun',
  '03' : 'fas fa-cloud',
  '04' : 'fas fa-cloud-meatball',
  '09' : 'fas fa-cloud-sun-rain',
  '10' : 'fas fa-cloud-showers-heavy',
  '11' : 'fas fa-poo-storm',
  '13' : 'far fa-snowflake',
  '50' : 'fas fa-smog'
};

// 날씨 api - 서울
var apiURI = "http://api.openweathermap.org/data/2.5/weather?q="+'gangwon-do'+"&appid="+"cdad16695eef24059c08fb46ef92409f";
$.ajax({
  url: apiURI,
  dataType: "json",
  type: "GET",
  async: "false",
  success: function(resp) {

      var $Icon = (resp.weather[0].icon).substr(0,2);
      var $weather_description = resp.weather[0].main;
      var $Temp = Math.floor(resp.main.temp- 273.15) + 'º';
      var $humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
      var $wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
      var $city = '강원도';
      var $cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
      var $temp_min = '최저 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
      var $temp_max = '최고 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
      

      $('.weather_icon').append('<i class="' + weatherIcon[$Icon] +' fa-5x" style="height :30px; width :100px;"></i>');
      $('.weather_description').prepend($weather_description);
      $('.current_temp').prepend($Temp);
      $('.humidity').prepend($humidity);
      $('.wind').prepend($wind);
      $('.city').append($city);
      $('.cloud').append($cloud);
      $('.temp_min').append($temp_min);
      $('.temp_max').append($temp_max);               
  }
})



// // 날씨 api - 경기도
// var apiURI = "http://api.openweathermap.org/data/2.5/weather?q="+'Gyeonggi-do'+"&appid="+"cdad16695eef24059c08fb46ef92409f";
// $.ajax({
//   url: apiURI,
//   dataType: "json",
//   type: "GET",
//   async: "false",
//   success: function(resp) {

//       var $g_Icon = (resp.weather[0].icon).substr(0,2);
//       var $g_weather_description = resp.weather[0].main;
//       var $g_Temp = Math.floor(resp.main.temp- 273.15) + 'º';
//       var $g_humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
//       var $g_wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
//       var $g_city = '경기도';
//       var $g_cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
//       var $g_temp_min = '최저 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
//       var $g_temp_max = '최고 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
      

//       $('.g_weather_icon').append('<i class="' + weatherIcon[$g_Icon] +' fa-5x" style="height : 150px; width : 150px;"></i>');
//       $('.g_weather_description').prepend($g_weather_description);
//       $('.g_current_temp').prepend($g_Temp);
//       $('.g_humidity').prepend($g_humidity);
//       $('.g_wind').prepend($g_wind);
//       $('.g_city').append($g_city);
//       $('.g_cloud').append($g_cloud);
//       $('.g_temp_min').append($g_temp_min);
//       $('.g_temp_max').append($g_temp_max);   
//   }
// })