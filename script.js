var i = 0;
var speed = 50;
var txt = '';

function scrollAnimation(text) {
  i = 0;
  document.getElementById("title").innerHTML = "[guest@davidspecht.de ~]$ ";
  txt = text;
  console.log(txt);
  typeWriter();
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById(txt).scrollIntoView(true);
  }
}
