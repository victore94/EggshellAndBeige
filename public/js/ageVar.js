var modal = document.getElementById("myModal");
var totally = document.getElementsByClassName("close")[0];

window.onload = function() {
  modal.style.display = "block";

  totally.onclick = function() {
    location.href = "https://www.disney.com";
  };
  document.getElementById("no").onclick = function() {
    location.href = "https://cponline.pw/";
  };
};
