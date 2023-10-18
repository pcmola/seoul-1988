// Timer 표시
let min, sec;
let preMin;
let timer;

function startTimer() {
  min = 4;
  sec = 16;
  timer = setInterval(countTimer, 1000);
}

function countTimer() {
  if (sec != 0) {
    sec--;
  } else {
    if (min != 0) {
      sec = 59;
      min--;
    } else {
      clearTimer(timer, "재생 시작");
    }
  }

  if (min < 10) {
    preMin = "0";
  } else {
    preMin = "";
  }
  if (sec < 10) {
    preSec = "0";
  } else {
    preSec = "";
  }

  document.querySelector("#display").innerHTML =
    "'손에 손잡고' 재생까지 <br/>'Hand in Hand' song<br/><div class='remainingTime'>" +
    preMin +
    min +
    "분 " +
    preSec +
    sec +
    "초 </div><div align='right'>남았습니다.</div>";
}

function clearTimer(t, text) {
  clearInterval(t);
  document.getElementById("display").innerHTML =
    "<div class='remainingTime'>" + text + "</div>";
  document.getElementById("startMin").value = "";
  document.getElementById("startSec").value = "";
}

// 사진 FadeIn/FadeOut
let picCount = 16;
let loopCount = 2;
let totPlayCount = 1;

$("#slideshow > div:gt(0)").hide();

var interval = setInterval(function () {
  totPlayCount++;
  if (totPlayCount == picCount * loopCount) {
    stop();
  }
  $("#slideshow > div:first")
    .fadeOut(2500)
    .next()
    .fadeIn(2500)
    .end()
    .appendTo("#slideshow");
}, 8000);

function stop() {
  clearInterval(interval);
}
