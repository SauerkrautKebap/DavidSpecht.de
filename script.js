var i = 0;
var speed = 50;
var txt = '';

const usr = "https://api.github.com/users/SauerkrautKebap/repos";

makeCards();

async function makeCards() {

  let response = await fetch(usr);

  let repos = await response.json();

  console.log(repos);
  repos.forEach(repo => {
    let date = new Date(repo.updated_at);
    var temp = document.getElementById("projectCardTemplate");
    var card = temp.content.cloneNode(true);
    var div = card.querySelectorAll("div");
    var title = card.getElementById("project-title");
    var description = card.getElementById("project-description");
    var latestEdit = card.getElementById("project-date");
    var fork = card.getElementById("project-fork");
    div[0].href = repo.html_url;
    title.textContent = repo.name;
    repo.fork ? fork.removeAttribute("hidden") : "";
    latestEdit.textContent = date.toLocaleString();
    description.textContent = (repo.description != null) ? repo.description : "No descrition availible";
    document.getElementById("projects").appendChild(card);
  });
}

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

function hamSelect() {
  var list = document.getElementById('hamburger');
  scrollAnimation(list.options[list.selectedIndex].value);
}
