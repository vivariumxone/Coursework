function playMisuc() {
  document.getElementById('bgMusic').play();
}
function playMisuc1() {
  document.getElementById('bgMusic1').play();
}
function playDoor(fun) {
  const audio = document.getElementById('bgMusicDoor');
  audio.play();

  audio.addEventListener('ended', function () {
    fun();
  });
}

function playMisuc2() {
  const dd = document.getElementById('bgMusic2');
  dd.currentTime = 0.3;
  dd.play();
}
function playMisuc3() {
  const dd = document.getElementById('bgMusic3');
  if (mapVariable === 'pvp1') {
    dd.play();
    dd.loop = true;
  } else {
    dd.pause();
  }
}
function playMisuc4() {
  document.getElementById('bgMusic4').play();
}
function playMisuc5() {
  const dd = document.getElementById('bgMusic5');
  if (mapVariable === 'desert') {
    dd.play();
  } else {
    dd.pause();
  }
}
function playsid1() {
  document.getElementById('bgMusic6').play();
}
function playMisuc7() {
  const dd = document.getElementById('bgMusic7');
  if (mapVariable === 'sudrovich') {
    dd.play();
    dd.volume = 0.5;
    dd.loop = true;
  } else {
    dd.pause();
  }
} // музыка сидровича

function playchigur() {
  const dd = document.getElementById('bgMusic8');
  const dd1 = document.getElementById('bgMusic9');
  if (mapVariable === 'city') {
    dd1.play();
    dd.play();
    dd.volume = 0.5;
  } else {
    dd.pause();
    dd1.pause();
  }
}
function playMisuc10() {
  document.getElementById('bgMusic10').play();
}
function playMisuc11() {
  document.getElementById('bgMusic11').play();
}

function playMisuc12() {
  const dd = document.getElementById('bgMusic12');
  if (mapVariable === 'boss') {
    dd.currentTime = 2;
    dd.play();
  } else {
    dd.pause();
  }
}
function playMisuc13() {
  const dd = document.getElementById('bgMusic13');
  if (mapVariable === 'shop') {
    dd.play();
  } else {
    dd.pause();
  }
}
