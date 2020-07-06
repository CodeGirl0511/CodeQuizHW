4
var goBack = document.querySelector("#goBack");

goBack.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.replace("index.html");
});

function setHighScores(item){
  var new = document.createElement("li");
  new.innerHTML = "<span style='color:#19A2B8'>" + "<strong>" + item.un + "</strong></span>" + " - " + item.score;
  new.setAttribute("class", "list-group-item");
  document.getElementById("HighScores").appendChild(new);
}

