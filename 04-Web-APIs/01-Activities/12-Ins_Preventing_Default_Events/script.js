var body = document.body;

var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

submitEl.addEventListener("click", function(event) {
  //preventDefault: Non cancelable, it means to keep record
  event.preventDefault();

  console.log(event);
  
  var response = "Thank you for your submission " +
   nameInput.value + 
  "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
});

