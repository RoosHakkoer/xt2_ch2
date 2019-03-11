
document.getElementById('clM').addEventListener('click', function(){

  TweenMax.to('.background', 1.5,{scaleY: 1, height:'100vh',ease: Expo.easeOut});
  TweenMax.to('#hello', 1,{opacity: 1, y:0, delay:1,ease: Bounce.easeOut})
  TweenMax.to('#date', 1,{opacity: 1, x:0, delay:1.5,ease: Back.easeOut.config(1.7)})
  TweenMax.to('#clock', 1,{opacity: 1, x:0, delay:2,ease: Elastic.easeOut.config(1.5, 0.5)})
})
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function startDate() {
  var today = new Date();
  var dayNames = ["Sunday", "Monday","Tuesday","Wednesday","Friday","Saturday"];
  var monthNames = ["January", "February","March","April","May","June","July","August","September","October","November","December"];

  document.getElementById('date').innerHTML = dayNames[today.getDay()] + ", "+ today.getDate() +" " + monthNames[today.getMonth()] + " " + today.getFullYear();
}
function animatePMAM() {
  var today = new Date();
  var data = [
    [0, 4, "Good night"],
    [5, 11, "Good morning"],          //messages in an array
    [12, 17, "Good afternoon"],
    [18, 24, "Good night"]
    ],
    hr = new Date().getHours();

      for(var i = 0; i < data.length; i++){
        if(hr >= data[i][0] && hr <= data[i][1]){
        console.log(data[i][2]);
        }
      }
    //  document.getElementsById('hello')innerHTML = data[today.getHours()]; //werkt niet
}


window.onload = function(){
  startTime();
  startDate();
  animatePMAM();
}
