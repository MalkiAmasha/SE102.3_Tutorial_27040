const popupButton = document.getElementById("popupButton");
const popupBox = document.getElementById("popupBox");
const closeButton = document.getElementById("closeButton");
const okButton = document.getElementById("okButton");

popupButton.addEventListener("click", function() {
  popupBox.style.display = "block";
});

closeButton.addEventListener("click", function() {
  popupBox.style.display = "none";
});

okButton.addEventListener("click", function() {
  popupBox.style.display = "none";
});