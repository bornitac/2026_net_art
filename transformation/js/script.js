let button = document.querySelector("#changeBackground");
let lyrics = document.querySelector("#lyrics");

document.body.style.backgroundColor = "black";
lyrics.style.color = "white";

button.addEventListener("click", function () {

  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "yellow";
    lyrics.style.color = "black";
    lyrics.innerHTML = "Yeah, uh-huh<br>you know what it is";
  } else {
    document.body.style.backgroundColor = "black";
    lyrics.style.color = "yellow";
    lyrics.innerHTML = "black and yellow";
  }

});