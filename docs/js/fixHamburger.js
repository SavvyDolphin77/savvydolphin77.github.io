// code modifed from W3Schools that checks if checked to change position
// of hamburger menu so that it stays in view if scrolled when activated
function fixHamburger() {
  // Get the checkbox
  var checkBox = document.getElementById("toggle");
  // Get the output text
  var hamburger = document.getElementById("hamburger");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    hamburger.style.position = "absolute";
  } else {
    hamburger.style.position = "fixed";
  }
}
