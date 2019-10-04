var modal = document.getElementById("myModal");
var exit = document.getElementsByClassName("close")[0];

window.onload = function() {
  modal.style.display = "block";

  exit.onclick = function() {
    location.href = "https://www.disney.com";
  };
  document.getElementById("no").onclick = function() {
    location.href = "https://cponline.pw/";
  };
  document.getElementById("yes").onclick = function() {
    modal.style.display = "none";
  };
};
