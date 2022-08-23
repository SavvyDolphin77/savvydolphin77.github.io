// Code for accordion menu drop to work

// function that adds listener for space to each of the accordion elements
function accordionKeyListeners()
{
  // creates array of elements with the class name from document
  const elements = document.getElementsByClassName("accordionTitle");

  var i = 0;
  // a for loop that iterates through each element adding the listener to it
  //elements.forEach(element => {
//    element.addEventListener("keypress", applyClick(event));
//  });

  for (i = 0; i < elements.length; i++)
  {
    console.log("ran")
    elements[i].addEventListener("keypress", applyClick);
  }
}

// function that checks to see if keypressed is the enter key to send click signal
function applyClick(event)
{
  console.log("click")

  // if the key pressed is entered
  if (event.keyCode == 13)
  {
    console.log("click")

    // sends click signal on the target element and then refocuses it
    event.target.click();
    event.target.focus();
  }
}
