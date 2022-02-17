var fName = document.querySelector(".first-name")
var lName = document.querySelector(".last-name")
var emailAddress = document.querySelector(".email-address");
var pass = document.querySelector(".password");
var warning = document.querySelectorAll(".input-icons");
var errorNote = document.querySelectorAll(".error-msg");

document.querySelector(".btn").addEventListener("click", function() {
  if (firstNamevalidation(fName)) {

    if (lastNameValidation(lName)) {

      if (ValidateEmail(emailAddress)) {

        if (passwordValidation(pass)) {

        }
      }

    }
    return false;
  }

});




function firstNamevalidation(fName) {

  var firstN = fName.value;
  if (firstN === "" || firstN === null) {
    warning[0].style.display = "block";
    errorNote[0].style.display = "block";
    return false;
  }
  warning[0].style.display = "none";
  errorNote[0].style.display = "none";
  return true;
}



function lastNameValidation(lName) {
  var lastN = lName.value;
  if (lastN === "" || lastN === null) {
    warning[1].style.display = "block";
    errorNote[1].style.display = "block";
    return false;
  }
  warning[1].style.display = "none";
  errorNote[1].style.display = "none";
  return true;
}

function ValidateEmail(emailAddress) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAddress.value.match(mailformat)) {
    warning[2].style.display = "none";
    errorNote[2].style.display = "none";
    return true;
  } else {
    warning[2].style.display = "block";
    errorNote[2].style.display = "block";
    return false;
  }
}

function passwordValidation(pass) {

  if (pass.value === "" || pass.value === null) {
    warning[3].style.display = "block";
    errorNote[3].style.display = "block";
    return false;
  }
  alert('Form Succesfully Submitted');
  window.location.reload();
  return true;
}
