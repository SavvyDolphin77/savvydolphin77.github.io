// Below function obtained from w3schools.com
// Is script that dispays button that takes user back to top of page

//Get the button:
mybutton = document.getElementById("goToTopButton");

// calls the function below when user scrolls
window.onscroll = function() {scrollFunction()};

// funcion that if started scrolling a bit (20pxs worth) then displays the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
