// Function that opens and closes the id of the question
// Used for FAQ section for accordion menu so enter key works

function faqOpenClose(id) {

  if (id.checked) {
    id.checked = false;
    console.log(id.checked);
    console.log(id);
  } else {
    id.checked = true;
    console.log(id.checked);
    console.log(id);
  }
}
