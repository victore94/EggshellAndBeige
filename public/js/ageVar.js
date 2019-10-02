var modal = document.getElementById("myModal");
var exit = document.getElementsByClassName("close")[0];

window.onload = function() {
  modal.style.display = "block";

  localStorage.getItem("is21")
    ? (modal.style.display = "none")
    : (modal.style.display = "block");

  exit.onclick = function() {
    location.href = "https://www.disney.com";
  };
  document.getElementById("no").onclick = function() {
    localStorage.setItem("is21", false);
    location.href = "https://cponline.pw/";
  };
  document.getElementById("yes").onclick = function() {
    localStorage.setItem("is21", true);
    modal.style.display = "none";
  };
};
